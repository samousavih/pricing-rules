import { Checkout } from "../Domain/Checkout";
import { Product } from "../Domain/Product";
import { CustomerPricingRules } from "./CustomerPricingRules";

// These rules are fully flexible/dynamic they could be loaded through a repository e.g DB or another service or api
const pricingRules = CustomerPricingRules.getPricingRules();

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
