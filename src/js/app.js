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
document.querySelector('#products').addEventListener('input', (event) => {
  handleCalculations('products', event.target.value, 0.5);
});

document.querySelector('#orders').addEventListener('input', (event) => {
  handleCalculations('orders', event.target.value, 0.25);
});

function handleCalculations(type, value, number) {
  const total = document.querySelector(`[data-id=${type}]`);

  if (value > 0) {
    total.style.display = 'flex';
    total.querySelector('.item__calc').innerText = `${value} * $${number}`;
    total.querySelector('.item__price').innerText = `$${value * number}`;
    price[type] = parseFloat(value) * number;

  } else if (value < 0) {
    total.style.display = 'flex';
    total.querySelector('.item__calc').innerText = "";
    total.querySelector('.item__price').innerText = `Value should be greater than 0`;

  } else {
    total.style.display = 'none';
    price[type] = 0;
  }
  calculateTotal();
}

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
    
    if (li.dataset.value === 'basic'){
      packagePrice(event.target.dataset.value, 0);
      
    } else if (li.dataset.value === 'professional') {
      packagePrice(event.target.dataset.value, 25); 
      
    } else if (li.dataset.value === 'premium') {
      packagePrice(event.target.dataset.value, 60);
    } 
    calculateTotal();
  });
});

function packagePrice(value, number) {
  const packageLi = document.querySelector("[data-id='package']");  
  packageLi.style.display = 'flex';
  document.querySelector('#package').firstElementChild.innerText = `${value}`;
  packageLi.querySelector('.item__calc').innerText = 'Basic';
  price.package = number;
  packageLi.querySelector('.item__price').innerText = `$${price.package}`;
}

// accounting
document.querySelector('#accounting').addEventListener('change', (event) => {
 checkboxPrice(event.target.checked, "accounting");
});

// rental terminal
document.querySelector('#terminal').addEventListener('change', (event) => {
  checkboxPrice(event.target.checked, "terminal");
});

function checkboxPrice(checked, type) {
  const checkboxTotal = document.querySelector(`[data-id=${type}]`);
  if (checked) {
    checkboxTotal.style.display = 'flex';
    price[type] = 10;
  } else {
    checkboxTotal.style.display = 'none';
    price[type] = 0;
  }
  calculateTotal();
}







