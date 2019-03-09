import { IProduct } from "../Interfaces/Product";

export class DiscountedProduct implements IProduct {
  public readonly originalProduct: IProduct;
  public readonly price: number;
  constructor(originalProduct: IProduct, price: number) {
    this.originalProduct = originalProduct;
    this.price = price;
  }
  get productType() {
    return this.originalProduct.productType;
  }
}
