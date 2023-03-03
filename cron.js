var CronJob = require('cron').CronJob;
var job = new CronJob(
	'00 48 15 * * 0-6',
	function() {
		console.log('You will see this message every second');
	},
	null,
	false,
	'Asia/Ho_Chi_Minh'
);

var job2 = new CronJob(
	'00 49 15 * * 0-6',
	function() {
		console.log('You will see this message every second 2');
	},
	null,
	false,
	'Asia/Ho_Chi_Minh'
);

job.start()
job2.start()