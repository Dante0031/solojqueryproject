/**
 * Created by NathanBriscoe on 6/17/16.
 */
var app = angular.module('myApp', []);

    app.controller('MovieController', ['$scope', '$http', function($scope, $http){
        $scope.$watch('search', function(){
            fetch();
        });
        $scope.search = "Sherlock Holmes";

        function fetch(){
            $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
                .then(function(response){
                    $scope.details = response.data;
                });

            $http.get("http://www.omdbapi.com/?s=" + $scope.search)
                .then(function(response){
                    $scope.related = response.data;
                });

        }

        $scope.update = function(movie){
            $scope.search = movie.Title;
        };

        $scope.select = function() {
            this.setSelectionRange(0, this.value.length);
        }
    }]);


