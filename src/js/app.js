// Input 
const form = document.querySelector(".calc__form");
const inputNumber = document.querySelectorAll("[type='number']");
const dataProducts = document.querySelector("[data-id='products']");
const dataOrders = document.querySelector("[data-id='orders']");
const dataPackage = document.querySelector("[data-id='package']");
const dataAccounting = document.querySelector("[data-id='accounting']");
const dataTerminal = document.querySelector("[data-id='terminal']");
const total = document.querySelector("#total-price");
// chackbox
const checkbox = document.querySelectorAll(".checkbox");
const checkAcc = document.querySelector("#accounting");
const checkTerm = document.querySelector("#terminal");

// select

const select = document.querySelector(".select__dropdown");


// calculate
function calculate(){

}

// input

form.addEventListener("input", function(e){
  const inputVal = e.target.value;

  total.style.display = "block";

  if(inputVal >= 1 && inputVal !== "-" && inputVal) {
    if(e.target === inputNumber[0]) {
      dataProducts.style.display = "block";
      dataProducts.querySelector(".item__calc").innerText = `${e.target.value} * $0.5`;
      dataProducts.querySelector(".item__price").innerText = `$${(e.target.value * 0.5).toFixed(2)}`;

    
    } else if( inputNumber[0].value.length === 0){
      dataProducts.style.display = "none";

    }

    if (e.target === inputNumber[1]) {
      dataOrders.style.display = "block";
      dataOrders.querySelector(".item__calc").innerText = `${e.target.value} * $0.25`;
      dataOrders.querySelector(".item__price").innerText = `$${(e.target.value * 0.25).toFixed(2)}`;
    }
      
  }
});


// select 

select.addEventListener("click", function(e) {
  select.classList.add("open");

  this.style.display = "block";

  const selChildren = select.children;

  console.log(selChildren);


});



// checkbox

checkbox.forEach(box => {
  box.addEventListener("change", function(e){
    if(checkAcc.checked === true) {
      dataAccounting.style.display = "block";

    } else {
      dataAccounting.style.display = "none";
    }  
    
    if (checkTerm.checked === true) {
      dataTerminal.style.display = "block";

    } else {
      dataTerminal.style.display = "none";

    }

  });
});









