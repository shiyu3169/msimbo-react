module.exports = function(app) {
  var API_KEY = process.env.MAILGUN_API_KEY || "test";
  var DOMAIN = process.env.MAILGUN_DOMAIN || "test";
  var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

  app.post("/api/contact", contact);

  function contact(req, res) {
    const data = req.body;
    const message = {
      from: `${data.name} <${data.email}>`,
      to: "shiyu3169@gmail.com",
      subject: data.subject,
      text: data.content
    };
    mailgun.messages().send(message, (error, body) => {
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        res.sendStatus(200);
      }
    });
  }
};
