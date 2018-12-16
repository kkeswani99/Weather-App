const yargs = require('yargs');
const darksky = require('./darksky/darksky.js');

const argv = yargs
	.options({
		lat: {
			demand: true,
			alias: 'Lattitude',
			describe: 'Lattitude to get weather information',
			string: true
		},
		lng: {
			demand: true,
			alias: 'Longitude',
			describe: 'Longitude to get weather information',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

darksky.weatherinfo(argv.lat,argv.lng, (errorMessage, results) => {
	if(errorMessage)
	{
		console.log(errorMessage);
	}
	else
	{
		console.log(`The place is in country with timezone ${results.timezone}`)
		console.log(`It's Currently ${results.temperature}. It feels like ${results.apparentTemperature}`);
	}
});


