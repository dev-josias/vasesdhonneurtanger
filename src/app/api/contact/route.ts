import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, action } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide" },
        { status: 400 }
      );
    }

    // Préparer le contenu de l'email
    const emailSubject = action
      ? `Nouveau message - ${action} - ${name}`
      : `Nouveau message de contact - ${name}`;

    const emailText = `
Nouveau message depuis le formulaire de contact

Nom: ${name}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ""}
${action ? `Action demandée: ${action}` : ""}

Message:
${message}

---
Ce message a été envoyé depuis le site vasesdhonneurtanger.org
    `.trim();

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #184236; border-bottom: 3px solid #DBC05E; padding-bottom: 10px;">
          Nouveau message de contact
        </h2>
        <div style="background: #fafafa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 8px 0;"><strong style="color: #184236;">Nom:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong style="color: #184236;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${
            phone
              ? `<p style="margin: 8px 0;"><strong style="color: #184236;">Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>`
              : ""
          }
          ${
            action
              ? `<p style="margin: 8px 0;"><strong style="color: #184236;">Action demandée:</strong> ${action}</p>`
              : ""
          }
        </div>
        <div style="background: white; padding: 20px; border-left: 4px solid #DBC05E; margin: 20px 0;">
          <h3 style="color: #184236; margin-top: 0;">Message:</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(
            /\n/g,
            "<br>"
          )}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          Ce message a été envoyé depuis le site <a href="https://vasesdhonneurtanger.org">vasesdhonneurtanger.org</a>
        </p>
      </div>
    `;

    // Utiliser Resend pour l'envoi d'emails
    if (!process.env.RESEND_API_KEY) {
      // En développement, logger le message
      if (process.env.NODE_ENV === "development") {
        console.log("=== NOUVEAU MESSAGE DE CONTACT ===");
        console.log(emailText);
        console.log("===================================");
        return NextResponse.json(
          {
            message:
              "Message reçu (en développement - configurer RESEND_API_KEY pour l'envoi réel)",
            debug: emailText,
          },
          { status: 200 }
        );
      }

      // En production, erreur si pas configuré
      return NextResponse.json(
        {
          error:
            "Service d'email non configuré. Veuillez configurer RESEND_API_KEY dans les variables d'environnement.",
        },
        { status: 503 }
      );
    }

    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from:
          process.env.RESEND_FROM ||
          "Vases d'Honneur Tanger <noreply@vasesdhonneurtanger.org>",
        to: process.env.CONTACT_EMAIL || "hello@vasesdhonneurtanger.org",
        replyTo: email,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });

      if (error) {
        console.error("Erreur Resend:", error);
        throw error;
      }

      return NextResponse.json(
        { message: "Message envoyé avec succès !", id: data?.id },
        { status: 200 }
      );
    } catch (resendError) {
      console.error("Erreur Resend:", resendError);
      throw resendError;
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      },
      { status: 500 }
    );
  }
}
