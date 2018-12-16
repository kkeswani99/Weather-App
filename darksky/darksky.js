var request = require('request');
var weatherinfo = (lat,lng, callback) => {
	request({
	url: `https://api.darksky.net/forecast/Enter_Your_DarkSky_Key/${lat},${lng}`,
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
