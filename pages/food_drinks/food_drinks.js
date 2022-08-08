function Food_DrinksPage(price, text, movieN, date) {
  localStorage.setItem("page", "Food_Drinks");
  console.log(price);
  document.getElementById("div_container").innerText = "";
  let div_Food_Drinks = document.createElement("div");
  document.getElementById("div_container").appendChild(div_Food_Drinks);
  div_Food_Drinks.setAttribute("id", "div_Food_Drinks");


  if (text == "input") {
    Food_D(price, "input", `${movieN}`, `${date}`);
  } else {
    Food_D(price);
  }
  div_Food_Drinks.innerHTML = `
  <div class="container-fluid">
  
  <div class="row ">
  <div class="col-12 bg-white g-0">
    <img src="images/foodimg.png "class="w-100">
  </div>
  </div>
  </div>
  <div id ="div_cat" class=" container-fluid bg-black ">
  <div  class="row ">
  <div class=" col-sm-12 col-md-8  bg-black pt-5 d-flex flex-column  align-items-center h-100"> 
  <h1 class="title_food mt-5 text-danger">Crunch, Munch, And Sip.</h1>
  <p class="text_food text-center fs-2 mt-5">S-Movies goes far beyond classic concessions like popcorn and fountain drinks to give you an absolutely appetizing experience. We're always innovating and exploring new ways to bring the best food and drinks to our theatres. Select from the options below to learn more about the menu selections, locations and special offers.</p>
  <hr class="text-white">
  </div>
    <div class="col-sm-12 col-md-4  d-flex justify-content-end  bg-black h-50 ">  
    <img src="images/7d82d1423a6761844c297017347967fc-removebg-preview.png "class= " ">
    </div>
  </div>
  <div  class="row bg-black  pt-5 pb-5">
  <div  class="text-center">
  <hr class="text-white">
  <h1 class="mt-5 mb-5 text-warning">Burgers</h1>
  </div>
  <div id="div-burgers"  class=" d-flex align-content-start flex-wrap mt-5">
  </div>
  </div>
  <div  class="row w-100 text-center bg-black mt-5">
  <h1 class="text-warning bg-black">Cola & Popcorn</h1>
  </div>
  <div id="div-cola-po"  class=" d-flex align-content-start flex-wrap bg-black w-100 mt-5">
  </div>
  </div>
  </div>
    `;
}
