$(document).ready(function() {
    // Get the current day (0 is Sunday, 1 is Monday, and so on)
    var currentDay = new Date().getDay();

    // Set the content of the 'currentDay' paragraph
    $('#currentDay').text('Today is ' + getDayName(currentDay));

    // Highlight the corresponding day in the days-container
    $('.days-container .day').eq(currentDay).addClass('current-day');
  });

  function getDayName(dayIndex) {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayIndex];
  }


  $(document).ready(function() {
    // Display current day
    var currentDay = moment().format('dddd');
    $('#currentDay').text('Today is ' + currentDay);

    // Display current time with AM/PM
    var currentTime = moment().format('hh:mm A');
    $('#currentTime').text('Current time is ' + currentTime);
          // Log current time to console
          console.log('Current time (console): ' + currentTime);
  });
