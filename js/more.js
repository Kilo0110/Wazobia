// Declaration of constants and variables

// Declaration of constants

const hamburger = document.querySelector(".hamburger");
const seeMore = document.querySelector("#card__more");
const hidden = document.querySelector(".hidden");

// Form constants
const booking = document.querySelector("#booking");
const bookingDateOptions = booking.querySelectorAll("option");
const bookingTime = document.querySelector("#booking__time");
const bookingTimeOptions = bookingTime.querySelectorAll("option");
const bookingBtn = booking.querySelector("button");
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const textInput = booking.querySelectorAll("input[type=text]");



// Declaration of variables

var date = new Date();
var dayValue;
var day;
var bookingTimeOptionArray;

// Declaration ends...



// handling the click event for the hamburger menu
hamburger.addEventListener("click", ()=> {
    navLinks.classList.toggle("open");
    links.forEach (link => {
        link.classList.toggle('fade')
    });
    hamburger.classList.toggle('effect')
});

// handling the click event for the see more button
seeMore.addEventListener('click', () => {
    hidden.classList.remove('hidden');
    seeMore.classList.add('hidden')
});



// the next code handles what days can be booked
for (bookingDateOption of bookingDateOptions) {

    var today = date.getDay();

    dayValue = today + (bookingDateOption.index + 1);

    if (dayValue > 6) {
        dayValue = dayValue - 7
    };

    day = daysOfTheWeek[dayValue];

    bookingDateOption.textContent = day
}


var toInt  = time => ((h,m) => h*2 + m/30)(...time.split(':').map(parseFloat)),
toTime = int => [Math.floor(int/2), int%2 ? '30' : '00'].join(':'),
range  = (from, to) => Array(to-from+1).fill().map((_,i) => from + i),
eachHalfHour = (t1, t2) => range(...[t1, t2].map(toInt)).map(toTime);

bookingTimeOptionArray = eachHalfHour('08:00', '22:00');

for (bookingTimeOption of bookingTimeOptions) {
    bookingTimeOption.textContent = bookingTimeOptionArray[bookingTimeOption.index];
}