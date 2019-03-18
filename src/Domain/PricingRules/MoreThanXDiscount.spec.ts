import { expect } from "chai";
import "mocha";
import { Product } from "../Product";
import { MoreThanOrEqualXDiscount } from "./MoreThanOrEqualXDiscount";

describe("MoreThanXDiscount", () => {
  it("should apply discounted price for more than number of threshold purchased product when the pricing rule is for those product", () => {
    const pricingRule = new MoreThanOrEqualXDiscount("ProductType", 379.99, 4);
    const products = [
      new Product("ProductType", 10),
      new Product("ProductType", 10),
      new Product("ProductType", 10),
      new Product("ProductType", 10),
      new Product("ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.length).to.equal(5);
    expect(result.every(p => p.price === 379.99)).to.equal(true);
  });

  it("should noty apply discounted price for less than number of threshold purchased product when the pricing rule is for those product", () => {
    const pricingRule = new MoreThanOrEqualXDiscount("ProductType", 379.99, 4);
    const products = [
      new Product("ProductType", 10),
      new Product("ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.length).to.equal(2);
    expect(result.every(p => p.price === 10)).to.equal(true);
  });

  it("should  apply discounted price for equal number of threshold purchased product when the pricing rule is for those product", () => {
    const pricingRule = new MoreThanOrEqualXDiscount("ProductType", 379.99, 2);
    const products = [
      new Product("ProductType", 10),
      new Product("ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.length).to.equal(2);
    expect(result.every(p => p.price === 379.99)).to.equal(true);
  });

  it("should not apply discounted price for equal number of threshold purchased product when the pricing rule is for those product", () => {
    const pricingRule = new MoreThanOrEqualXDiscount("ProductType", 379.99, 2);
    const products = [
      new Product("ProductType", 10),
      new Product("ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.every(p => p.price === 379.99)).to.equal(true);
  });

  it("should not apply discounted price for non discounted products", () => {
    const pricingRule = new MoreThanOrEqualXDiscount("ProductType", 379.99, 2);
    const products = [
      new Product("Some other ProductType", 10),
      new Product("Some other ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.every(p => p.price === 10)).to.equal(true);
  });

  it("should not apply discounted price for non discounted products", () => {
    const pricingRule = new MoreThanOrEqualXDiscount("ProductType", 379.99, 2);
    const products = [
      new Product("Some other ProductType", 10),
      new Product("ProductType", 10),
      new Product("ProductType", 10)
      //new Product("ProductType", 10)
    ];
    const result = pricingRule.apply(products);
    expect(result.length).to.equal(3);
    expect(result[0].price).to.equal(10);
    expect(result[1].price).to.equal(379.99);
    expect(result[2].price).to.equal(379.99);
    //expect(result[3].price).equal(379.99);
  });
});
