import { IProduct } from "../Interfaces/Product";

export class DiscountedProduct implements IProduct {
  private _originalProduct: IProduct;
  private _price: number;
  constructor(originalProduct: IProduct, price: number) {
    this._originalProduct = originalProduct;
    this._price = price;
  }
  get productType(): string {
    return this.originalProduct.productType;
  }

  get originalProduct(): IProduct {
    return this._originalProduct;
  }

  get price(): number {
    return this._price;
  }
}
