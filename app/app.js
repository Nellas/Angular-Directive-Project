var app = angular.module('directivePractice', ['ngRoute']).config(function($routeProvider){

    $routeProvider

    .when('/home',{
        templateUrl: 'home/homeTemplate.html',
        controller: 'homeCtrl'
    })

    .when('/weather', {
            templateUrl: 'app/weather/dirWeather.html',
            controller: 'homeCtrl'
        })

    .otherwise({
        redirectTo: 'home/homeTemplate.html'
    })

});
