const yargs = require('yargs');
const axios = require('axios');

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

var darkskyURL = `https://api.darksky.net/forecast/Enter_Your_DarkSky_Key/${argv.lat},${argv.lng}`;

axios.get(darkskyURL).then((response) => {
	if( response.data.status === 'ZERO_RESULTS')
	{
		throw new Error('Unable to find that address');
	}
	console.log("");
	console.log(`The Timezone     of Place is  ${response.data.timezone}`);
	console.log(`The Longitude    of Place is  ${response.data.longitude}`);
	console.log(`The Latitude     of Place is  ${response.data.latitude}`);
	console.log("");
	console.log("   Weather Details are as follows");
	console.log("");
	console.log(`The Temperature  of Place is  ${response.data.currently.temperature}`);
	console.log(`The Humidity     of Place is  ${response.data.currently.humidity}`);
	console.log(`The Summary      of Place is  ${response.data.currently.summary}`);
	
}).catch((e) => {
	if(e.code === 'ENOTFOUND')
		console.log('Unable to connect to DarkSky API Server!!!');
	else if(e.response.status === 400)
		console.log("INVALID INPUT");
	else
		console.log(e.message);
});
