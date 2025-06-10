export interface Product {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: "123",
    name: "Hat",
    imageUrl: "https://picsum.photos/400/300?random=1", // 'random' parameter ensures unique image per request
    description:
      "Cheer the team on in style with our unstructured, low crown hat. Made from soft, durable cotton for a comfortable fit.",
    price: 29,
  },
  {
    id: "234",
    name: "Mug",
    imageUrl: "https://picsum.photos/400/300?random=2",
    description:
      "Enjoy your morning coffee or tea in the company of your favorite team. This ceramic mug holds 12 oz and is dishwasher safe.",
    price: 16,
  },
  {
    id: "345",
    name: "T-Shirt",
    imageUrl: "https://picsum.photos/400/300?random=3",
    description:
      "Show your support with this comfortable and stylish t-shirt. Made from 100% pre-shrunk cotton. Available in various sizes.",
    price: 35,
  },
  {
    id: "456",
    name: "Key Chain",
    imageUrl: "https://picsum.photos/400/300?random=4",
    description:
      "Keep your keys organized with this durable metal key chain featuring your team's logo. A great accessory for any fan.",
    price: 8,
  },
  {
    id: "567",
    name: "Hoodie",
    imageUrl: "https://picsum.photos/400/300?random=5",
    description:
      "Stay warm and cozy in this premium fleece hoodie. Perfect for chilly game nights or casual wear. Features a front pocket and drawstring hood.",
    price: 65,
  },
  {
    id: "678",
    name: "Water Bottle",
    imageUrl: "https://picsum.photos/400/300?random=6",
    description:
      "Stay hydrated on the go with this BPA-free sports water bottle. Features an easy-sip lid and ergonomic design. Capacity: 24 oz.",
    price: 20,
  },
  {
    id: "789",
    name: "Backpack",
    imageUrl: "https://picsum.photos/400/300?random=7",
    description:
      "Carry your essentials in this spacious and durable backpack. Perfect for school, work, or travel. Features multiple compartments and padded straps.",
    price: 55,
  },
  {
    id: "890",
    name: "Phone Case",
    imageUrl: "https://picsum.photos/400/300?random=8",
    description:
      "Protect your phone in style with this slim and protective phone case. Designed for a perfect fit and easy access to all ports.",
    price: 25,
  },
  {
    id: "901",
    name: "Poster",
    imageUrl: "https://picsum.photos/400/300?random=9",
    description:
      "Decorate your room or office with this vibrant team poster. Printed on high-quality paper with a glossy finish. Size: 18x24 inches.",
    price: 12,
  },
  {
    id: "012",
    name: "Scarf",
    imageUrl: "https://picsum.photos/400/300?random=10",
    description:
      "Show your team spirit with this cozy and warm knitted scarf. Perfect for colder weather or as a stylish accessory.",
    price: 30,
  },
  {
    id: "111",
    name: "Lapel Pin",
    imageUrl: "https://picsum.photos/400/300?random=11",
    description:
      "Add a touch of team pride to your jacket or bag with this intricately designed lapel pin. Made from durable enamel.",
    price: 9,
  },
  {
    id: "222",
    name: "Baseball Cap",
    imageUrl: "https://picsum.photos/400/300?random=12",
    description:
      "Classic baseball cap design with an adjustable strap for a comfortable fit. Perfect for sunny days at the game.",
    price: 28,
  },
];
