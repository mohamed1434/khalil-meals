import {
  Car,
  Hamburger,
  InstagramLogo,
  Money,
  Package,
  WhatsappLogo,
} from "phosphor-react";

export const navbarItems = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Menu",
    id: "menu",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Contact",
    id: "contact",
  },
]; //"Home", "Menu", "About", "Contact"

export const cardItems = [
  {
    title: "Fresh Food",
    desc: "Freshly prepared meals made from the finest ingredients, conveniently delivered to your door every day.",
    icon: <Hamburger size={36} color="#191717" weight="bold" />,
  },
  {
    title: "Low Prices",
    desc: "We offer high quality, fresh ingredients, healthy food at affordable prices.",
    icon: <Money size={36} color="#191717" weight="bold" />,
  },
  {
    title: "Delivery",
    desc: "We deliver our freshly cooked meals no matter where you are in Debrecen, direct to your doorsteps.",
    icon: <Car size={36} color="#191717" weight="bold" />,
  },
];

export const circleCardItems = [
  {
    name: "Chicken Curry",
    img: "/assets/chickenCurry.jpg",
  },
  {
    name: "Chow Mein Noodles",
    img: "/assets/chowMein.jpg",
  },
  {
    name: "Chicken Curry",
    img: "/assets/creamyChicken.jpg",
  },
];

export const food = [
  {
    id: 0,
    name: "Chicken Curry",
    img: "/assets/pasta.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Pasta + Pink Sauce",
        quantity: "300g",
        calories: "495",
      },
      {
        name: "Chicken",
        quantity: "250g",
        calories: "413",
      },
    ],
    totalCalories: 913,
  },
  {
    id: 1,
    name: "Chow Mein Noodles",
    img: "/assets/chowMein.jpg",
    macros: { chicken: 250, carbs: 300 },
  },
  {
    id: 2,
    name: "Pasta Curry",
    img: "/assets/creamyChicken.jpg",
    macros: { chicken: 250, carbs: 300 },
  },
  {
    id: 3,
    name: "Noodles Curry",
    img: "/assets/pasta.png",
    macros: { chicken: 250, carbs: 300 },
  },
  {
    id: 4,
    name: "Ramen Curry",
    img: "/assets/pasta.png",
    macros: { chicken: 250, carbs: 300 },
  },
];

export const socialIcons = [
  {
    link: "https://instagram.com/khalilmeals?igshid=NzZhOTFlYzFmZQ==",
    icon: <InstagramLogo size={36} color="#F7F7F7" weight="bold" />,
  },
  {
    link: "https://wa.me/+36705590083",
    icon: <WhatsappLogo size={36} color="#F7F7F7" weight="bold" />,
  },
];
