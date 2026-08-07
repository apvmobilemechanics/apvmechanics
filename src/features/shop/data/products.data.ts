import type { ProductItem } from "@/types/product.types";

export const products: ProductItem[] = [
  {
    id: "engine-oil-filter",
    name: "Premium Synthetic Engine Oil Filter",
    price: 49.99,
    oldPrice: 65.00,
    rating: 5,
    image: "/assets/images/services/services-1-4.jpg",
    category: "Filters",
  },
  {
    id: "heavy-duty-brake-pads",
    name: "Heavy Duty Ceramic Brake Pads",
    price: 89.99,
    oldPrice: 110.00,
    rating: 5,
    image: "/assets/images/services/services-1-3.jpg",
    category: "Brakes",
  },
  {
    id: "car-battery-12v",
    name: "Ultra Power 12V Car Battery",
    price: 189.99,
    oldPrice: 220.00,
    rating: 5,
    image: "/assets/images/services/services-1-5.jpg",
    category: "Electrical",
  },
  {
    id: "all-weather-tires",
    name: "Performance All-Weather Tire",
    price: 159.99,
    oldPrice: 195.00,
    rating: 5,
    image: "/assets/images/services/services-1-1.jpg",
    category: "Tires",
  },
];
