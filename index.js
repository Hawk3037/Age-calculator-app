function calculateAge() {
    var dayInput = document.getElementById("day1").value;
    var monthInput = document.getElementById("month1").value;
    var yearInput = document.getElementById("year1").value;
    var InvalidDay = document.querySelector(".validDay");
    var InvalidMonth = document.querySelector(".validMonth");
    var InvalidYear = document.querySelector(".validYear");
  
    if (isNaN(dayInput) || dayInput < 1 || dayInput > 31) {
        // Display an error message for invalid day
        InvalidDay.style.display = "block";
        document.querySelector("label").style.color= "red";
      } else  {
        // Hide the day error message
        InvalidDay.style.display = "none";
        document.querySelector("label").style.color= "black";
      }
      if (isNaN(monthInput) || monthInput < 1 || monthInput > 12){
        InvalidMonth.style.display = "block";
        document.querySelector("label").style.color= "red";
    
      }
      else  {
        InvalidMonth.style.display = "none";
        document.querySelector("label").style.color= "black";
      }
      if(isNaN(yearInput) || yearInput.length !== 4) {
        InvalidYear.style.display= "block"
        document.querySelector("label").style.color= "red";

      }
      else{
        InvalidYear.style.display="none"
        document.querySelector("label").style.color= "black";
      }
    
    // Create a new date object with the input values
    var birthday = new Date(yearInput, monthInput - 1, dayInput);
  
    // Create a new date object with the current date
    var currentDate = new Date();
  
    // Calculate the age difference in milliseconds
    var ageDiff = currentDate - birthday;
  
    // Convert the age difference to years, months, and days
    var ageDate = new Date(ageDiff);
    var ageYears = ageDate.getUTCFullYear() - 1970;
    var ageMonths = ageDate.getUTCMonth();
    var ageDays = ageDate.getUTCDate();
  
    // Display the calculated age
    var yearsElement = document.querySelector(".newyears");
    var monthsElement = document.querySelector(".newmonths");
    var daysElement = document.querySelector(".newdays");
  
    yearsElement.textContent = ageYears ;
    monthsElement.textContent = ageMonths ;
    daysElement.textContent = ageDays ;
  }
  
  // Attach the calculateAge function to the input fields' input event
  var dayInput = document.getElementById("day1");
  var monthInput = document.getElementById("month1");
  var yearInput = document.getElementById("year1");
  
  dayInput.addEventListener("input", calculateAge);
  monthInput.addEventListener("input", calculateAge);
  yearInput.addEventListener("input", calculateAge);
  
