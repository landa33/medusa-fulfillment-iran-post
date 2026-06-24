import { AbstractFulfillmentProviderService } from "@medusajs/framework/utils"
import {
  CalculatedShippingOptionPrice,
  FulfillmentOption,
  CreateFulfillmentResult,
} from "@medusajs/framework/types"
import { IranPostStaticCalculator } from "../calculators/iran-post-static"
import { IShippingCalculator } from "../calculators/types"

export class IranPostFulfillmentService extends AbstractFulfillmentProviderService {
  static identifier = "iran-post"
  private calculator: IShippingCalculator
  private originProvince: string

  constructor(container: any, options: Record<string, unknown>) {
    super()
    this.calculator = new IranPostStaticCalculator()
    // Read origin province from options or default to isfahan
    this.originProvince = (options?.originProvince as string) || "isfahan"
  }

  async getFulfillmentOptions(): Promise<FulfillmentOption[]> {
    return [
      { id: "pishtaz", name: "پست پیشتاز" },
      { id: "sefareshi", name: "پست عادی" },
      { id: "express", name: "پست اکسپرس" },
      { id: "special", name: "پست ویژه" }
    ]
  }

  async validateOption(data: Record<string, unknown>): Promise<boolean> {
    return true
  }

  async validateFulfillmentData(
    optionData: Record<string, unknown>,
    data: Record<string, unknown>,
    context: any
  ): Promise<any> {
    return data
  }

  async canCalculate(
    data: any
  ): Promise<boolean> {
    return true
  }

  async calculatePrice(
    optionData: Record<string, unknown>,
    data: Record<string, unknown>,
    context: any
  ): Promise<CalculatedShippingOptionPrice> {
    
    // Calculate final price using our Strategy
    const finalPriceRial = await this.calculator.calculate(
      optionData, 
      data, 
      context, 
      this.originProvince
    )

    return {
      calculated_amount: finalPriceRial,
      is_calculated_price_tax_inclusive: true,
    }
  }

  async createFulfillment(
    data: Record<string, unknown>,
    items: any[],
    order: any,
    fulfillment: any
  ): Promise<CreateFulfillmentResult> {
    // Implement fulfillment creation (e.g., getting tracking code from Post API)
    return { 
      data: { tracking_code: "12345" },
      labels: [
        {
          tracking_number: "12345",
          tracking_url: "https://tracking.post.ir/",
          label_url: "",
        }
      ]
    }
  }

  async cancelFulfillment(
    fulfillment: Record<string, unknown>
  ): Promise<any> {
    return {}
  }
}
