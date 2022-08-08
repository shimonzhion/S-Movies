function homePage() {
    document.querySelector('#div_container').innerText=''
  localStorage.setItem("page", "home");
  const div_home = document.createElement("div");
  document.getElementById("div_container").appendChild(div_home);
  div_home.setAttribute("id", "div_home");

  div_home.innerHTML = `
  <div class="container-fluid">
<div class="row mb-5">

<div class="col-sm-12 col-md-2 d-flex justify-content-center flex-column align-items-end" >
<img class="w-100" src="images/uuuu.png"/>
<h1 class="text-warning mb-5">A experience you have never known before
</h1>
</div>



<div class="col-sm-12 col-md-10 mb-5">
<video class="w-100" width="50" height="600" autoplay>
  <source src="images/video.mp4" type="video/mp4">  
</video>
</div>


</div>




<div class="row mt-5">

<div class="col-sm-12 col-md-8  d-flex justify-content-end">
<img class="imd-p w-100" src="images/people1.jpg" />

</div>



<div class="col-sm-12 col-md-4 d-flex justify-content-center align-items-center ">
<div class="w-50 ">
<h1 class="text-warning mb-5">S-Movies Signature Recliners</h1>
<h3 class="text-white mt-5">Kick back and enjoy the show from a luxurious S-Movies Signature Recliner.
</h3>
<div>

</div>


</div>
</div>`
 
}


