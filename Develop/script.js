// Includes current day at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

// Creating variables to target in function for input area of schedule
var h9schedule = document.getElementById("h9");
var h10schedule = document.getElementById("h10");
var h11schedule = document.getElementById("h11");
var h12schedule = document.getElementById("h12");
var h13schedule = document.getElementById("h13");
var h14schedule = document.getElementById("h14");
var h15schedule = document.getElementById("h15");
var h16schedule = document.getElementById("h16");
var h17schedule = document.getElementById("h17");

// creates variables to target for button
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
var btn13 = document.getElementById("btn13");
var btn14 = document.getElementById("btn14");
var btn15 = document.getElementById("btn15");
var btn16 = document.getElementById("btn16");
var btn17 = document.getElementById("btn17");

// attempt to add class to html sheet conditionally using momentjs for 9am timeblock
var hour = today.format("hh");
console.log(hour)

if (hour===09) {
    h9schedule.innerHTML+="class='present'";
} else if (hour<09) {
    h9schedule.innerHTML+="class='past'";
} else {
    h9schedule.innerHTML+="class='future'";
}

// creates a variable for alert area which can be targeted in a variation of click events.
var alertArea = document.getElementById("alertArea");


// creating a function to save each input to local storage with a unique key (maybe there is a more efficient way to do this using a for loop and creating array objects)
btn9.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("h9",h9schedule.value);

    // creates a function to remove the alert after 1 second
    function messageFade () {
        setTimeout(function() {
            alertArea.textContent = ""
        },1000);
    }

    // displays alert message that input content has been added to local storage
    alertArea.textContent = "Your appointment has been added to local storage";
    messageFade();


});

btn10.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("h10",h10schedule.value);

    function messageFade () {
        setTimeout(function() {
            alertArea.textContent = ""
        },1000);
    }
    alertArea.textContent = "Your appointment has been added to local storage";
    messageFade();
});

btn11.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("h11",h11schedule.value);

    function messageFade () {
        setTimeout(function() {
            alertArea.textContent = ""
        },1000);
    }
    alertArea.textContent = "Your appointment has been added to local storage";
    messageFade();
});

btn12.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("h12",h12schedule.value);

    function messageFade () {
        setTimeout(function() {
            alertArea.textContent = ""
        },1000);
    }
    alertArea.textContent = "Your appointment has been added to local storage";
    messageFade();
});

btn13.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("h13",h13schedule.value);

    function messageFade () {
        setTimeout(function() {
            alertArea.textContent = ""
        },1000);
    }
    alertArea.textContent = "Your appointment has been added to local storage";
    messageFade();
});

btn14.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("h14",h14schedule.value);

    function messageFade () {
        setTimeout(function() {
            alertArea.textContent = ""
        },1000);
    }
    alertArea.textContent = "Your appointment has been added to local storage";
    messageFade();
});

btn15.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("h15",h15schedule.value);

    function messageFade () {
        setTimeout(function() {
            alertArea.textContent = ""
        },1000);
    }
    alertArea.textContent = "Your appointment has been added to local storage";
    messageFade();
});

btn16.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("h16",h16schedule.value);

    function messageFade () {
        setTimeout(function() {
            alertArea.textContent = ""
        },1000);
    }
    alertArea.textContent = "Your appointment has been added to local storage";
    messageFade();
});

btn17.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("h17",h17schedule.value);

    function messageFade () {
        setTimeout(function() {
            alertArea.textContent = ""
        },1000);
    }
    alertArea.textContent = "Your appointment has been added to local storage";
    messageFade();
});

// Calls Item from local storage on page load to ensure that every time page reloads, stored content still appears on schedule.
h9schedule.textContent = localStorage.getItem("h9");
h10schedule.textContent = localStorage.getItem("h10");
h11schedule.textContent = localStorage.getItem("h11");
h12schedule.textContent = localStorage.getItem("h12");
h13schedule.textContent = localStorage.getItem("h13");
h14schedule.textContent = localStorage.getItem("h14");
h15schedule.textContent = localStorage.getItem("h15");
h16schedule.textContent = localStorage.getItem("h16");
h17schedule.textContent = localStorage.getItem("h17");