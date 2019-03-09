import { IPricingRule } from "../Domain/Interfaces/PricingRule";
import { GetDiscountForAProduct } from "../Domain/PricingRules/GetDiscountForAProduct";
import { GetXforOneFreeDeal } from "../Domain/PricingRules/GetXforOneFreeDeal";

export class CustomerPricingRules {
  public static getPricingRules(): Map<string, IPricingRule[]> {
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
}
