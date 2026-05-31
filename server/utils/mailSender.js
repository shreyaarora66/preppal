const axios = require("axios");

const mailSender = async (email, title, body) => {
  try {
    const response = await axios.post(
      "https://api.sendgrid.com/v3/mail/send",
      {
        personalizations: [{ to: [{ email: email }] }],
        from: { email: "shreyaarora4531@gmail.com", name: "PrepPal" },
        subject: title,
        content: [{ type: "text/html", value: body }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Email sent successfully:", response.status);
    return response.data;
  } catch (error) {
    console.log("Mail error:", error.message);
    console.log("Mail error details:", JSON.stringify(error.response?.data));
  }
};

module.exports = mailSender;
