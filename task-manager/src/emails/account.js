const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cagriorskaya@hotmail.com',
    subject: 'Welcome to the Task App!',
    text: `Welcome ${name.split(' ')[0]}, thanks for joining in. Let me know how you get along with the app.`
  }).then(() => {
    console.log('Email sent')
  }).catch(e => {
    console.log(e)
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cagriorskaya@hotmail.com',
    subject: 'Goodbye!',
    text: `Goodbye ${name.split(' ')[0]}! Can you let us know why you deleted your account?`
  }).then(() => {
    console.log('Email sent')
  }).catch(e => {
    console.log(e)
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}