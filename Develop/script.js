var currentDay = $('#currentDay');
var today = moment();
var timeblocks = $('.container');
var rows = $('.row');
var nowHour = parseInt(moment().format('H'));

// Print current day in requested format
currentDay.text(today.format("dddd, MMMM Do"));

// Loop through rows to set color
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