//Router
weatherApp.config(['$sceProvider', '$routeProvider', function ($sceProvider, $routeProvider){
    $sceProvider.enabled(false);
    $routeProvider
        .when("/",{
            templateUrl: "pages/home.html",
            controller: "homeController"
        })
        .when("/forecast/:cnt?",{
            templateUrl: "pages/forecast.html",
            controller: "forecastController"
        })
}]);