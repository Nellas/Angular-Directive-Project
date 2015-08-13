var app = angular.module('directivePractice').directive('nglWeather', function() {

    return {
        templateUrl: 'weather/dirWeather.html',
        scope: {
            currentUser: '=',
            weatherCall: '&'
        },

        controller: function ($scope) {
            $scope.$watch(function(){
                return $scope.currentUser
            }, $scope.weatherCall({city: $scope.currentUser.city})
                .then(function(data) {
                    $scope.userWeather = data.description;
                    $scope.userTemp = data.temp;
            }))
        }
    }
});

//$scope.weatherCall({city: $scope.currentUser.city})
//    .then(function(data) {
//        $scope.userWeather = data.description;
//        $scope.userTemp = data.temp;