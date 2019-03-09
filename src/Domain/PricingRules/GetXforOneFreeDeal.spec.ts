import { expect } from "chai";
import "mocha";
import { Product } from "../Product";
import { GetXforOneFreeDeal } from "./GetXforOneFreeDeal";

describe("GetXforOneFreeDeal", () => {
  it("should apply free deal for products more than deal count", () => {
    const pricingRule = new GetXforOneFreeDeal(2, "ProductType");
    const products = [
      new Product("ProductType", 10),
      new Product("ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.some(p => p.price === 0)).equal(true);
  });

  it("should apply free deal for products more than deal count and when aslo non discounted products involved", () => {
    const pricingRule = new GetXforOneFreeDeal(2, "ProductType");
    const products = [
      new Product("ProductType", 10),
      new Product("ProductType", 10),
      new Product("Some Other ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.some(p => p.price === 0)).equal(true);
  });
  it("should not apply any free deal for products lees than deal count", () => {
    const pricingRule = new GetXforOneFreeDeal(3, "ProductType");
    const products = [
      new Product("ProductType", 10),
      new Product("ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.some(p => p.price === 0)).equal(false);
  });
});
