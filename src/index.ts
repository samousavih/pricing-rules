import { Checkout } from "./Domain/Checkout";
import { IPricingRule } from "./Domain/Interfaces/PricingRule";
import { GetXforOneFreeDeal } from "./Domain/PricingRules/GetXforOneFreeDeal";
import { Product } from "./Domain/Product";

const pricingRules = new Map<string, IPricingRule[]>();
pricingRules.set("SecondBite", [new GetXforOneFreeDeal(3, "Classic Ad")]);

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
