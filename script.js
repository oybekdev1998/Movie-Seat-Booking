const container = document.querySelector('.container')
const movieContainer = document.querySelector('.movie-container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')

const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value

// Updated select

function updatedSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  
  count.innerText = selectedSeats.length
  total.innerText = selectedSeats.length * ticketPrice
}

// Movie select event

movieSelect.addEventListener('change', e =>{
  ticketPrice = +e.target.value
  updatedSelectedCount() 
})
// Seat select event
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && 
  !e.target.classList.contains('occupied')) {
   e.target.classList.toggle('selected')
  
   updatedSelectedCount()
  }
})




