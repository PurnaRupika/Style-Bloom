const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Floral Wrap Dress",
    price: 1999,
    colors: [
      {
        code: "pink",
        img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2025/APRIL/23/UqMtrCz3_23f2c6c779744206bc47b082d1dd5ce4.jpg",
      },
      {
        code: "black",
        img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/23264678/2023/5/18/b7564dc1-c7a3-4be1-bde1-4be827e1bb731684432714008STREET9BlackFloralPrintChiffonDress1.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Luxe Lace",
    price: 1049,
    colors: [
      {
        code: "lightgray",
        img: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/6543979/2018/6/14/ca049ca6-1d3d-4145-8c48-98f1fdf830861528970806058-Style-Quotient-Women-Grey-Solid-Top-371528970805841-1.jpg",
      },
      {
        code: "green",
        img: "https://i.pinimg.com/736x/27/f9/80/27f980fda803c0fefa9591e3d881748b.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Trendset",
    price: 2109,
    colors: [
      {
        code: "lightgray",
        img: "https://assets.ajio.com/medias/sys_master/root/20240702/Djjv/6683eed01d763220faa50686/-473Wx593H-700151404-grey-MODEL4.jpg",
      },
      {
        code: "green",
        img: "https://d1it09c4puycyh.cloudfront.net/catalog/product/8/9/8905972261065-05-16_1_.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Overstyle",
    price: 3129,
    colors: [
      {
        code: "black",
        img: "https://images-cdn.ubuy.co.id/66d15f468af7432d0e1443be-qiaocaity-womens-fall-fashion-long.jpg",
      },
      {
        code: "lightgray",
        img: "https://media2.newlookassets.com/i/newlook/859718004/womens/clothing/coats-jackets/grey-hooded-unlined-belted-coat.jpg?strip=true&qlt=50&w=720",
      },
    ],
  },
  {
    id: 5,
    title: "Minimalist ",
    price: 999,
    colors: [
      {
        code: "gray",
        img: "https://images.unsplash.com/photo-1559563458-527698bf5295?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        code: "black",
        img: "https://accessorizelondon.in/cdn/shop/products/MN-99002503001_2_d5fbdaf9-22b3-4535-940c-b1487168a648.jpg?crop=center&height=2000&v=1659615223&width=2000",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
