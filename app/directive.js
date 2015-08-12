var app = angular.module('directivePractice').directive('nglDisplay', function() {

    return {
        templateUrl: 'app/nglTemplate.html',

        scope: {
            user: '=',
            setUser: '&'
        },

        link: function(scope, element, attr) {
            element.on('click', function() {
                scope.showMe = !scope.showMe;
                scope.setUser({user: scope.user});
                scope.$apply();
            })
        }
    }


});