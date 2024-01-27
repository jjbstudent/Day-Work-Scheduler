$(document).ready(function() {
  // Get the current day (0 is Sunday, 1 is Monday, and so on)
  var currentDay = new Date().getDay();

  // Set the content of the 'currentDay' paragraph
  $('#currentDay').text('Today is ' + getDayName(currentDay));

  // Highlight the corresponding day in the days-container
  $('.days-container .day').eq(currentDay).addClass('current-day');

  // Display current day using moment.js
  var momentDay = moment().format('dddd');
  $('#currentDay').text('Today is ' + momentDay);

  // Display current time with AM/PM
  var currentTime = moment().format('hh:mm A');
  $('#currentTime').text('Current time is ' + currentTime);

  // Log current time to console
  console.log('Current time (console): ' + currentTime);
});

function getDayName(dayIndex) {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[dayIndex];
}



//function to save my text to local storage
  function saveText(textAreaId) {
    // Get the content of the textarea
    var textContent = document.getElementById(textAreaId).value;
    localStorage.setItem(textAreaId, textContent);
    console.log('Saved:', textContent);
  }

    // Function to load saved text from local storage when the page loads
    function loadSavedText() {
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        document.getElementById(key).value = value;

      }
    }
  
    // Call the function to load saved text when the page loads
    window.onload = loadSavedText;
   


