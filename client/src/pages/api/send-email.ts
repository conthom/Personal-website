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

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO;

  if (!emailUser || !emailPass || !emailTo) {
    const missingVariables = [
      !emailUser && "EMAIL_USER",
      !emailPass && "EMAIL_PASS",
      !emailTo && "EMAIL_TO",
    ].filter(Boolean);
    console.error(`Email service configuration is missing: ${missingVariables.join(", ")}`);
    return res.status(500).json({ success: false, error: "Email service is not configured" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  try {
    await transporter.sendMail({
      from: emailUser,
      replyTo: email,
      to: emailTo,
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
