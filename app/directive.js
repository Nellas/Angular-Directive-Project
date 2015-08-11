var app = angular.module('directivePractice').directive('nglDisplay', function() {

    return {
        templateUrl: 'app/nglTemplate.html',
        link: function(scope, element, attr) {
            element.on('click', function() {
                scope.showMe = true;
                console.log(attr);
                scope.$apply();
            })
        }
    }


});