const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

// SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp-legacy.office365.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: "Verifications@samsa.org.za",
    pass: "pnvldflkbtkzmmkf",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// API endpoint to send email
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: "Email & message are required" });
    }

    // 1️⃣ Send email to the USER
    const mailToUser = {
      from: `"SAMSA" <Verifications@samsa.org.za>`,
      to: email,
      subject: "Thank you for contacting SAMSA",
      text: `Hi ${name || "User"},\n\nThank you for contacting us.\n\nWe received your message:\n"${message}"\n\nOur team will get back to you shortly.\n\nRegards,\nSAMSA`,
    };

    // 2️⃣ Send email to ADMIN / COMPANY
    const mailToAdmin = {
      from: `"SAMSA" <Verifications@samsa.org.za>`,
      to: "Verifications@samsa.org.za",
      subject: `New Contact Form Inquiry from ${name || "Unknown"}`,
      text: `You have received a new contact request.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailToUser);
    await transporter.sendMail(mailToAdmin);

    return res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
