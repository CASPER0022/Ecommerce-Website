const wrapper = document.querySelector(".sliderwrapper");
const menuitems = document.querySelectorAll(".menuitem");

//ADD IMAGES WITH RESPECT TO COLORS

const products = [
    {id:1,
     title: "Marvis 200i",
     price: 10,
     colors: [
        {
            code: "black",
            image: "./image/41YAK9B0HzL.jpg",
        },
        {
            code: "green",
            image: "./image/yonex-mavis-200i-badminton-shuttlecock-green-yellow_1__1_-removebg-preview.png",
        },
     ],
    },
    {
        id:2,
        title: "Steel bottle",
        price: 19,
        colors: [
            {
                code: "gray",
                image: "./image/bottle_with_background-removebg-preview.png",
            },
            {
                code: "yellow",
                image: "./image/green.jpg",
            },
        ],
    },
    {
        id:3,
        title: "Mouse",
        price: 29,
        colors: [
            {
                code: "black",
                image: "./image/computer-mouse-computer-keyboard-apple-usb-mouse-optical-mouse-logitech-computer-mouse-removebg-preview.png"
            },
            {
                code: "gold",
                image: "./image/computer-mouse-computer-keyboard-apple-usb-mouse-optical-mouse-logitech-computer-mouse-removebg-preview-Photoroom.png",
            },
        ],
    },
    {
        id:4,
        title: "Wallet",
        price: 9,
        colors: [
            {
                code: "brown",
                image: "./image/wallet-removebg-preview.png",
            },
            {
                code: "blue",
                image: "./image/wallet-removebg-preview-Photoroom.png",
            },
        ],
    },
    {
        id:5,
        title: "Nerf gun",
        price: 1000,
        colors: [
            {
                code: "blue",
                image: "./image/nerf-removebg-preview.png",
            },
            {
                code: "orange",
                image: "./image/nerf-removebg-preview.png",
            }
        ],
    },
];

let choosenproduct = products[0]

const currentproductimg = document.querySelector(".productimage");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproductcolors = document.querySelectorAll(".color");

menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenproduct = products[index];

        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent = "$" + choosenproduct.price;
        currentproductimg.src = choosenproduct.colors[0].image;

        currentproductcolors.forEach((color,index) => {
            color.style.backgroundColor = choosenproduct.colors[index].code;
        });
    });
});

currentproductcolors.forEach((color,index) => {
    color.addEventListener("click",()=>{
        currentproductimg.src = choosenproduct.colors[index].image;
    });
});

const productbutton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click",()=>{
    payment.style.display = "flex";
});

close.addEventListener("click",()=>{
    payment.style.display = "none";
});