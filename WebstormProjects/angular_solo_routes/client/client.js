var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/bernie', {
            templateUrl:'views/bernie.html',
            controller: 'bernie'
        })
        .when('/hilary', {
            templateUrl:'views/hilary.html',
            controller: 'hilary'
        })
        .when('/cruz', {
            templateUrl:'views/cruz.html',
            controller: 'cruz'
        })
        .when('/rubio', {
            templateUrl:'views/rubio.html',
            controller: 'rubio'
        });

    //$locationProvider.html5mode(true);
}]);

app.controller('bernie', ['$scope', function($scope){

}]);

app.controller('hilary', ['$scope', function($scope){

}]);

app.controller('cruz', ['$scope', function($scope){

}]);

app.controller('rubio', ['$scope', function($scope){

}]);