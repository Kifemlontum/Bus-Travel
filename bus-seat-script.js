const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.seat-sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const ticketSelect = document.getElementById("ticket");

populateUI();

let ticketPrice = +ticketSelect.value;

/* Update total and count */
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

    setTicketData(ticketSelect.selectIndex, ticketSelect.value);
}

/* Get  data from localstorage and populate UI */
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                console.log(seat.classList.add("selected"));
            }
        });
    }

    const selectedTicketIndex = localStorage.getItem("selectedTicketIndex");

    if (selectedTicketIndex !== null) {
        ticketSelect.selectIndex = selectedTicketIndex;
        console.log(selectedTicketIndex);
    }
}

console.log(populateUI());
/* Ticket Select Event */
ticketSelect.addEventListener("change", (e) => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("seat-sold")
    ) {
        e.target.classList.toggle("seat-selected");

        updateSelectedCount();
    }
});

/* Initial count and total set */

updateSelectedCount();











