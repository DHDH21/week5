//display date on heading
function setDateTime() {
    var setTime = $("#currentDay");
    
    let today = moment();
    setTime.text(today.format("dddd" + " " + "MMMM" + " " + "DD" + ", " + "YYYY"));
}

setDateTime();



//save btn

var saveBtn = $(".saveBtn");

function timeLineColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        }
        else if (currentHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
};

// click to save button

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    localStorage.setItem(time. plan);
});

// save events

function updatePlan() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var updatedPlan = localStorage.getItem(currentHour);

        if(updatedPlan !== null) {
            $(this).siblings(".plan").val(updatedPlan);
        }
    });

}

timeLineColor();
updatePlan();