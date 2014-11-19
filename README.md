Email Reminder
==============
A simple node utility to send email reminders.

## Installation

    $ npm install email-reminder

## Usage

```js
var remind = require('email-reminder');
   
//remind after
var rem_after = remind.after('10 minutes', email_sender, email_recipient, 'Call home');

//remind at
var rem_at = remind.at('13:05:00', email_sender, email_recipient, 'Get ready for team lunch'); //provide time in 24 hour format

//remind every (recurring reminder)
var recc_rem = remind.every('15 minutes', email_sender, email_recipient, 'Drink water and work');

//cancel reminder
remind.cancel(rem_after);

//cancel recurring reminder
remind.cancelRecurring(recc_rem);
```
Refer client folder's index.js file to configure SMTP username & password and send reminders.

## Methods

* remind.after
* remind.at
* remind.every
* remind.cancel
* remind.cancelRecurring

## Release Version

* 0.1.4

## License

* BSD
