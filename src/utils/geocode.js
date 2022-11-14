const request = require("postman-request")

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamVuaXNoa29yYXQzIiwiYSI6ImNsYWFqdWpndDA4Zjk0MG50dW1mcGRqcnUifQ.gHOzv88ogKRW3_MZd27tAg&limit=1'

    request({url: url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!. Check your internet connection', undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find the location. Try another search.', undefined)
        }
        else{
            callback(undefined, {
                Location: body.features[0].place_name,
                Latitude: body.features[0].center[1],
                Longitude: body.features[0].center[0],
            })
        }
    })
}  

module.exports = geoCode