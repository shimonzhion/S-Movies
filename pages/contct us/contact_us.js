function contact_usPage() {
    localStorage.setItem('page', 'contxt_us');
    document.querySelector("#div_container").innerHTML= `<div id="div_contact" >
    <div id="img_contact" class=" d-flex justify-content-center w-100">
    <img id="img_con" src="https://images.squarespace-cdn.com/content/v1/5c52e2f39f8770ea1f192449/1590138279980-L4DD0N24GBRT9G8H34ZI/GIFS_CINEMA.gif?format=750w" " alt="">

    </div>
    <div class="d-flex justify-content-center w-100">
    <form id="form_id" action="https://formsubmit.co/shimonb055@icloud.com" method="POST" class="text-white ">
    <h1 id ="h1_form"> contact us</h1>
    <label for="first_name" >enter full name</label>
    <input  id="first_name" class="form_input1 " type="text " name="name" value="shimon" maxlength="15">
    <label for="email" >enter email</label>
    <input id="email" type="email" name="email" >       
    <label for="phone" >enter phone number</label>
    <input id="phone" type="tel" name="phone" maxlength="10">
    <label for="message" >message</label>
    <input type="text" name="message" maxlength="50">
   
    <br>
   <button  id="message_contact" class="btn  btn-primary"; type="submit" style="width:80px">submit</button>
</form>
</div>
</div>

</div>`
}
