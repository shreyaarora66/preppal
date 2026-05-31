const axios = require("axios");

const mailSender = async (email, title, body) => {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    console.log("BREVO_API_KEY starts with:", apiKey ? apiKey.substring(0, 15) : "UNDEFINED");
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "PrepPal", email: process.env.MAIL_USER },
        to: [{ email: email }],
        subject: title,
        htmlContent: body,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );
    console.log("Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Mail error:", error.message);
  }
};

module.exports = mailSender;
