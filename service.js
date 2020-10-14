//Service
weatherApp.service("city", function(){
    this.city = "Varanasi, India";
});

weatherApp.service("weatherService", ["$resource", function($resource){
    this.getWeather = function(city, cnt) {
        let weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/",
            {get: {method: "JSONP"}});
        return weatherApi.get({
            q: city,
            cnt: cnt,
            appid: "564d18be0ca9bc72a37190c56894c3aa"
        });
    };
}]);