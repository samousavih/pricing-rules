import { IPricingRule } from "../Interfaces/PricingRule";
import { IProduct } from "../Interfaces/Product";
import { DiscountedProduct } from "./DicountedProduct";

export class GetDiscountForAProduct implements IPricingRule {
  public readonly discountPrice: number;
  public readonly productType: string;
  public constructor(productType: string, discountPrice: number) {
    this.discountPrice = discountPrice;
    this.productType = productType;
  }
  public apply(products: IProduct[]): IProduct[] {
    return products.map(p => {
      if (p.productType === this.productType) {
        return new DiscountedProduct(p, this.discountPrice);
      }
      return p;
    });
  }
}
