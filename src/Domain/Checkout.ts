import { IPricingRule } from "./Interfaces/PricingRule";
import { IProduct } from "./Interfaces/Product";

export class Checkout {
  private _products: IProduct[] = [];
  private _pricingRules: Map<string, IPricingRule[]>;
  private _customerName: string;

  constructor(pricingRules: Map<string, IPricingRule[]>, customerName: string) {
    this._pricingRules = pricingRules;
    this._customerName = customerName;
  }

  public calculateTotal(): number {
    const customerPricingRules =
      this._pricingRules.get(this._customerName) || [];

    let productsWithPotentialDiscount = [...this._products];

    for (const pricingRule of customerPricingRules) {
      productsWithPotentialDiscount = pricingRule.apply(
        productsWithPotentialDiscount
      );
    }
    return productsWithPotentialDiscount.reduce((sum, p) => sum + p.price, 0);
  }

  public addItem(product: IProduct) {
    this._products.push(product);
  }

  public toString(): string {
    return `Customer : ${this._customerName}\nItems : ${this._products
      .map(p => p.productType)
      .join(", ")} `;
  }
}
