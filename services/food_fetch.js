const burgers = "https://ig-food-menus.herokuapp.com/burgers";

async function Food_D(price, text,movieN,date) {

  let counter = 0;
  let i = 0;
  let foodImg = ["m-p.jpg", "xl-p.jpg", "cola4.jpg", "cola3.jpg"];
  let foodprice = ["4", "5", "3", "3"];
  let foodtitle = ["Popcorn M", "Popcorn XL", "Cola", "cola ziro"];

  switch (text) {
    case "input":
      try {
      
        document.getElementById("div_container").innerHTML = `
        <div class="container-fluid">
        <div  class="row bg-black ">
        <div  class="text-center">
        <hr class="text-white">
        <h1 class=" text-warning">Burgers</h1>
        </div>
        <div id="div-burgers"  class=" d-flex align-content-start flex-wrap ">
      
        </div>
        
        </div>
      
        <div  class="row w-100 text-center bg-black ">
        <h1 class="text-warning bg-black">Cola & Popcorn</h1>
        </div>
        <div id="div-cola-po"  class=" d-flex align-content-start flex-wrap bg-black w-100 ">
      
        </div>
        
        </div>
        </div>
          `

        return await fetch(burgers)
          .then((res) => res.json())
          .then((data) => {
            data.forEach((obj) => {
              console.log(obj);

              if (
                counter == 0 ||
                counter == 3 ||
                counter == 18 ||
                counter == 50
              ) {

      


                document.querySelector(
                  "#div-burgers"
                ).innerHTML += `<div class="card mx-auto mb-5 " style="width: 18rem;">
    <img src="${obj.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${obj.name}</h5>
      <div class="d-flex" >
      <input id="" type="text" class="input_num_card form-control text-center mb-2 w-50 " value="$7" disabled  onkeydown="return false"  >
      <input id="screen_p" type="text" class="input_num_card1 form-control text-center mb-2 w-50 " value="${price}" disabled  onkeydown="return false"  >
      </div>

      <a href="#" class="btn-add  btn btn-primary" onclick="Payment_Form2('add',7)">add</a>
      <a href="#" class="btn-payment  btn btn-primary" onclick="Payment_Form2('x',7,'${movieN}','${date}')">payment</a>

    </div>
  </div>`;

                document.querySelector(
                  "#div-cola-po"
                ).innerHTML += `<div class="card mx-auto mb-5 text-center" style="width: 18rem;">
    <img src="images/${foodImg[i]}" class="card-img-top h-75" alt="...">
    <div class="card-body">
      <h5 class="card-title">${foodtitle[i]}</h5>
      <div class="d-flex" >
      <input id="" type="text" class="input_num_card form-control text-center mb-2 w-50 " value="$${foodprice[i]}" disabled  onkeydown="return false"  >
      <input id="screen_p" type="text" class="input_num_card1 form-control text-center mb-2 w-50 " value="${price}" disabled  onkeydown="return false"  >
      </div>
      <a href="#" class="btn-add btn btn-primary" onclick="Payment_Form2('add',${foodprice[i]})">add</a>
      <a href="#" class="btn-payment  btn btn-primary" onclick="Payment_Form2('x',7,${movieN},${data})">payment</a>

    </div>
  </div>`;
                i++;
              }

              counter++;
            });
          });
      } catch (e) {
        console.log(e);
      }

      break;

    default:
      try {
        return await fetch(burgers)
          .then((res) => res.json())
          .then((data) => {
            data.forEach((obj) => {
              console.log(obj);

              if (
                counter == 0 ||
                counter == 3 ||
                counter == 18 ||
                counter == 50
              ) {
                document.querySelector(
                  "#div-burgers"
                ).innerHTML += `<div class="card mx-auto mb-5 " style="width: 18rem;">
  <img src="${obj.img}" class="card-img-top" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">${obj.name}</h5>
    <div id="www">
    <input id="screen_p" type="text" class="input_num_card form-control text-center mb-2 w-50 " value="$7" disabled  onkeydown="return false"  >
    </div>
    <a href="#" class="btn_p btn btn-primary"  onclick="Payment_Form('food','${obj.name}','7')">Purchast1</a>
  </div>
</div>`;

                document.querySelector(
                  "#div-cola-po"
                ).innerHTML += `<div class="card mx-auto mb-5 text-center" style="width: 18rem;">
  <img src="images/${foodImg[i]}" class="card-img-top h-75" alt="...">
  <div class="card-body">
    <h5 class="card-title">${foodtitle[i]}</h5>
    <div id="www">
    <input id="screen_p" type="text" class="input_num_card form-control text-center mb-2 w-50 " value="$${foodprice[i]}" disabled  onkeydown="return false"  >
    </div>
    <a href="#" class="btn_p btn btn-primary" onclick="Payment_Form('food','${foodtitle[i]}','${foodprice[i]}')">Purchast2</a>
  </div>
</div>`;
                i++;
              }

              counter++;
            });
          });
      } catch (e) {
        console.log(e);
      }
      break;
  }
}
