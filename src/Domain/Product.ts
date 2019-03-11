import { IProduct } from "./Interfaces/Product";

export class Product implements IProduct {
  private _productType: string;
  private _price: number;
  public constructor(type: string, price: number) {
    this._productType = type;
    this._price = price;
  }

  get productType(): string {
    return this._productType;
  }

  get price(): number {
    return this._price;
  }
}
