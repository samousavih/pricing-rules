import { IPricingRule } from "../Interfaces/PricingRule";
import { IProduct } from "../Interfaces/Product";
import { DiscountedProduct } from "../PricingRules/DicountedProduct";

export class MoreThanOrEqualXDiscount implements IPricingRule {
  public readonly discountPrice: number;
  public readonly productType: string;
  public readonly numberOfProductsForDiscount: number;
  public constructor(
    productType: string,
    discountPrice: number,
    numberOfProductsForDiscount: number
  ) {
    this.discountPrice = discountPrice;
    this.productType = productType;
    this.numberOfProductsForDiscount = numberOfProductsForDiscount;
  }
  public apply(products: IProduct[]): IProduct[] {
    const sameTypeProducts = products.filter(
      p => p.productType === this.productType
    );
    let discountedProducts = sameTypeProducts;
    if (sameTypeProducts.length >= this.numberOfProductsForDiscount) {
      discountedProducts = sameTypeProducts.map(
        p => new DiscountedProduct(p, this.discountPrice)
      );
    }
    const nonSameTypeProducts = products.filter(
      p => p.productType !== this.productType
    );
    return [...nonSameTypeProducts, ...discountedProducts];
  }
}
