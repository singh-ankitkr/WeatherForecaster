//Directive
weatherApp.directive("forecastPanel", function(){
    return {
        replace: true,
        restrict: "AE",
        templateUrl: "directives/forecastPanel.html",
        scope: {
            date: "@",
            temp: "@",
            convertToDate: "&",
            convertToCelcius: "&"
        }
    }
})