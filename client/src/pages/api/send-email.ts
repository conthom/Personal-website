import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, reason, message } = req.body;

  if (!name || !email || !reason || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact from ${name} (${reason})`,
      text: message,
      html: `<p><b>From:</b> ${name} (${email})</p><p><b>Reason:</b> ${reason}</p><p><b>Message:</b></p><p>${message}</p>`,
    });

    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
}
