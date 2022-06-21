//Gets the current date and displays it
let currentDay = moment().format('MMMM Do YYYY');
$('#currentDay').append(currentDay);
//gets the current hour of the day
let currentTime = moment().hour();
//
    //if the current time is before 9 AM, display all of the time blocks as green
    if (currentTime < 9) {
        $("textarea").css("background-color", "lightgreen");
    //if the current time is after 5PM, display all of the time blocks as grey
    } else if (currentTime > 17) {
        $("textarea").css("background-color", "lightgrey");
    //checks if the current hour is the same as the hour on the schedule
    //if it is, it displays that hour as pink, and if it is not, it is displayed as green or grey depending on if the time is before or after
    } else if (currentTime === 9) {
        $("textarea").css("background-color", "lightgreen");
        $("#nine-am").css("background-color", "pink");
    } else if (currentTime === 10) {
        $("textarea").css("background-color", "lightgreen");
        $("#ten-am").css("background-color", "pink");
        $("#nine-am").css("background-color", "lightgrey");
    } else if (currentTime === 11) {
        $("textarea").css("background-color", "lightgreen");
        $("#eleven-am").css("background-color", "pink");
        $("#nine-am").css("background-color", "lightgrey");
        $("#ten-am").css("background-color", "lightgrey");
    } else if (currentTime === 12) {
        $("textarea").css("background-color", "lightgreen");
        $("#twelve-pm").css("background-color", "pink");
        $("#nine-am").css("background-color", "lightgrey");
        $("#ten-am").css("background-color", "lightgrey");
        $("#eleven-am").css("background-color", "lightgrey");
    } else if (currentTime === 13) {
        $("textarea").css("background-color", "lightgreen");
        $("#one-pm").css("background-color", "pink");
        $("#nine-am").css("background-color", "lightgrey");
        $("#ten-am").css("background-color", "lightgrey");
        $("#eleven-am").css("background-color", "lightgrey");
        $("#twelve-pm").css("background-color", "lightgrey");
    }  else if (currentTime === 14) {
        $("textarea").css("background-color", "lightgreen");
        $("#two-pm").css("background-color", "pink");
        $("#nine-am").css("background-color", "lightgrey");
        $("#ten-am").css("background-color", "lightgrey");
        $("#eleven-am").css("background-color", "lightgrey");
        $("#twelve-pm").css("background-color", "lightgrey");
        $("#one-pm").css("background-color", "lightgrey");
    }  else if (currentTime === 15) {
        $("textarea").css("background-color", "lightgreen");
        $("#three-pm").css("background-color", "pink");
        $("#nine-am").css("background-color", "lightgrey");
        $("#ten-am").css("background-color", "lightgrey");
        $("#eleven-am").css("background-color", "lightgrey");
        $("#twelve-pm").css("background-color", "lightgrey");
        $("#one-pm").css("background-color", "lightgrey");
        $("#two-pm").css("background-color", "lightgrey");
    }  else if (currentTime === 16) {
        $("textarea").css("background-color", "lightgreen");
        $("#four-pm").css("background-color", "pink");
        $("#nine-am").css("background-color", "lightgrey");
        $("#ten-am").css("background-color", "lightgrey");
        $("#eleven-am").css("background-color", "lightgrey");
        $("#twelve-pm").css("background-color", "lightgrey");
        $("#one-pm").css("background-color", "lightgrey");
        $("#two-pm").css("background-color", "lightgrey");
        $("#three-pm").css("background-color", "lightgrey");
    }  else if (currentTime === 17) {
        $("textarea").css("background-color", "lightgreen");
        $("#five-pm").css("background-color", "pink");
        $("#nine-am").css("background-color", "lightgrey");
        $("#ten-am").css("background-color", "lightgrey");
        $("#eleven-am").css("background-color", "lightgrey");
        $("#twelve-pm").css("background-color", "lightgrey");
        $("#one-pm").css("background-color", "lightgrey");
        $("#two-pm").css("background-color", "lightgrey");
        $("#three-pm").css("background-color", "lightgrey");
        $("#four-pm").css("background-color", "lightgrey");
    };

    //event listeners to add the textarea with the specified id's value to the local storage.
$("#btn-1").click(function(){
    var nineAMText = $('#nine-am').val();
    localStorage.setItem('nineAMText', nineAMText);
});

$("#btn-2").click(function(){
    var tenAMText = $('#ten-am').val();
    localStorage.setItem('tenAMText', tenAMText);
});

$("#btn-3").click(function(){
    var elevenAMText = $('#eleven-am').val();
    localStorage.setItem('elevenAMText', elevenAMText);
});

$("#btn-4").click(function(){
    var twelvePMText = $('#twelve-pm').val();
    localStorage.setItem('twelvePMText', twelvePMText);
});

$("#btn-5").click(function(){
    var onePMText = $('#one-pm').val();
    localStorage.setItem('onePMText', onePMText);
});

$("#btn-6").click(function(){
    var twoPMText = $('#two-pm').val();
    localStorage.setItem('twoPMText', twoPMText);
});

$("#btn-7").click(function(){
    var threePMText = $('#three-pm').val();
    localStorage.setItem('threePMText', threePMText);
});

$("#btn-8").click(function(){
    var fourPMText = $('#four-pm').val();
    localStorage.setItem('fourPMText', fourPMText);
});

$("#btn-9").click(function(){
    var fivePMText = $('#five-pm').val();
    localStorage.setItem('fivePMText', fivePMText);
});

//gets the local storage values and keeps them in their id's textareas.
$("#nine-am").val(localStorage.getItem("nineAMText"));
$("#ten-am").val(localStorage.getItem("tenAMText"));
$("#eleven-am").val(localStorage.getItem("elevenAMText"));
$("#twelve-pm").val(localStorage.getItem("twelvePMText"));
$("#one-pm").val(localStorage.getItem("onePMText"));
$("#two-pm").val(localStorage.getItem("twoPMText"));
$("#three-pm").val(localStorage.getItem("threePMText"));
$("#four-pm").val(localStorage.getItem("fourPMText"));
$("#five-pm").val(localStorage.getItem("fivePMText"));