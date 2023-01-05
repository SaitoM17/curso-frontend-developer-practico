const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const cardContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

function clickHandler(e){
  var elem, evt = e ? e:event;
  if (evt.srcElement)  elem = evt.srcElement;
  else if (evt.target) elem = evt.target;
  console.log(elem);
  alert ('You clicked the following HTML element: ')
  // return true;
 }
 
 document.onclick=clickHandler;

// const valorBuscar = Event.srcElement;

// for(product of productList){
//     console.log(valorBuscar);
//   if(productList.imagen == valorBuscar){
//     console.log('Hola, Mundo!')
//   }

// }

// function product(name,price,imagen){
//   this.name = name;
//   this.price = price;
//   this.imagen = imagen;
// }

const imgDetalle = document.querySelector('.img-product-detail');
const priceDetalle = document.querySelector('.price-product-detail');

// function even(e){
//     const valorBuscado = e ? e : evt;
//     for(const product of productList){
//         if(product.imagen == valorBuscado){
//             imgDetalle.src = product.imagen;
//             priceDetalle.innerText = product.price;
//         }
//     }
// }




const productList = [];

productList.push({
    name: 'Bike1',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Bike2',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Bike3',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Bike4',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProduct(arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productdiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$` + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productdiv.appendChild(productPrice);
        productdiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' )
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productdiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    
    }
}

renderProduct(productList);