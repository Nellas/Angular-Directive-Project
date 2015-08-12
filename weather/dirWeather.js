var app = angular.module('directivePractice').directive('nglWeather', function() {

    return {
        templateUrl: 'weather/dirWeather.html',
        scope: {
            currentUser: '=',
            weatherCall: '&'
        },

        link: function (scope, elem, attrs) {
            console.log(scope.currentUser);

        },

        controller: function ($scope) {
            $scope.weatherCall({city: $scope.currentUser.city})
                .then(function(data) {
                    $scope.userWeather = data.description;
                    $scope.userTemp = data.temp;
                })
        }
    }
});