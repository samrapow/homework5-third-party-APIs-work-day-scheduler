var currentDay = $('#currentDay');
var today = moment();
var timeblocks = $('.container');
var rows = $('.row');
var nowHour = parseInt(moment().format('H'));
var saveButton = $('.saveBtn');


// Print current day in requested format at top of calendar
currentDay.text(today.format("dddd, MMMM Do"));

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
rows.each(function(i) {
    var rowID = this.id;
    var rowHour;

    if(rowID) {
        rowHour = parseInt(rowID);
    }

    var thisRow = $(this);
    if (rowHour) {
        if (nowHour === rowHour) {
            thisRow.addClass('present');
        } else if (nowHour > rowHour) {
            thisRow.addClass('past');
        } else if (nowHour < rowHour) {
            thisRow.addClass('future');
        }
    }
})

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
$(document).ready(function () {
    $("*[data-store]").each(function () {
        $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
    });

    saveButton.on("click", function () {
        $("*[data-store]").each(function() {
            localStorage.setItem ("item-" + $(this).attr("data-store"), $(this).val());
        });
    })
            

})



