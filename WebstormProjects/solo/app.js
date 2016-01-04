/**
 * Created by NathanBriscoe on 1/4/16.
 */
$.ajax("data.json").then(function(response){
    for(var i = 0;i < response.length;i++){
        var $content = '';
        $id = response[i].id;
        $gender = response[i].gender;
        $first_name = response[i].first_name;
        $last_name = response[i].last_name;
        $email = response[i].email;
        $content = "id: " + $id + '<br/>' + "gender: " + $gender + '<br/>' + "First Name: " + $first_name + '<br/>' + "Last Name: " + $last_name + '<br/> <br/>';
        $(".content").append($content);
    }
});
//var array = {};
//var currentPositon = 0;
//
//$(document).ready(function(){
//
//    $.ajax("data.json").then(function (response) {
//        for (var i = 0; i < response.length; i++) {
//            var $content = '';
//            $id = response[i].id;
//            $gender = response[i].gender;
//            $first_name = response[i].first_name;
//            $last_name = response[i].last_name;
//            $email = response[i].email;
//            $content = "id: " + $id + '<br/>' + "gender: " + $gender + '<br/>' + "First Name: " + $first_name + '<br/>' + "Last Name: " + $last_name + '<br/> <br/>';
//            $content = '<div class = "id: " $id = "person' + i + '"  data-personNumber="' + i + '" data-person="yes"></div>');
//
//            $('#peopleContainer').append('<div class = "pplContainer" id = "person' + i + '"  data-personNumber="' + i + '" data-person="yes"></div>');
//
//
//            var $el = $('.content').children().last().hide();
//            $(".content").append($content);
//
//    function addToDom(data){
//        for(var i = 0; i < data.people.length; i++){
//            $('#peopleContainer').append('<div class = "pplContainer" id = "person' + i + '"  data-personNumber="' + i + '" data-person="yes"></div>');
//            var $el = $('#peopleContainer').children().last().hide();
//            $el.append('<p>Name: ' + data.people[i].name + '</p>');
//            $el.append('<p>Location: ' + data.people[i].location + '</p>');
//            $el.append('<p>Spirit Animal: ' + data.people[i].animal + '</p>');
//        }
//
//        $('#person0').show();
//        }
//
//    //getData();
//    $('.next').on('click', function(){
//        var lastPos = response.length;
//        ('#' + currentPositon).hide();
//        currentPositon++;
//        $('#person' + currentPositon).show();
//        if(currentPositon == (lastPos)){
//            currentPositon = 0;
//            $('#person0').show();
//        }
//        //console.log(lastPos);
//    })
//
//    $('.prev').on('click', function(){
//        $('#person' + currentPositon).hide();
//        currentPositon --;
//        $('#person' + currentPositon).show();
//        if( currentPositon ==(-1)){
//
//            currentPositon = ((response.length)-1);
//
//            $('#person' + (currentPositon)).show();
//        }
//
//        console.log(currentPositon);
//    })
//
//
//
//
//
//    });
//});
//
////function getData() {
////
////}
//
//
//
//
//
//
//
//
