/**
 * http://webtricksandtreats.com/
 * Enmanuel Corvo
 *
 */

/** Days to be disabled as an array */
var disabledSpecificDays = ["9-21-2014", "9-24-2014", "9-25-2014", "10-01-2014"];

function disableSpecificDaysAndWeekends(date) {
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();

    for (var i = 0; i < disabledSpecificDays.length; i++) {
        if ($.inArray((m + 1) + '-' + d + '-' + y, disabledSpecificDays) != -1 || new Date() > date) {
            return [false];
        }
    }

    var noWeekend = $.datepicker.noWeekends(date);
    return !noWeekend[0] ? noWeekend : [true];
}


/** init datepicker */
$(document).ready(function () {
    $('#datepicker').datepicker({
        beforeShowDay: disableSpecificDaysAndWeekends
    });
});

