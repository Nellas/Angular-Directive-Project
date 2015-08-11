var app = angular.module('directivePractice').service('weatherService', function($http, $q) {

    this.getWeather = function(city) {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city
        })
            .then(function(res) {
                console.log(res);
                var finishedData = {
                    Description: res.data.weather[0].description,
                    Temp: res.data.main.temp
                };
                dfd.resolve(finishedData);
                console.log(finishedData);
            });
        return dfd.promise;
    }


});