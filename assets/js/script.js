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

          // Get the current hour using JavaScript Date object
const currentHour = new Date().getHours();

// Loop through each row with class "hour" and compare with the current hour
document.querySelectorAll('.hour p').forEach(pTag => {
  const hour = parseInt(pTag.innerText);
  const row = pTag.closest('.row');

  if (hour < currentHour) {
    row.classList.add('past');
  } else if (hour === currentHour) {
    row.classList.add('present');
  } else {
    row.classList.add('future');
  }
});
  });
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
   


