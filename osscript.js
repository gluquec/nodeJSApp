/* OSScript.js */

var os = require('os');

var osInfo = new Array( 'type: '+os.type();
						'Node version'+process.version,
						'Platform: '+os.platform(),
						'Hostname: '+os.hostname(),
						'Total Memory: '+os.totalmem(),
						'Free Memory: '+os.freemem(),
						'Uptime: '+os.uptime()
					  );
					  
console.log('Here\'s some info about your system: ');

var i=0;
while(i < osInfo.length){
	console.log(osInfo[i++]);
}