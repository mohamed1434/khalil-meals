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
    name: "Pricing",
    id: "pricing",
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
    name: "Chicken Noodles",
    img: "/assets/chowMein.jpg",
  },
  {
    name: "Chicken Mushroom",
    img: "/assets/creamyChicken.jpg",
  },
];

export const food = [
  {
    id: 0,
    name: "Chicken Curry",
    img: "/assets/curry.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Rice",
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
    name: "Chicken Burrito",
    img: "/assets/chickenBurrito.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Bread + Sauce",
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
    id: 2,
    name: "Kafta with Rice",
    img: "/assets/kaftaRice.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Rice",
        quantity: "300g",
        calories: "495",
      },
      {
        name: "Kafta",
        quantity: "250g",
        calories: "413",
      },
    ],
    totalCalories: 913,
  },
  {
    id: 3,
    name: "Lasgna",
    img: "/assets/lasgna.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Lasgna + Cheese + Sauce",
        quantity: "300g",
        calories: "495",
      },
      {
        name: "Meat",
        quantity: "250g",
        calories: "413",
      },
    ],
    totalCalories: 913,
  },
  {
    id: 4,
    name: "White Pasta",
    img: "/assets/whitePasta.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Pasta + Sauce",
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
    id: 5,
    name: "Chicken Wrap",
    img: "/assets/chickenWrap.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Tortilla + Sauce",
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
    id: 6,
    name: "Butter Chicken",
    img: "/assets/butterChicken.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Rice",
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
    id: 7,
    name: "Chicken Noodles",
    img: "/assets/chickenNoodels.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Noodles",
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
    id: 8,
    name: "Pink Pasta",
    img: "/assets/pasta.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Pasta + Sauce",
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
    id: 9,
    name: "Chicken Biryani",
    img: "/assets/chickenBiryani.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Rice",
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
    id: 10,
    name: "Chicken Mushroom",
    img: "/assets/chickenMushroom.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Rice",
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
    id: 11,
    name: "Lemon Pepper Chicken",
    img: "/assets/lemonPepper.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Tortilla + Sauce",
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
    id: 12,
    name: "Shawarma",
    img: "/assets/shawarma.webp",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Tortilla + Sauce",
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
    id: 13,
    name: "Pesto Pasta",
    img: "/assets/pestoPasta.png",
    macros: { chicken: 250, carbs: 300 },
    ingredients: [
      {
        name: "Pasta",
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

export const prices = [
  {
    name: "Basic",
    cost: 50.000,
    duration: "2 weeks",
    text: "Hello, I would like to get the Basic subscription :)"
  },
  {
    name: "Standard",
    cost: 90.000,
    duration: "1 month",
    text: "Hello, I would like to get the Standard subscription :)"
  },
  {
    name: "Advanced",
    cost: 160.000,
    duration: "2 months",
    text: "Hello, I would like to get the Advanced subscription :)"
  },
  {
    name: "Premium",
    cost: 240.000,
    duration: "3 months",
    text: "Hello, I would like to get the Premium subscription :)"
  },
]