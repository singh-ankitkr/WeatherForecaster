//Controllers
weatherApp.controller('homeController', ["$scope", "$location", "city", function($scope, $location, city){
    $scope.city = city.city;

    $scope.$watch("city", function(){
        city.city = $scope.city;
    })

    $scope.submit = function (){
        $location.path("/forecast");
    };
}]);

weatherApp.controller('forecastController', ["$scope", "$routeParams", "city", "weatherService", function($scope, $routeParams, city, weatherService){
    $scope.city = city.city;
    $scope.cnt = $routeParams.cnt || '16';

    $scope.convertToCelcius = function(degK){
        return Math.round((degK - 273.15)*10)/10;
    }
    console.log(city);
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.cnt);
    $scope.convertToDate = function(timestamp){

        var date =  new Date(timestamp*1000);
        return date.toLocaleTimeString() + ' ' + date.toDateString();
    }
}]);