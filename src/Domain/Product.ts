import { IProduct } from "./Interfaces/Product";

export class Product implements IProduct {
  public readonly productType: string;
  public readonly price: number;
  public constructor(type: string, price: number) {
    this.productType = type;
    this.price = price;
  }
}
