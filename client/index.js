var nodemailer = require("nodemailer");
var remind = require('../index');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '', //provide gmail username
        pass: '' //provide gmail password
    }
});

remind.setMailTransporter(transporter); //configure transporter in the reminder module

var email_sender = ''; //sender's email (gmail)
var email_recipient = ''; //recipient's email 


//remind after
var a = remind.after('10 minutes', email_sender, email_recipient, 'Call home');

//remind at
var b = remind.at('13:05:00', email_sender, email_recipient, 'Get ready for team lunch'); //provide time in 24 hour format

//remind every (recurring reminder)
var c = remind.every('15 minutes', email_sender, email_recipient, 'Drink water and work');

//cancel reminder
remind.cancel(a);

//cancel recurring reminder
remind.cancelRecurring(c);

