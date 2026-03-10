import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const subjectLabels = {
  devis: 'Demande de devis',
  creation: 'Création de jardin',
  terrasse: 'Terrasse / Patio',
  cloture: 'Clôture / Maçonnerie',
  entretien: 'Entretien paysager',
  autre: 'Autre',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { prenom, nom, email, telephone, sujet, message } = req.body;

  if (!prenom || !nom || !email || !sujet || !message) {
    return res.status(400).json({ error: 'Champs obligatoires manquants' });
  }

  const sujetLabel = subjectLabels[sujet] || sujet;

  try {
    await resend.emails.send({
      from: 'Formulaire Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Terrasses & Paysages] ${sujetLabel} — ${prenom} ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #2d4a22;">Nouveau message depuis le formulaire de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 130px;">Nom</td>
              <td style="padding: 8px 0;">${prenom} ${nom}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${telephone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Téléphone</td>
              <td style="padding: 8px 0;">${telephone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Sujet</td>
              <td style="padding: 8px 0;">${sujetLabel}</td>
            </tr>
          </table>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
          <h3 style="color: #2d4a22;">Message</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur Resend:', error);
    return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
  }
}
