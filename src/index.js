//Deliverable 1

//url
const url = "http://localhost:3000/ramens"
const ramenMenu = document.getElementById("ramen-menu")

//FETCH - GET
//Defining from where we want to fetch from 
  fetch(url)
  .then(response => response.json())
  .then(ramens=>{
    ramens.forEach(ramen=>{
      displayRamenMenu(ramen)
    })
  })

const displayRamenMenu = (ramen) => {               
  const ramenImg = document.createElement("img")
  ramenImg.src = ramen.image

  ramenMenu.appendChild(ramenImg)

  ramenImg.addEventListener("click", () => {     
    displayDetail(ramen)
  })
}
//Deliverable 1



//Deliverable 2
//Using QuerySelector to pull data
// For a class   .
// For a ID      #
const ramenDetailImage = document.querySelector(".detail-image")      // "class"
const ramenDetailName = document.querySelector(".name")               // "class"
const ramenDetailRestaurant = document.querySelector(".restaurant")   // "class"
const ramenDetailRating = document.querySelector("#rating-display")   // "id"
const ramenDetailComment = document.querySelector("#comment-display") // "id"

const displayDetail = (ramen) => {
  ramenDetailImage.src = ramen.image
  ramenDetailName.textContent = ramen.name
  ramenDetailRestaurant.innerText = ramen.restaurant
  ramenDetailRating.textContent = ramen.rating
  ramenDetailComment.textContent = ramen.comment

}
//Deliverable 2



//Deliverable 3
const ramenForm = document.querySelector("#new-ramen")
const newRamenName = document.querySelector("#new-name")
const newRamenRestaurant = document.querySelector("#new-restaurant")
const newRamenImage = document.querySelector("#new-image")
const newRamenRating = document.querySelector("#new-rating")
const newRamenComment = document.querySelector("#new-coment")

ramenForm.addEventListener("submit", (event) => {
  event.preventDefault()
  let newRamen = {
    "name": event.target["new-name"].value,
    "restaurant": event.target["new-restaurant"].value,
    "image": event.target["new-image"].value,
    "rating": event.target["new-rating"].value,
    "comment": event.target["new-comment"].value
  }

  displayRamenMenu(newRamen)

  event.target["new-name"].value = ""
  event.target["new-restaurant"].value = ""
  event.target["new-image"].value = ""
  event.target["new-rating"].value = ""
  event.target["new-comment"].value = ""
})
//Deliverable 3