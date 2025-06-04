export enum Category {
  Dining_Chair,
  Lounge_Chair,
  Sofa,
  Bar_Stool,
  Coffee_Table,
  Pendant_Light,
  Floor_Lamp,
  Hook_And_Coat_Stand,
  Wallpaper,
}

export enum Size {
  S,
  L,
  M,
  XL,
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
  price: string;
  imagePath: string;
  category: Category;
  size?: Size;
  featured?: boolean;
  discount?: number;
  new?: boolean;
  rate: Rate;
};

export function amountFormatter(amount: number) {
  return `₦${amount.toLocaleString()}`;
}
