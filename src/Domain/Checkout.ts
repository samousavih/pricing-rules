import { IPricingRule } from "./Interfaces/PricingRule";
import { IProduct } from "./Interfaces/Product";

export class Checkout {
  public readonly products: IProduct[] = [];
  public readonly pricingRules: Map<string, IPricingRule[]>;
  public readonly customerName: string;

  constructor(pricingRules: Map<string, IPricingRule[]>, customerName: string) {
    this.pricingRules = pricingRules;
    this.customerName = customerName;
  }

  public calculateTotal(): number {
    const customerPricingRules = this.pricingRules.get(this.customerName) || [];

    let productsWithPotentialDiscount = [...this.products];

    for (const pricingRule of customerPricingRules) {
      productsWithPotentialDiscount = pricingRule.apply(
        productsWithPotentialDiscount
      );
    }
    return productsWithPotentialDiscount.reduce((sum, p) => sum + p.price, 0);
  }

  public addItem(product: IProduct) {
    this.products.push(product);
  }

  public toString(): string {
    return `Customer : ${this.customerName}\nItems : ${this.products
      .map(p => p.productType)
      .join(", ")} `;
  }
}
