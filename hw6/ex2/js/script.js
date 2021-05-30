//drop menu
var menu = document.querySelector("#menu");
var dropMenu = document.querySelector("#dropMenu");
var closeMenu = document.querySelector("#close");
menu.addEventListener("click", () => {
   dropMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
   dropMenu.style.display = "none";
});

// 2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.

var arrProducts = [
   product1 = {
      img: 1,
      title: "Product 1",
      descProduct: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 100,
      quantity: 1,
      cartPrice: 100
   },
   product2 = {
      img: 2,
      title: "Product 2",
      descProduct: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 140,
      quantity: 1,
      cartPrice: 140
   },
   product3 = {
      img: 3,
      title: "Product 3",
      descProduct: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 320,
      quantity: 1,
      cartPrice: 320
   },
   product4 = {
      img: 4,
      title: "Product 4",
      descProduct: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 210,
      quantity: 1,
      cartPrice: 210
   },
   product5 = {
      img: 5,
      title: "Product 5",
      descProduct: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 240,
      quantity: 1,
      cartPrice: 240
   },
   product6 = {
      img: 6,
      title: "Product 6",
      descProduct: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: 270,
      quantity: 1,
      cartPrice: 270
   },
];
//----------------------------------------------
var wrap, img, title, descProduct, price, cartPrice, button, wrapInfo, quantity, quantityProducts, priceProduct, removeProd, cards;
var quantityProduct = 1;
var cardOut = document.querySelector(".product__grid-wrap");
var cardOutCart = document.querySelector(".shopping__grid-wrap");
var commonPrice = document.querySelector(".shopping-totalcost__button");
var cartCount = document.querySelector(".header-right-cart__count");
var cartCountInit = 1;
var arrAddedCard = [];
var cartProd = [];
var sum = 0;
var sumCount = 0;
var sumOut = document.querySelector(".shopping-totalcost__h5-collor");
//----------------------------------------------
//----------------create cards------------------
for (var i = 0; i < arrProducts.length; i++) {
   createElem(i);
}

//----------------------------------------------
var buttons = document.getElementsByClassName("card-hover");
for (var i = 0; i < buttons.length; i++) {
   buttons[i].onclick = (e) => {
      if (!arrAddedCard.includes(e.target.id)) {
         arrAddedCard.push(e.target.id);
         createElemCart(e.target.id);
         quantityProducts = document.getElementsByClassName("quant");
         for (var j = 0; j < quantityProducts.length; j++) {
            quantityProducts[j].oninput = (a) => {
               cartPrice = document.getElementById("0" + a.target.dataset.id);
               arrProducts[a.target.dataset.id].cartPrice = arrProducts[a.target.dataset.id].price * a.target.value;
               cartPrice.innerHTML = "Price: $" + "<span class='cartPriceAll'>" + arrProducts[a.target.dataset.id].cartPrice + "</span>";
            }
         }
         removeProd = document.getElementsByClassName("removeCard");
         for (var l = 0; l < removeProd.length; l++) {
            removeProd[l].onclick = (ev) => {
               cards = document.getElementById("1" + ev.target.dataset.id);
               cards.remove();
               indArr = arrAddedCard.indexOf(ev.target.dataset.id);
               arrAddedCard[indArr] = "";
            }
         }
      } else {
         alert("Данный товар уже добавлен!");
      }
   }
}

commonPrice.onclick = () => {
   sumProd = document.getElementsByClassName("cartPriceAll");
   for (var k = 0; k < sumProd.length; k++) {
      sum = +(sumProd[k].textContent);
      sumCount += sum;
      sum = 0;
   }
   sumOut.innerHTML = "$" + sumCount;
   sumCount = 0;
}
//----------------------------------------------
function createElem(index) {
   wrap = document.createElement("div");
   img = document.createElement("img");
   title = document.createElement("h5");
   descProduct = document.createElement("p");
   price = document.createElement("p");
   button = document.createElement("button");

   wrap.className = "product__card shadow filter-card trans";
   img.className = "product-card__img";
   title.className = "product-card__h5";
   descProduct.className = "product-card__text";
   price.className = "product-card__text-options";
   button.className = "card-hover button-hover4 trans1";
   button.id = i;

   img.src = "img/catalog/card" + arrProducts[index].img + ".jpg";
   title.innerHTML = arrProducts[index].title;
   descProduct.innerHTML = arrProducts[index].descProduct;
   price.innerHTML = "$" + arrProducts[index].price;
   button.innerHTML = "Add to Cart";

   wrap.append(img);
   wrap.append(title);
   wrap.append(descProduct);
   wrap.append(price);
   wrap.append(button);
   cardOut.append(wrap);
}
function createElemCart(index) {
   wrap = document.createElement("div");
   wrapInfo = document.createElement("div");
   img = document.createElement("img");
   title = document.createElement("h5");
   cartPrice = document.createElement("p");
   quantity = document.createElement("p");
   button = document.createElement("button");

   wrap.className = "shopping__card shadow";
   wrap.id = "1" + index;
   wrapInfo.className = "shopping-card__name";
   img.className = "shopping-card__img scale trans";
   title.className = "shopping-name__h3";
   cartPrice.className = "shopping-card__text shopping-card__text-color";
   cartPrice.id = "0" + index;
   quantity.className = "shopping-card__text shopping-card__text-block quant";
   button.className = "shopping-card__close";

   img.src = "img/catalog/card" + arrProducts[index]["img"] + ".jpg";
   title.innerHTML = arrProducts[index].title;
   cartPrice.innerHTML = "Price: $" + "<span class='cartPriceAll'>" + arrProducts[index].cartPrice + "</span>";
   quantity.innerHTML = 'Quantity: ' + '<input class="shopping-card__input input-hover" data-id="' + index + '" type="number" name="quantity" required min="1"  value="1">';
   button.innerHTML = '<i class="fas fa-times removeCard" data-id="' + index + '"></i>';

   wrap.append(img);
   wrapInfo.append(title);
   wrapInfo.append(quantity);
   wrapInfo.append(cartPrice);
   wrap.append(wrapInfo);
   wrap.append(button);
   cardOutCart.append(wrap);
   cartCount.innerHTML = cartCountInit++;
}