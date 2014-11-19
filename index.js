var transporter, reminder, self;

function sendReminder(time, to, message){
	reminder = setTimeout(function(){
			var options = {
			from: '', //provide gmail username
			to: to, 
			subject: 'Reminder', 
			html: "Hi,<br/>This is a gentle reminder for you to: <b>"+message+"</b><br/><br/>Thanks!"
		};
			self.transporter.sendMail(options, function(error, info){
			if(error){
				console.log(error);
			}else{
				console.log('Reminder sent: ' + info.response);
			}
		});
			},time);
	return reminder;
};
function sendRecurringReminder(time, to, message){
	reminder = setInterval(function(){
			var options = {
			from: '', //provide gmail username
			to: to, 
			subject: 'Reminder', 
			html: "Hi,<br/>This is a gentle reminder for you to: <b>"+message+"</b><br/><br/>Thanks!"
		};
			self.transporter.sendMail(options, function(error, info){
			if(error){
				console.log(error);
			}else{
				console.log('Reminder sent: ' + info.response);
			}
		});
			},time);
	return reminder;
};
module.exports = {	
	setMailTransporter : function(mailTransporter){
		this.transporter = mailTransporter;
		self = this;
  },
	after : function(input, to, message) {	 
		console.log('Reminder email will be sent in '+input);
		var unit = input.split(" ")[1];
		switch(unit){
		case 'minutes':
			var minutes = input.split(" ")[0];
			return sendReminder(minutes*60000, to, message);	
			break;
		case 'hour':
			var hours = input.split(" ")[0];
			return sendReminder(hours*3600000, to, message);	
			break;
		default:
			console.log('Please provide a valid input!');
		}	
  },
    at : function(input, to, message){
		var hours = input.split(":")[0];
		var min = input.split(":")[1];
		var seconds = input.split(":")[2];
		var remindertime = (hours*3600000)+(min*60000)+(seconds*1000);
		var presenttimehour = new Date().getHours();
		var presenttimemin = new Date().getMinutes();
		var presenttimesec = new Date().getSeconds();
		var presenttime = (presenttimehour*3600000)+(presenttimemin*60000)+(presenttimesec*1000);
		var diff = remindertime - presenttime;
		if(remindertime>presenttime){
			console.log('Reminder email will be sent at '+input);
			return sendReminder(diff, to, message);
		}else{
			console.log('Please provide a valid input!');
		}
  },
	every : function(input, to, message){
		console.log('Reminder email will be sent every '+input);
		var unit = input.split(" ")[1];
		switch(unit){
		case 'minutes':
			var minutes = input.split(" ")[0];
			return sendRecurringReminder(minutes*60000, to, message);	
			break;
		case 'hour':
			var hours = input.split(" ")[0];
			return sendRecurringReminder(hours*3600000, to, message);	
			break;
		default:
			console.log('Please provide a valid input!');
		}		
  },
	cancel : function(reminderId){
		clearTimeout(reminderId);
		console.log('Reminder cancelled!');
  },
	cancelRecurring : function(reminderId){
		clearInterval(reminderId);
		console.log('Recurring reminder cancelled!');
  }	
};