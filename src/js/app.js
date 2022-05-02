// Input 
const form = document.querySelector(".calc__form");
const inputNumber = document.querySelectorAll("[type='number']");
const dataProducts = document.querySelector("[data-id='products']");
const dataOrders = document.querySelector("[data-id='orders']");
const dataPackage = document.querySelector("[data-id='package']");
const dataAccounting = document.querySelector("[data-id='accounting']");
const dataTerminal = document.querySelector("[data-id='terminal']");
const total = document.querySelector("#total-price");
const totalPrice = document.querySelector(".total__price");
// chackbox
const checkbox = document.querySelectorAll(".checkbox");
const checkAcc = document.querySelector("#accounting");
const checkTerm = document.querySelector("#terminal");

// select
const packageId = document.querySelector("#package");

const select = document.querySelector(".select__dropdown");
const selectLi = select.querySelectorAll("[data-value]");


let productsPrice = 0.5;
let ordersPrice = 0.25;


function calculateTotal(data) {

  let value = (parseFloat((data.querySelector(".item__price").innerText).substring(1))).toFixed(1); 
  let sum = `${(Number(value) + parseFloat((totalPrice.innerText).substring(1))).toFixed(1)}`;
 
  totalPrice.innerText = `$${sum}`;
}




function calculateInput(data, price, target) {
  data.querySelector(".item__calc").innerText = `${target.value} * $${price}`;
  data.querySelector(".item__price").innerText = `$${(target.value * price).toFixed(1)}`;

}


function valueText(data) {
  data.querySelector(".item__calc").innerText = "";
  data.querySelector(".item__price").innerText = `Value should be greater than 0`;

}


// input
inputNumber.forEach(function(input) {
  input.addEventListener("input", function(e) {
    const inputValue = e.target.value;

    
    if (inputValue >= 1 && inputValue.length > 0) {
      total.style.display = "flex";

      if (e.target === inputNumber[0]) {
        dataProducts.style.display = "flex";

        calculateInput(dataProducts, productsPrice, e.target);
        calculateTotal(dataProducts);
      
        
        
      } else if (e.target === inputNumber[1]) {
        dataOrders.style.display = "flex";
      
        calculateInput(dataOrders, ordersPrice, e.target);
        calculateTotal(dataOrders);
        

        
      }

    }

    if (inputNumber[0].value < 0) {
      dataProducts.style.display = "flex";
      
      valueText(dataProducts);
   
    } else if (inputNumber[0].value.length === 0) {
      dataProducts.style.display = "none";

    }
        
    if (inputNumber[1].value < 0) {
      dataOrders.style.display = "flex";
      
      valueText(dataOrders);
   
    } else if (inputNumber[1].value.length === 0) {
      dataOrders.style.display = "none";

    } 

    if (!inputNumber[0].value && !inputNumber[1].value) {
    total.style.display = "none";
   }

  });
});




// select toggle class and display

packageId.addEventListener("click", function(e) {
  packageId.classList.toggle("open");

  Array.from(packageId.classList).includes("open") ? select.style.display = "block" : select.style.display = "none";

});


// choose package 

function package(package, price) {
  dataPackage.style.display = "flex";

  dataPackage.querySelector(".item__calc").innerText = package;
  dataPackage.querySelector(".item__price").innerText = `$${price}`;

}

  
selectLi.forEach(function(li) {
  li.addEventListener("click", function(e) {
    total.style.display = "flex";
  
  if (li.dataset.value === "basic") {
    package("Basic", 0);
    calculateTotal(dataPackage);

   
  } else if (li.dataset.value === "professional") {
    package("Professional", 25);
    calculateTotal(dataPackage);
   
  } else if (li.dataset.value === "premium") {
    package("Premium", 60);
    calculateTotal(dataPackage);
   
  }

  });

});



// checkbox 

checkbox.forEach(box => {
  box.addEventListener("change", function() {
    total.style.display = "flex";

    if (checkAcc.checked) {

      dataAccounting.style.display = "flex";
      calculateTotal(dataAccounting);

    } else {

      dataAccounting.style.display = "none";
    }


    if (checkTerm.checked) {
      dataTerminal.style.display = "flex";
      calculateTotal(dataTerminal);

    } else {
      dataTerminal.style.display = "none";

    }

    if ((!inputNumber[0].value && !inputNumber[1].value) && (!checkAcc.checked && !checkTerm.checked)) {
      total.style.display = "none";
    }

  });
});












