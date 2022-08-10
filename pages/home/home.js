function homePage() {
  document.querySelector("#div_container").innerText = "";
  localStorage.setItem("page", "home");
  const div_home = document.createElement("div");
  document.getElementById("div_container").appendChild(div_home);
  div_home.setAttribute("id", "div_home");

  div_home.innerHTML = `
  <div class="container-fluid ">
       <div class="row mt-5 ">
       <div class="col-sm-12 col-md-4 mb-5 d-flex justify-content-center align-items-center flex-column ps-5 ">
      <h1 class="text-white mb-5"> world of cinema </h1>
    
      <h4 class="text-white "> Hundreds of customers come every month to the S-Movies complexes and enjoy the experience of entertainment and film screenings of the highest quality, hospitality in the VIP halls, conferences and events.</h4>
       </div>
       <div class="col-sm-12 col-md-8 mb-5">
       <iframe width="100%" height="600" src="https://www.youtube.com/embed/LLSR13kHJIc?controls=0&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </div>
 </div>
<div class=" d-flex justify-content-center mb-5">
 <img class="img-fluid  " src="images/batman.jpg" alt="">
</div>
 <div class="row row-cols-1 row-cols-lg-5 row-cols-md-5 d-flex justify-content-center">
        <div class="col  d-flex justify-content-center mb-4">
            <div class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="images/avatar_the_way_of_water.jpg" alt="" style="width: 300px;">
            </div>
          
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-body">
                      <iframe width="100%" height="450" src="https://www.youtube.com/embed/jOHCmLUng-Q?controls=0&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   </div>
            </div>
          </div>
        </div>
        </div>


<div class="col  d-flex justify-content-center mb-4">
    <div class="" data-bs-toggle="modal" data-bs-target="#exampleModal2">
    <img src="images/accursed.jpg" alt="" style="width: 300px;">
    </div>
  
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-body">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/HHgrRu1UWoY?autoplay=1&mute=1" title="The Accursed (2021) — Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           </div>
    </div>
  </div>
</div>
</div>

<div class="col  d-flex justify-content-center mb-4">
    <div class="" data-bs-toggle="modal" data-bs-target="#exampleModal3">
    <img src="images/black_panther_wakanda_forever.jpg" alt="" style="width: 300px;">
    </div>
  
    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-body">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/RlOB3UALvrQ?autoplay=1&mute=1" title="The Accursed (2021) — Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           </div>
    </div>
  </div>
</div>
</div>




<div class="col  d-flex justify-content-center mb-4">
    <div class="" data-bs-toggle="modal" data-bs-target="#exampleModal4">
    <img src="images/alone_with_you.jpg" alt="" style="width: 300px;">
    </div>
  
    <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-body">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/jwhOFT_kAww?autoplay=1&mute=1" title="The Accursed (2021) — Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           </div>
    </div>
  </div>
</div>
</div>


<div class="col  d-flex justify-content-center mb-4">
    <div class="" data-bs-toggle="modal" data-bs-target="#exampleModal5">
    <img src="images/asking_for_it.jpg" alt="" style="width: 300px;">
    </div>
  
    <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-body">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/0JvOaeWvxok?autoplay=1&mute=1" title="The Accursed (2021) — Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           </div>
    </div>
  </div>
</div>
</div>


</div> 

</div>`;
}
