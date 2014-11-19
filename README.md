Email Reminder
==============
A simple node utility to send email reminders.

## Installation

    $ npm install email-reminder

## Usage

```js
var remind = require('email-reminder');
   
//remind after
var a = remind.after('10 minutes', email_recipient, 'Call home');

//remind at
var b = remind.at('13:05:00', email_recipient, 'Get ready for team lunch'); //provide time in 24 hour format

//remind every (recurring reminder)
var c = remind.every('15 minutes', email_recipient, 'Drink water and work');

//cancel reminder
remind.cancel(a);

//cancel recurring reminder
remind.cancelRecurring(c);
```
Refer example folder to configure SMTP username & password and send reminders.

## Release History

* 0.1.0 Initial release

## License

* BSD
