(function () {
  'use strict';

  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('.app__header-ul');
  const add = document.querySelector('.add');
  const remove = document.querySelector('.remove');
  const addedCount = document.querySelector('.cart__quantity-count');
  const addToCartBtn = document.querySelector('.cart__adding');
  const cartQuantity = document.querySelector('.cart__quantity');
  const cartContainer = document.querySelector('.cart__container');
  const cartContainerContent = document.querySelector('.cart__container div');
  const cart = document.querySelector('.cart');
  let counter = 0;
  let cartCount;

  hamburger.addEventListener('click', (Event) => {
    Event.preventDefault();
    navUl.classList.toggle('navActive');

    if (navUl.classList.contains('navActive')) {
      hamburger.src = './images/icon-close.svg';
      hamburger.alt = 'close menu';
    } else {
      hamburger.src = './images/icon-menu.svg';
      hamburger.alt = 'menu';
    }
  });

  function manageCart() {
    cartCount = parseInt(cartQuantity.innerText);

    if (cartCount >= 1) {
      cartQuantity.style.display = 'block';
    } else {
      cartQuantity.style.display = 'none';
    }
  }
  manageCart();

  function countManage() {
    add.addEventListener('click', (evt) => {
      evt.preventDefault();
      counter = ++counter;
      addedCount.innerText = counter;
    });
    remove.addEventListener('click', (evt) => {
      evt.preventDefault();
      counter = --counter;
      addedCount.innerText = counter;
      if (counter <= 0) {
        counter = 0;
        addedCount.innerText = counter;
      }
    });
    addToCartBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      cartQuantity.innerText = counter;
      manageCart();
    });
    cart.addEventListener('click', (evt) => {
      evt.preventDefault();
      cartContainer.classList.toggle('activeCart');

      if (cartCount >= 1) {
        cartContainerContent.innerHTML = `
        <div>
          <img class="cart__container-img" src="./images/image-product-1-thumbnail.jpg" alt="product thumbnail">
          <div>
            <p class="title">Fall Limited Edition Sneakers</p>
            <p class="details">
              <span>$125.00</span>
              x
              <span> ${cartCount} </span>
              <span>${'$' + `${cartCount * 125.00}` + '.00'}</span>
             </p>
          </div>
          <img src="./images/icon-delete.svg" alt="delete">
        </div>
        <p class="cart__checkout">Check Out</p>
        `;
      } else {
        cartContainerContent.innerHTML =
          '<p class="cart-empty">Your cart is empty</p>';
      }

      if (cartContainer.classList.contains('activeCart')) {
        document.querySelector('main').addEventListener(
          'click',
          (evt) => {
            evt.preventDefault();
            cartContainer.classList.remove('activeCart');
            /* if (cartContainer.className === 'cart__container') {
            counter = 0;
            addedCount.innerText = counter;
            cartQuantity.innerText = counter
            countManage();
            manageCart();
          } */
          },
          1000
        );
      }
    });
  }
  countManage();
}());


function slideShow() {

  const mySlides = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg'];
  const imgContainer = document.querySelector('.container');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let curentImg = 0;

  prevBtn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    curentImg--

    if (curentImg <= -1) {
      curentImg = mySlides.length -1
    }
    const newImage = document.createElement('img');

    newImage.src = `./images/${mySlides[curentImg]}`;
    newImage.alt = 'product';
    newImage.className = 'fadeImage';
    imgContainer.append(newImage);

    if(imgContainer.children.length > 2){
      imgContainer.removeChild(imgContainer.children[0]);
    }
  })
  nextBtn.addEventListener('click', (evt)=>{
    evt.preventDefault();
    curentImg++
    if (curentImg > mySlides.length -1) {
      curentImg = 0;
    }
    const newImage = document.createElement('img')
    newImage.src = `./images/${mySlides[curentImg]}`;
    newImage.alt = 'product';
    newImage.className = 'fadeImage';
    imgContainer.append(newImage);

    if(imgContainer.children.length > 2){
      imgContainer.removeChild(imgContainer.children[0]);
    }
  })

}
slideShow()



function changeImage(newImage) {
  const mainImage  = document.getElementById('mainImage');
  const thumbs = document.querySelectorAll('.app__main-images-thumbs img');

  for (let i = 0; i < thumbs.length; i++) {
    if (thumbs[i].classList.contains('active__thumb')) {
      thumbs[i].classList.remove('active__thumb');
    }

    thumbs[i].addEventListener('click', function (evt) {
      thumbs[i].className = ' '
      evt.preventDefault()
      const thisThumb  = this;
      thisThumb.className = 'active__thumb';
    })

  }
  setTimeout(() => {
   mainImage.src = newImage;
  }, 100);
}