const request = require("postman-request");

const forecast = (Latitude, Longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=678ce07f6276c31b5988bc81e9f3cdd7&query=' + Latitude + ',' + Longitude + '&units=f'

    request({url: url, json: true} , (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!. Check your internet connection', undefined)
        }
        else if(body.error){
            callback('Unable to find the location. Try another search.', undefined)
        }
        else{
            callback(undefined, (body.current.weather_descriptions[0])+('. It is currently ') + (body.current.temperature ) + (' degrees out. It feels like ') + (body.current.feelslike ) + (' degrees out.') + ('The humidity is ') + (body.current.humidity))
            // callback(undefined, (body.current.weather_descriptions[0])+('. It is currently ') + (body.current.temperature ) + (' degrees out. It feels like ') + (body.current.feelslike ) + (' degrees out.'))
        }
    })
}

module.exports = forecast

