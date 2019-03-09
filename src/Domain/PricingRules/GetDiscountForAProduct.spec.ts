import { expect } from "chai";
import "mocha";
import { Product } from "../Product";
import { GetDiscountForAProduct } from "./GetDiscountForAProduct";

describe("GetXforOneFreeDeal", () => {
  it("should apply doscounted price to every product of the same type", () => {
    const pricingRule = new GetDiscountForAProduct("ProductType", 5);
    const products = [
      new Product("ProductType", 10),
      new Product("ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.every(p => p.price === 5)).equal(true);
  });
});
