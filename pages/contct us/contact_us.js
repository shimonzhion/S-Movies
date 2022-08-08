function contact_usPage() {
    localStorage.setItem('page', 'contxt_us');
    document.querySelector("#div_container").innerHTML= `<div id="div_contact">
    <div id="img_contact">
<img id="img_form" src=""/>
</div>
    <div id="div_form">
    <form id="form_id" action="https://formsubmit.co/shimonb055@icloud.com" method="POST" class="text-white ">
    <h1 id ="h1_form"> contact us</h1>
    <label for="first_name" >enter full name</label>
    <input  id="first_name" class="form_input" type="text" name="name" value="shimon" maxlength="15">
    <label for="email" >enter email</label>
    <input id="email" type="email" name="email" >       
    <label for="phone" >enter phone number</label>
    <input id="phone" type="tel" name="phone" maxlength="10">

    <label for="message" >message</label>
    <input type="text" name="message" maxlength="50">
   
    <br>
   <button  id="message_contact" class="btn  btn-primary"; type="submit">submit</button>
</form>
</div>

</div>`
}
