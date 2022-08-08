
function abutPage() {
  localStorage.setItem("page", "about");
  document.querySelector("#div_container").innerHTML = `<div id="about_page" class="bg-black">
    <div class="text-center ">
    <h1 class="text-warning">TV & MOVIES</h1>
    <h5 class="text-white">Use this forum to share your opinion about films Shows.</h5>
    </div>
    <div id="container_review_card" >
     
    </div>
    </div>`;

  for (let i = 0; i < array.length; i++) {
    someFunc2(
      array[i]["movie_T"],
      array[i]["user_N"],
      array[i]["stars_N"],
      array[i]["review_Text"],

      
    );
  }
}
let counter = 0
function someFunc2(title, fname, num, text) {
 counter++
  if(num > 0 &&title!=""&&fname!=""&&text!=""){
  let checked = '<span class="fa fa-star checked"></span>';
  let fa_star = '<span class="fa fa-star"></span>';
  let star = "";
if(num>5){
  num = 5}
  for (let i = 0; i < num ; i++) {
   
    star += checked;
  }
  for (num; num < 5; num++) {
    
    star += fa_star;
   
  }

  document.querySelector("#container_review_card").innerHTML += `<div id="${counter}" class="review_card ">
    <div class=" card" style="width: 15rem">
      <div class="card-body text-center">
      
        <h4 class="card-title">${title}</h4>
        <h4 class="card-title">${fname}</h4>
             ${star}
        <p class="card-text">
         ${text}
        </p>
        <a class="btn btn-danger" onclick=" deleteReview(${counter})">DELETE</a>
      </div>
    </div>
  </div>`;
}
}

async function deleteReview(id) {
if(confirm('Do delete a review'))
  document.getElementById(id).remove();
  console.log(id);
  array.pop()
  
}

