
// pearlycodes

const movie_array = [
    {
        id : "1",
        name : "The fate of the furious",
        producer: " kelvin Tutu",
        genre : "mystical",
        year : "2021",
        background_image :'images/bouncer.jpg' ,
        description : "This movie is on love"

    } ,
    {   id : "2",
        name : "The Cryptos",
        producer: "Sir Kay",
        genre : "Educative",
        year : "2021",
        background_image : " images/Cryptos.jpg",
        description : "This movie is on finances"

    } ,
    
    {   
        id : "3",
        name : "The Baby Care",
        producer: " John Doe",
        genre : "Educative",
        year : "2021",
        background_image : "images/BabyCare.jpg",
        description : "This movie is on Education"

    } ,

    { 
        id : "4",
        name : "The Jungle Masters",
        producer: " kelvin Tutu",
        genre : "mystical",
        year : "2021",
        background_image : "images/jungle.jpg",
        description : "This movie is on Animals"

    } ,

    {   
        id : "5",
        name : "The Exchange",
        producer: "Joshua Mba",
        genre : "mystical",
        year : "2021",
        background_image : 'images/Datry.jpg',
        description : "This movie is on Data Analysis"

    },
    {   
        id : "6",
        name : "The Elevate",
        producer: "Chinedum Echendu",
        genre : "mystical",
        year : "2021",
        background_image : 'images/lion.jpg',
        description : "This movie is on mystery"

    } ,
    {
        id : "7",
        name : "The Gospel Meet",
        producer: " Jerry",
        genre : "mystical",
        year : "2021",
        background_image : 'images/gospel.jpg',
        description : "This movie is on Gospel"

    },
    {
        id : "8",
        name : "The King Of The Jungle",
        producer: "Yvonne",
        genre : "mystical",
        year : "2021",
        background_image : 'images/lionwhelp.jpg',
        description : "This movie is on story"

    } ,
    {
        id : "9",
        name : "The Voyager",
        producer: " kendrick",
        genre : "mystical",
        year : "2021",
        background_image : 'images/Voyager.jpg',
        description : "This movie is on mystery"

    },
    {
        id : "10",
        name : "The Dine",
        producer: " code Angelic",
        genre : "mystical",
        year : "2021",
        background_image : 'images/Dine.jpg',
        description : "This movie is on mystery"

    } 
    
]


  


//get the test from the input field
$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
      let searchText = $('#searchText').val();
      getMovies(searchText);
      e.preventDefault();
    });
  })






  
//get element by id and store in variables
let button = document.getElementById("search")
let renty = document.getElementById("renty")
let searchy = document.getElementById("searchText")

button.addEventListener("click", function(e) {
    e.preventDefault
    getMovies()
    

})





//clear the text in the input field
function clearField(){
    searchy.value = ""
}





//A function that gets movie from our api database array

function getMovies(searchText){

    // loop through the movie array and get the name that matches the input text
    for (let i = 0; i < movie_array.length; i++) {
        let movie = movie_array[i];
        if(movie.name === searchText) { 
            movies.innerHTML += `
            <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.background_image}">
              <ul class="list-group">
              <li class="list-group-item"><strong>Name:</strong> ${movie.name}</li>
              <li class="list-group-item"><strong>Producer:</strong> ${movie.producer}</li>
              </ul>    
              <a onclick="toggle(this)" class="btn btn-primary" href="#">Rent</a>
            </div>
          </div>
             
            `;
            
            }
        }
}




// A function that toggles our rent button to rented when a user rents a movie
function toggle(e) {
        renty.innerHTML = "This movie is  now rented by you"
    let txt = e.innerText;
    e.innerText = txt == 'Rent' ? 'Rented' : 'Rent';
  }






        
   




















