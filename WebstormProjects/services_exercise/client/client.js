var app = angular.module('userApp', []);
app.controller('MainController', ['$scope', 'StudentService', function($scope, StudentService){

    $scope.theta = StudentService.theta;
}]);

app.factory('StudentService', function(){

    //var data = {};

    var getStudent = function(){
        return 'hello world';
    };

    //var revealFunction = function(){
    //        $scope.visible = true;
    //
    //        $scope.toggle = function() {
    //            $scope.visible = !$scope.visible;
    //        };
    //
    //};
    //revealFunction();



    var theta = {
        name: 'Theta',
        numStudents: 22,
        spiritAnimal: 'Wolverine',
        getStudents: getStudent(),
        school: 'Prime Academy',
        location: {
            state: 'MN',
            city: 'Bloomington'
        },
        country: 'Usa',
        language: function(){
            return 'JavaScript'
        }

    };

    return {
        theta: theta
    }


});

