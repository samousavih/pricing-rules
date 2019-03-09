import { Checkout } from "./Domain/Checkout";
import { IPricingRule } from "./Domain/Interfaces/PricingRule";
import { GetDiscountForAProduct } from "./Domain/PricingRules/GetDiscountForAProduct";
import { GetXforOneFreeDeal } from "./Domain/PricingRules/GetXforOneFreeDeal";
import { Product } from "./Domain/Product";

const pricingRules = fetchPricingRules();

const defaultCheckout = new Checkout(pricingRules, "SecondBite");
defaultCheckout.addItem(new Product("Classic Ad", 269.99));
defaultCheckout.addItem(new Product("Stand out Ad", 322.99));
defaultCheckout.addItem(new Product("Premium Ad", 394.99));
console.log(defaultCheckout.toString());
console.log(`Total: ${defaultCheckout.calculateTotal()}`);

const secondBiteCheckout = new Checkout(pricingRules, "SecondBite");
secondBiteCheckout.addItem(new Product("Classic Ad", 269.99));
secondBiteCheckout.addItem(new Product("Classic Ad", 269.99));
secondBiteCheckout.addItem(new Product("Classic Ad", 269.99));
secondBiteCheckout.addItem(new Product("Premium Ad", 394.99));
console.log(secondBiteCheckout.toString());
console.log(`Total: ${secondBiteCheckout.calculateTotal()}`);

const axilCoffeeRoastersCheckout = new Checkout(
  pricingRules,
  "Axil Coffee Roasters"
);
axilCoffeeRoastersCheckout.addItem(new Product("Stand out Ad", 322.99));
axilCoffeeRoastersCheckout.addItem(new Product("Stand out Ad", 322.99));
axilCoffeeRoastersCheckout.addItem(new Product("Stand out Ad", 322.99));
axilCoffeeRoastersCheckout.addItem(new Product("Premium Ad", 394.99));
console.log(axilCoffeeRoastersCheckout.toString());
console.log(`Total: ${axilCoffeeRoastersCheckout.calculateTotal()}`);

const myerCheckout = new Checkout(pricingRules, "MYER");
myerCheckout.addItem(new Product("Stand out Ad", 322.99));
myerCheckout.addItem(new Product("Stand out Ad", 322.99));
myerCheckout.addItem(new Product("Stand out Ad", 322.99));
myerCheckout.addItem(new Product("Stand out Ad", 322.99));
myerCheckout.addItem(new Product("Stand out Ad", 322.99));
myerCheckout.addItem(new Product("Premium Ad", 394.99));
console.log(myerCheckout.toString());
console.log(`Total: ${myerCheckout.calculateTotal()}`);

function fetchPricingRules() {
  const pricingRules = new Map<string, IPricingRule[]>();
  pricingRules.set("SecondBite", [new GetXforOneFreeDeal(3, "Classic Ad")]);
  pricingRules.set("Axil Coffee Roasters", [
    new GetDiscountForAProduct("Stand out Ad", 299.99)
  ]);
  pricingRules.set("MYER", [
    new GetXforOneFreeDeal(5, "Stand out Ad"),
    new GetDiscountForAProduct("Premium Ad", 389.99)
  ]);
  return pricingRules;
}
