// quantity

let price = {
  products: 0,
  orders: 0,
  package: 0,
  accounting: 0,
  terminal: 0,
  total() {
    return this.products + this.orders + this.package + this.accounting + this.terminal;
  }
};


function calculateTotal() {
  const totalPrice = document.querySelector('#total-price');

  if (price.total()) {
    totalPrice.style.display = 'flex';
    totalPrice.querySelector('.total__price').innerText = `$${price.total()}`;

  } else {
    totalPrice.style.display = 'none';

  }
}



// products 

document.querySelector('#products').addEventListener('input', (event) =>{

  const productsTotal = document.querySelector('[data-id=products]');

  if (event.target.value > 0) {
    productsTotal.style.display = 'flex';

    productsTotal.querySelector('.item__calc').innerText = `${event.target.value} * $0.5`;
    productsTotal.querySelector('.item__price').innerText = `$${event.target.value * 0.5}`;

    price.products = parseFloat(event.target.value) * 0.5;

  } else if (event.target.value < 0) {
    productsTotal.style.display = 'flex';
    productsTotal.querySelector('.item__calc').innerText = "";
    productsTotal.querySelector('.item__price').innerText = `Value should be greater than 0`;


  } else {
    productsTotal.style.display = 'none';
    price.products = 0;
  }


  calculateTotal();
});



// orders
document.querySelector('#orders').addEventListener('input', (event) => {

  const ordersTotal = document.querySelector('[data-id=orders]');

  if (event.target.value > 0) {
    ordersTotal.style.display = 'flex';

    ordersTotal.querySelector('.item__calc').innerText = `${event.target.value} * $0.25`;
    ordersTotal.querySelector('.item__price').innerText = `$${event.target.value * 0.25}`;

    price.orders = parseFloat(event.target.value) * 0.25;

  } else if (event.target.value < 0) {
    ordersTotal.style.display = 'flex';
    ordersTotal.querySelector('.item__calc').innerText = "";
    ordersTotal.querySelector('.item__price').innerText = `Value should be greater than 0`;  

  } else {
    ordersTotal.style.display = 'none';
    price.orders = 0;
  }
  calculateTotal();

});




// package
document.querySelector('#package').addEventListener('click', (event) => {

  const dropdown = document.querySelector('.select__dropdown');


  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'block'; 
    document.querySelector('#package').classList.add("open");


  } else {
    dropdown.style.display = 'none';
    document.querySelector('#package').classList.remove("open");
  }

  
  

});


document.querySelectorAll('[data-value]').forEach(li => {
  li.addEventListener('click', (event) => {
    const packageLi = document.querySelector("[data-id='package']");
    

    if (li.dataset.value === 'basic'){
      packageLi.style.display = 'flex';
      document.querySelector('#package').firstElementChild.innerText = `${event.target.dataset.value}`;

      packageLi.querySelector('.item__calc').innerText = 'Basic';
      price.package = 0;
      packageLi.querySelector('.item__price').innerText = `$${price.package}`;
     

    } else if (li.dataset.value === 'professional') {
      packageLi.style.display = 'flex';
      document.querySelector('#package').firstElementChild.innerText = `${event.target.dataset.value}`;

      packageLi.querySelector('.item__calc').innerText = 'Professional';
      price.package = 25;
      packageLi.querySelector('.item__price').innerText = `$${price.package}`;
     
      

    } else if (li.dataset.value === 'premium') {
      packageLi.style.display = 'flex';
      document.querySelector('#package').firstElementChild.innerText = `${event.target.dataset.value}`;

      packageLi.querySelector('.item__calc').innerText = 'Premium';
      price.package = 60;
      packageLi.querySelector('.item__price').innerText = `$${price.package}`;
  
    } 

    calculateTotal();

  });

});



// accounting
document.querySelector('#accounting').addEventListener('change', (event) => {
  const accountingTotal = document.querySelector('[data-id=accounting]');

  if (event.target.checked) {
    accountingTotal.style.display = 'flex';
    price.accounting = 10;
  } else {
    accountingTotal.style.display = 'none';
    price.accounting = 0;
  }

  calculateTotal();
});


// rental terminal
document.querySelector('#terminal').addEventListener('change', (event) => {
  const terminalTotal = document.querySelector('[data-id=terminal]');

  if (event.target.checked) {
    terminalTotal.style.display = 'flex';
    price.terminal = 10;
  } else {
    terminalTotal.style.display = 'none';
    price.terminal = 0;
  }

  calculateTotal();
});







