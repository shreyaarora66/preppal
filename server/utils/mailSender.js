const axios = require("axios");

const mailSender = async (email, title, body) => {
  try {
    const response = await axios.post(
      "https://api.resend.com/emails",
      {
        from: "PrepPal <onboarding@resend.dev>",
        to: [email],
        subject: title,
        html: body,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.log("Mail error:", error.message);
    console.log("Mail error details:", JSON.stringify(error.response?.data));
  }
};

module.exports = mailSender;
