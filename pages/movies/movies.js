function moviesPage() {
  localStorage.setItem("page", "movies");
  document.getElementById("div_container").innerText = "";
  getmovies(API_URL);
}

function showMovie(data) {
  const div_container_movie = document.createElement("div");
  document.getElementById("div_container").appendChild(div_container_movie);
  div_container_movie.setAttribute("id", "div_container_movie");
  div_container_movie.setAttribute("class", "container-fluid bg-black");
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id } = movie;
    div_container_movie.innerHTML += `<div  class="movie">
    <img src="${IMG_URL + poster_path}" alt="${title}">
    <div class="movie_info">
      <h3 id="${id}">${title}</h3>
      <span class="${getColor(vote_average)}">${vote_average}</span>
      
    </div>
    <div class="overview">
      <h3>overview</h3>
  ${overview}
  <div>
  
  <button type="button" class="btn btn-secondary btn-sm " onclick=" review_Purchast_Movie(${id},'review')">Review</button>
  <button type="button" class="btn btn-primary btn-sm" onclick=" review_Purchast_Movie(${id},'Purchast')">Purchast</button>

  </div>
    </div>
  </div>
    `;
   
  });
}

const form = document.getElementById("form");
const search = document.getElementById("search");


form.addEventListener("submit", (e) => {
  div_container_movie.innerHTML = "";
  e.preventDefault();
  const searchTerm = search.value;
  console.log(searchTerm);
  if (searchTerm) {
    getmovies(search_movie + "&query=" + searchTerm);
  } else {
    getmovies(API_URL);
  }
});



function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

let date_now = new Date();
let day = date_now.getDate();
let month = date_now.getMonth();
let years = date_now.getFullYear();
month++;
console.log(day + "/" + month + "/" + years);

async function review_Purchast_Movie(id, text) {
  switch (id) {
    case "no":
      confirm("enter text");
      break;

    default:
      break;
  }

  let IMG;
  try {
    await fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        data["results"].forEach((obj) => {
          if (obj["id"] == id) {
            IMG = obj["poster_path"];
          }
        });
      });
  } catch (e) {
    console.log(e);
  }
  switch (text) {
    case "review":
      document.getElementById("div_container").innerHTML = `
    <div class="container-fluid bg-black " id="reivew_container">
    <div class="row row-cols-sm-12 row-cols-md-2 g-0 h-100" id="div_Review" >
    <div class="col-sm-12 col-md-6 d-flex justify-content-end align-items-center" id="div_img_Review">
    <img class=" h-75" src="${IMG_URL + IMG}"  alt="${
        document.getElementById(id).textContent
      }">
    </div>
    <div class="col-sm-12 col-md-6 d-flex align-items-center" id="div_form_Review" >
    <form class="text-primary bg-black  d-flex flex-column align-items-center text-center w-100 mb-5" autocomplete="off"  onsubmit="return false;"> 
      <h1 id="movie_name" >${document.getElementById(id).textContent} </h1>
      <label class="fs-4" for="name">Enter your full name</label>
      <input class="text-light bg-dark w-50 text-center mb-2 border border-white" type="text" name="name" id="user_name" maxlength="20" />
    
      <label class="fs-4" for="stars">Rate by stars</label>
      <input class="text-light bg-dark w-50 text-center mb-2 border border-white" type="number" name="stars" id="stars" min="1" max="5"/>
    
      <label class="fs-4" for="review">Enter a review</label>
      <input class="text-light bg-dark w-50 h-100 text-center  mb-5 border border-white" type="text" name="" id="review" maxlength="20" />
      <button type="submit" class="btn btn-primary mb-5" onclick="ReturnsArrayOfUserReviewsObj()">Primary</button>
    </form>
    </div></div>
    </div>
  <hr>`;

      break;

    case "Purchast":
      document.getElementById("div_container").innerHTML = `
      <div class="container-fluid bg-black " id="reivew_container">
      <div class="row row-cols-sm-12 row-cols-md-2 g-0 h-100" id="div_Review" >
      <div class="col-sm-12 col-md-6 d-flex justify-content-end align-items-center" id="div_img_Review">
      <img class=" h-75" src="${IMG_URL + IMG}"  alt="${
        document.getElementById(id).textContent
      }">
      </div>
      <div class="col-sm-12 col-md-6 d-flex align-items-center" id="div_form_Review" >

      <form class="form_Purchast w-100 d-flex justify-content-center flex-column align-items-center">
      <h1 id="movie_name" class="text-white">${
        document.getElementById(id).textContent
      } </h1>
      <div class="mb-3 w-50 text-center">
        <h4 class="text-white">Screening Date</h4>
        <select id="Screening_Date" class="form-select text-center " aria-label="Default select example" placeholder="Search">
          <option id="op1" value="${day + 1}/${month}/${years}">${
        day + 1
      }/${month}/${years}  20:30</option>
          <option id="op2" value="${day + 2}/${month}/${years}">${
        day + 2
      }/${month}/${years}  20:45</option>
          <option id="op3" value="${day + 2}/${month}/${years}">${
        day + 2
      }/${month}/${years}  23:00</option>
          <option id="op4" value = "${day + 3}/${month}/${years}">${
        day + 3
      }/${month}/${years}  19:00</option>
        

        </select>
      </div>
      <div class="mb-3 w-50 text-center d-flex flex-column align-items-center ">
        <h4 class="text-white">Number of Cards</h4>
          <input id="nuu" type="number" class="input_num_card form-control text-center mb-3" onclick="returnNumCard()" value="0" onkeydown="return false" min="1" max="9" >
          <span class="mb-4 text-white">price $13</span>


          <input id="screen_p" type="text" class="input_num_card form-control text-center mb-2 w-50 " value="0" disabled  onkeydown="return false"  >


    
      <span class="mb-4">vvv</span>
      <button type="submit" class="btn_Purchast btn btn-primary " onclick="Payment_Form(${id},'${
        document.getElementById(id).textContent
      }') ">order tickets</button>
    </form>
      </div>`;

      break;

    default:
      moviesPage();

      break;
  }
}

var info = [];

function ReturnsArrayOfUserReviewsObj() {
  const obj = {
    movie_T: document.getElementById("movie_name").textContent,
    user_N: document.getElementById("user_name").value,
    stars_N: document.getElementById("stars").value,
    review_Text: document.getElementById("review").value,
  };
  info.push(obj);

  console.log(info);
  // moviesPage();
  abutPage();
  //  return info
}
let array = [];
array = info;

function returnNumCard() {
  var i = document.getElementById("nuu").value;
  const screen_p = document.querySelector("#screen_p");
  screen_p.setAttribute("value", `$${i * 13}`);
}
