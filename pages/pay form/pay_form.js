function Payment_Form(id,movieN,money) {  
  if(id=="food"){  

    document.getElementById("div_container").innerHTML = `
    <div id="div_pay_form" class=" container-fluid bg-black">
    <div class="container  px-5">
  <div class="mb-4">
  <h2>Confirm order and pay</h2>
  <span
  >please make the payment
  benefits.</span
  >
  </div>
  
  <div class="row">
  <div class="col-md-8">
  <div class="cardpay card p-3">
  <h6 class="text-uppercase">Payment details</h6>
  <div class="inputbox mt-3">
    <input
    id="input_name"
      type="text"
      name="name"
      class="form-control"
      required="required"
      autocomplete="off"
    />
    <span>Name on card</span>
  </div>
  
  <div class="row">
    <div class="col-md-6">
      <div class="inputbox mt-3 mr-2">
        <input
       
          type="text"
          name="name"
          class="form-control"
          required="required"
        />
        <i class="fa fa-credit-card"></i> <span>Card Number</span>
      </div>
    </div>
  
    <div class="col-md-6">
      <div class="d-flex flex-row">
        <div class="inputbox mt-3 mr-2">
          <input
            type="text"
            name="name"
            class="form-control"
            required="required"
          />
          <span>Expiry</span>
        </div>
  
        <div class="inputbox mt-3 mr-2">
          <input
            type="text"
            name="name"
            class="form-control"
            required="required"
          />
          <span>CVV</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mt-4 mb-4">
    <h6 class="text-uppercase">Billing Address</h6>
  
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="inputbox mt-3 mr-2">
          <input
            type="text"
            name="name"
            class="form-control"
            required="required"
          />
          <span>Street Address</span>
        </div>
      </div>
  
      <div class="col-md-6">
        <div class="inputbox mt-3 mr-2">
          <input
            type="text"
            name="name"
            class="form-control"
            required="required"
          />
          <span>City</span>
        </div>
      </div>
    </div>
  
    <div class="row mt-2">
      <div class="col-md-6">
        <div class="inputbox mt-3 mr-2">
          <input
            type="text"
            name="name"
            class="form-control"
            required="required"
          />
          <span>State/Province</span>
        </div>
      </div>
  
      <div class="col-md-6">
        <div class="inputbox mt-3 mr-2">
          <input
            type="text"
            name="name"
            class="form-control"
            required="required"
          />
          <span>Zip code</span>
        </div>
      </div>
    </div>
    <div class="inputbox mt-3">
    <input
    id="email"
      type="text"
      name="name"
      class="form-control"
      required="required"
      autocomplete="off"
    />
    <span> email </span>
  </div>
  </div>
  </div>
  
  <div class="mt-4 mb-4 d-flex justify-content-between">
  <span>Previous step</span>
  
  <button class="btn btn-success px-3" onclick="eeee('$${money}','${movieN}','food')">
  Pay $${money}
  </button>
  <button class= "btn btn-warning px-3" onclick="Food_DrinksPage()">
  Back
  </button>
  </div>
  </div>   
  </div>
  </div> 
    </div>`
    
  }


  let price = document.querySelector("#screen_p").value
  let cards = document.getElementById("nuu").value
  let date = document.getElementById("Screening_Date").value
  console.log(id,movieN,money);

  console.log(movieN);

  if (price != 0 && cards != ""){
    let ask = confirm("you want food")
    if(ask == true){
      console.log(movieN);
  return Food_DrinksPage(price,'input',movieN,date);
    }

  console.log('price'+price + 'cards'+cards);
  document.getElementById("div_container").innerHTML = `
            <div id="div_pay_form" class=" container-fluid bg-black">
            <div class="container  px-5">
    <div class="mb-4">
      <h2>Confirm order and pay</h2>
      <span
        >please make the payment
        benefits.</span
      >
    </div>
  
    <div class="row">
      <div class="col-md-8">
        <div class="cardpay card p-3">
          <h6 class="text-uppercase">Payment details</h6>
          <div class="inputbox mt-3">
            <input
            id="input_name"
              type="text"
              name="name"
              class="form-control"
              required="required"
              autocomplete="off"
            />
            <span>Name on card</span>
          </div>
  
          <div class="row">
            <div class="col-md-6">
              <div class="inputbox mt-3 mr-2">
                <input
               
                  type="text"
                  name="name"
                  class="form-control"
                  required="required"
                />
                <i class="fa fa-credit-card"></i> <span>Card Number</span>
              </div>
            </div>
  
            <div class="col-md-6">
              <div class="d-flex flex-row">
                <div class="inputbox mt-3 mr-2">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                  />
                  <span>Expiry</span>
                </div>
  
                <div class="inputbox mt-3 mr-2">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                  />
                  <span>CVV</span>
                </div>
              </div>
            </div>
          </div>
  
          <div class="mt-4 mb-4">
            <h6 class="text-uppercase">Billing Address</h6>
  
            <div class="row mt-3">
              <div class="col-md-6">
                <div class="inputbox mt-3 mr-2">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                  />
                  <span>Street Address</span>
                </div>
              </div>
  
              <div class="col-md-6">
                <div class="inputbox mt-3 mr-2">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                  />
                  <span>City</span>
                </div>
              </div>
            </div>
  
            <div class="row mt-2">
              <div class="col-md-6">
                <div class="inputbox mt-3 mr-2">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                  />
                  <span>State/Province</span>
                </div>
              </div>
  
              <div class="col-md-6">
                <div class="inputbox mt-3 mr-2">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                  />
                  <span>Zip code</span>
                </div>
              </div>
            </div>
            <div class="inputbox mt-3">
            <input
            id="email"
              type="text"
              name="name"
              class="form-control"
              required="required"
              autocomplete="off"
            />
            <span> email </span>
          </div>
          </div>
        </div>
  
        <div class="mt-4 mb-4 d-flex justify-content-between">
          <span>Previous step</span>
  
          <button class="btn btn-success px-3" onclick="eeee('${price}','${movieN}','${date}')">
          Pay ${price}
          </button>
          <button class= "btn btn-warning px-3" onclick="review_Purchast_Movie('back',${id})">
          Back
        </button>
        </div>
      </div>   
    </div>
  </div> 
            </div>`;
  }


           else{
            review_Purchast_Movie("no", "Purchast")
}}

function Payment_Form2(text,price,movieN,date) {
  if (text == "add") {
    let x =
      parseInt(document.getElementById("screen_p").value.slice(1)) + price;
    const demoClasses = document.querySelectorAll(".input_num_card1");
    demoClasses.forEach((element) => {
      element.value = `$${x}`;
    });
  }
  if (text == "x") {
    document.getElementById("div_container").innerHTML = `
  <div id="div_pay_form" class=" container-fluid bg-black">
  <div class="container  px-5">
<div class="mb-4">
<h2>Confirm order and pay</h2>
<span
>please make the payment
benefits.</span
>
</div>

<div class="row">
<div class="col-md-8">
<div class="cardpay card p-3">
<h6 class="text-uppercase">Payment details</h6>
<div class="inputbox mt-3">
  <input
  id="input_name"
    type="text"
    name="name"
    class="form-control"
    required="required"
    autocomplete="off"
  />
  <span>Name on card</span>
</div>

<div class="row">
  <div class="col-md-6">
    <div class="inputbox mt-3 mr-2">
      <input
        type="text"
        name="name"
        class="form-control"
        required="required"
      />
      <i class="fa fa-credit-card"></i> <span>Card Number</span>
    </div>
  </div>

  <div class="col-md-6">
    <div class="d-flex flex-row">
      <div class="inputbox mt-3 mr-2">
        <input
          type="text"
          name="name"
          class="form-control"
          required="required"
        />
        <span>Expiry</span>
      </div>

      <div class="inputbox mt-3 mr-2">
        <input
          type="text"
          name="name"
          class="form-control"
          required="required"
        />
        <span>CVV</span>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 mb-4">
  <h6 class="text-uppercase">Billing Address</h6>

  <div class="row mt-3">
    <div class="col-md-6">
      <div class="inputbox mt-3 mr-2">
        <input
          type="text"
          name="name"
          class="form-control"
          required="required"
        />
        <span>Street Address</span>
      </div>
    </div>

    <div class="col-md-6">
      <div class="inputbox mt-3 mr-2">
        <input
          type="text"
          name="name"
          class="form-control"
          required="required"
        />
        <span>City</span>
      </div>
    </div>
  </div>

  <div class="row mt-2">
    <div class="col-md-6">
      <div class="inputbox mt-3 mr-2">
        <input
          type="text"
          name="name"
          class="form-control"
          required="required"
        />
        <span>State/Province</span>
      </div>
    </div>

    <div class="col-md-6">
      <div class="inputbox mt-3 mr-2">
        <input
          type="text"
          name="name"
          class="form-control"
          required="required"
        />
        <span>Zip code</span>
      </div>
    </div>
  </div>
  <div class="inputbox mt-3">
  <input
  id="email"
    type="text"
    name="name"
    class="form-control"
    required="required"
    autocomplete="off"
  />
  <span> email </span>
</div>
</div>
</div>

<div class="mt-4 mb-4 d-flex justify-content-between">
<span>Previous step</span>

<button class="btn btn-success px-3" onclick="eeee('${document.getElementById("screen_p").value}','${movieN}','${date}')">
Pay ${document.getElementById("screen_p").value}
</button>
<button class= "btn btn-warning px-3" onclick="review_Purchast_Movie('ss','ss')">
Back
</button>
</div>
</div>   
</div>
</div> 
  </div>`;
  console.log(movieN);
  }
}

function eeee (price,movieN,date){
if(date=='food'){

  document.querySelector('#div_container').innerHTML=
  `<div id="div_form2">
    <form id="form_i2" action="https://formsubmit.co/${document.querySelector('#email').value}" class="d-flex flex-column" method="POST" class="text-white">
  
    <input  id="first_name" class="form_input bg-black" type="text" name="FoodDrinks" value="${movieN}">
    <input  id="first_name" class="form_input bg-black" type="text" name="price" value="${price}">
    <br>
   <button id="btn_form" class="btn  btn-primary"; type="submit">submit</button>
  </form>
  </div>`



}






  document.querySelector('#div_container').innerHTML=

`<div id="div_form2">
  <form id="form_i2" action="https://formsubmit.co/${document.querySelector('#email').value}" class="d-flex flex-column" method="POST" class="text-white">

  <input  id="first_name" class="form_input bg-black" type="text" name="Movies" value="${movieN}">
  <input  id="first_name" class="form_input bg-black" type="text" name="price" value="${price}">
  <input  id="first_name" class="form_input bg-black" type="text" name="Date" value="${date}">

  <input  id="first_name" class="form_input bg-black" type="text" name="name" value="${document.querySelector('#input_name').value}">

  <br>
 <button id="btn_form" class="btn  btn-primary"; type="submit">submit</button>
</form>
</div>`
}


