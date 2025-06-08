export enum Category {
  DiningChair = "Dining Chair",
  LoungeChair = "Lounge Chair",
  Sofa = "Sofa",
  BarStool = "Bar Stool",
  CoffeeTable = "Coffee Table",
  PendantLight = "Pendant Light",
  FloorLamp = "Floor Lamp",
  HookAndCoatStand = "Hook And Coat Stand",
  Wallpaper = "Wallpaper",
}

export enum Size {
  S = "S",
  L = "L",
  M = "M",
  XL = "XL",
}

export enum Rate {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imagePath: string;
  category: Category;
  size: Size;
  featured: boolean;
  discount: number;
  new: boolean;
  rate: Rate;
  quantity: number;
};

export function amountFormatter(amount: number) {
  return `₦${amount.toLocaleString()}`;
}
