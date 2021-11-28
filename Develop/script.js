var currentDay = $('#currentDay');
var today = moment();
var timeblocks = $('.container');
var rows = $('.row');

currentDay.text(today.format("dddd, MMMM Do"));

