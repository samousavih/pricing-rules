import { expect } from "chai";
import "mocha";
import { Checkout } from "./Checkout";
import { IPricingRule } from "./Interfaces/PricingRule";
import { IProduct } from "./Interfaces/Product";
import { DiscountedProduct } from "./PricingRules/DicountedProduct";
import { Product } from "./Product";
const customerA = "customerA";
const customerB = "customerB";

const PricingRuleA = {
  apply(products: IProduct[]) {
    const [first, ...rest] = products;
    return [new DiscountedProduct(first, 0), ...rest];
  }
};

describe("Checkout", () => {
  it("should calculate total for products with no pricing rules", () => {
    const pricingRules = new Map<string, IPricingRule[]>();
    const checkout = new Checkout(pricingRules, customerA);
    checkout.addItem(new Product("Classic Ad", 269.99));
    checkout.addItem(new Product("Classic Ad", 269.99));
    expect(checkout.calculateTotal()).equal(539.98);
  });
  it("should calculate total for products with no pricing rules for the customer", () => {
    const pricingRules = new Map<string, IPricingRule[]>();
    pricingRules.set(customerB, [PricingRuleA]);
    const checkout = new Checkout(pricingRules, customerA);
    checkout.addItem(new Product("Classic Ad", 269.99));
    checkout.addItem(new Product("Classic Ad", 269.99));
    expect(checkout.calculateTotal()).equal(539.98);
  });

  it("should calculate total for products with pricing rules", () => {
    const pricingRules = new Map<string, IPricingRule[]>();
    pricingRules.set(customerA, [PricingRuleA]);
    const checkout = new Checkout(pricingRules, customerA);
    checkout.addItem(new Product("Classic Ad", 269.99));
    checkout.addItem(new Product("Classic Ad", 269.99));
    expect(checkout.calculateTotal()).equal(269.99);
  });
});
