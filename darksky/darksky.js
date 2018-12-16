var request = require('request');
var weatherinfo = (lat,lng, callback) => {
	request({
	url: `https://api.darksky.net/forecast/7ac723f82379a65c3447356285654e49/${lat},${lng}`,
	json: true
	}, (error,response,body) => {
	 if(error)
	 {
	 	callback("Unable to connect to Dark Sky Server");
	 }
	 else if(response.statusCode === 400)
	 {
	 	callback("Unable to fetch weather due to invalid input details");	
	 }
	else if(response.statusCode === 200)
	{
		callback(undefined, {
			timezone: body.timezone,
			latitude: body.latitude,
			longitude: body.longitude,
			temperature: body.currently.temperature,
			humidity: body.currently.humidity,
			apparentTemperature: body.currently.apparentTemperature
		});
	}
});


	
};
module.exports.weatherinfo = weatherinfo;