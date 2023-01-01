const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#product-detail");
const cardContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const API = 'https://fakestoreapi.com/products'

const container = null || document.getElementById('containerDiv');

  async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  }

(async () => {
    try{
        const infos = await fetchData(API);
        let view = `
        ${infos.map(info => `
        <div class="product-card">
          <img src="${info.image}" alt="" onClick="openProductDetailAside()">
          
          <div class="product-info">
            <div>
              <p>${info.price}</p>
              <p>${info.title}</p>
            </div>
            <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
          </div>
        </div>
        `
    ).join('')}

        `;
    container.innerHTML = view;
  } catch(error) {
    console.log(error);
  }
})();