import { IPricingRule } from "../Interfaces/PricingRule";
import { IProduct } from "../Interfaces/Product";
import { DiscountedProduct } from "./DicountedProduct";

export class GetXforOneFreeDeal implements IPricingRule {
  public readonly productCount: number;
  public readonly productType: string;
  public constructor(productCount: number, productType: string) {
    this.productCount = productCount;
    this.productType = productType;
  }
  public apply(products: IProduct[]): IProduct[] {
    const discountableProducts = products
      .filter(p => p.productType === this.productType)
      .map((p, index) => {
        if ((index + 1) % this.productCount === 0) {
          return new DiscountedProduct(p, 0);
        }
        return p;
      });
    const nonDiscountableProducts = products.filter(
      p => p.productType !== this.productType
    );
    return [...discountableProducts, ...nonDiscountableProducts];
  }
}
