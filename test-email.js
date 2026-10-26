// test-email.js
// Utility script to verify Gmail Nodemailer credentials
require("dotenv").config();
const nodemailer = require("nodemailer");

async function testEmail() {
  console.log("--------------------------------------------------");
  console.log("🔍 Testing Homigo Email Service Configuration");
  console.log("--------------------------------------------------");
  console.log("EMAIL_USER:          ", process.env.EMAIL_USER || "(NOT SET)");
  console.log("EMAIL_APP_PASSWORD:  ", process.env.EMAIL_APP_PASSWORD ? "******** (Configured)" : "(NOT SET)");
  console.log("--------------------------------------------------");

  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error("❌ ERROR: Both EMAIL_USER and EMAIL_APP_PASSWORD must be configured in your .env file!");
    console.log("\n💡 To configure Gmail:");
    console.log("1. In your .env file, set:");
    console.log("   EMAIL_USER=homigo.booking@gmail.com");
    console.log("   EMAIL_APP_PASSWORD=your_16_char_google_app_password");
    console.log("\n2. Generate your 16-character App Password at: https://myaccount.google.com/apppasswords");
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD
    }
  });

  try {
    console.log("⏳ Connecting to Gmail SMTP server...");
    await transporter.verify();
    console.log("✅ Connection established & credentials authenticated successfully!\n");

    const recipient = process.argv[2] || process.env.EMAIL_USER;
    console.log(`📤 Dispatching test confirmation email to: ${recipient}...`);

    const info = await transporter.sendMail({
      from: `"Homigo Stays" <${process.env.EMAIL_USER}>`,
      to: recipient,
      subject: "🧭 Homigo Booking Service — Email Connection Verified!",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 540px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
          <div style="background: linear-gradient(135deg, #fe424d 0%, #ff6b6b 100%); padding: 24px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800;">🧭 Homigo</h1>
            <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.95;">Email Dispatch System Live</p>
          </div>
          <div style="padding: 24px; color: #1e293b;">
            <h2 style="font-size: 18px; margin-top: 0; color: #0f172a;">System Connected Successfully! 🎉</h2>
            <p style="font-size: 14px; line-height: 1.6; color: #475569;">
              This test confirms that <strong>${process.env.EMAIL_USER}</strong> is now fully authorized to dispatch instant booking confirmation emails to users.
            </p>
            <div style="background: #f8fafc; border-left: 4px solid #10b981; padding: 12px 16px; margin: 18px 0; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #065f46; font-weight: 600;">Status: Ready for Production & Local Bookings</p>
            </div>
            <p style="font-size: 13px; color: #64748b; margin-bottom: 0;">Verified on: ${new Date().toLocaleString("en-IN")}</p>
          </div>
        </div>
      `
    });

    console.log("🎉 Test email delivered successfully!");
    console.log("Message ID:", info.messageId);
    console.log("--------------------------------------------------");
  } catch (err) {
    console.error("❌ Email authentication/delivery failed:", err.message);
    if (err.message.includes("Invalid login") || err.message.includes("Username and Password not accepted")) {
      console.log("\n💡 Gmail Tip: Make sure you are using a 16-character 'App Password' (without spaces), NOT your regular Google account password.");
      console.log("Visit: https://myaccount.google.com/apppasswords");
    }
    process.exit(1);
  }
}

testEmail();
