/***********Show cart on clic icon shop************/
const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("cart");

cartIcon.addEventListener("click", function() {
  cart.classList.toggle("open");
});


/***********Close Menu when a click a link**********/
// Dohvati sve linkove u padajućem meniju
var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Dodaj event listener za svaki link u padajućem meniju
navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    // Sakrij padajući meni
    var navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.remove("show");
  });
});



/***************Add to cart shop and remove from cart shop and notification***********/
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});


const cartNotification = document.querySelector('#cart-notification');
cartNotification.textContent = 0;

function addItemToCart(product) {
  const cardTitle = product.querySelector(".card-title").textContent;
  const cardPrice = product.querySelector(".card-price").textContent;
  
  
  const priceValue = parseFloat(cardPrice.replace('$', ''));
  
  
  const totalElement = document.querySelector('#cart-total');
  const totalValue = parseFloat(totalElement.textContent.replace('$', ''));
  const newTotal = totalValue + priceValue;
  totalElement.textContent = `$${newTotal.toFixed(2)}`;
  
  const cartItem = document.createElement('li');
  cartItem.innerHTML = `
    <img src="${product.querySelector('img').getAttribute('src')}" alt="${cardTitle}">
    <div>
      <h4>${cardTitle}</h4>
      <p>${cardPrice}$</p>
      <button class="button-remove-from-cart">Remove</button>
    </div>
  `;

  const removeButton = cartItem.querySelector('.button-remove-from-cart');
  removeButton.addEventListener('click', () => {
    cartItem.remove();
    
    const totalValue = parseFloat(totalElement.textContent.replace('$', ''));
    const newTotal = totalValue - priceValue;
    totalElement.textContent = `$${newTotal.toFixed(2)}`;
    cartNotification.textContent--;
  });

  const cartItems = document.querySelector('#cart-items');
  cartItems.appendChild(cartItem);
}

function addToCart(event) {
  const product = event.target.closest('.card');

  const cartNotification = document.querySelector('#cart-notification');
  cartNotification.textContent++;
  
  addItemToCart(product);
}



/******************Empty cart button****************/
const emptyCartButton = document.querySelector('#empty-cart-btn');
emptyCartButton.addEventListener('click', emptyCart);


function emptyCart() {
  const cartItems = document.querySelector('#cart-items');
  cartItems.innerHTML = ''; 
  const cartNotification = document.querySelector('#cart-notification');
  cartNotification.textContent = 0; 
  const totalElement = document.querySelector('#cart-total');
  totalElement.textContent = 0;
}



/*****************Close cart button*************/
function closeCart() {
    let cart = document.getElementById("cart");
    cart.classList.remove("open");
  }
  


/*************Pop-up**************/
const buttons = document.querySelectorAll('.articles__button');
const popups = document.querySelectorAll('.popup');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    popups[index].classList.add('active');
  });
});

popups.forEach((popup) => {
  const close = popup.querySelector('.popup__close');
  close.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});


/*************Button Back to Top**************/
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




/*****************Best Platform*************/
const learnMoreButton = document.getElementById('learn-more-button');
const modal = document.getElementById('platform');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const closeButton = document.getElementsByClassName('close')[0];


learnMoreButton.addEventListener('click', () => {
  
  modalImage.src = 'image/Group 14614.png';
  modalText.innerHTML = 'Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellus faucibus diam mauris ipsum vitae. Justo adipiscing integer dictum tortor viverra vel.';

  
  modal.style.display = 'block';
});


closeButton.addEventListener('click', () => {
  
  modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

/*************Student Support***********/
const readMoreButton = document.getElementById('read-more-button');
const modalStudent = document.getElementById('modal-suport');
const modalImageStudent = document.getElementById('modal-image-student');
const modalTextStudent = document.getElementById('modal-text-student');
const closeButtonStudent = document.getElementsByClassName('close-student')[0];


readMoreButton.addEventListener('click', () => {
  
  modalImageStudent.src = 'image/Group 14593.png';
  modalTextStudent.innerHTML = 'Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellus faucibus diam mauris ipsum vitae. Justo adipiscing integer dictum tortor viverra vel.';

  
  modalStudent.style.display = 'block';
});


closeButtonStudent.addEventListener('click', () => {
  
  modalStudent.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target == modalStudent) {
    modalStudent.style.display = 'none';
  }
});


















  
