//display date on heading
function setDateTime() {
    var setTime = $("#currentDay");
    
    let today = moment();
    setTime.text(today.format("dddd" + " " + "MMMM" + " " + "DD" + ", " + "YYYY"));
}

setDateTime();


// timeline color

function timeLineColor() {
    var currentHour = moment().hours();

    $(".time-block").each(function() {
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
timeLineColor(); //re-run function


// click to save button

$(document).ready(function(){

    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save to localStorage
        localStorage.setItem(time, value);
    });
})

// save events

