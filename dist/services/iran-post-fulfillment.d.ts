import { AbstractFulfillmentProviderService } from "@medusajs/framework/utils";
import { CalculatedShippingOptionPrice, FulfillmentOption, CreateFulfillmentResult } from "@medusajs/framework/types";
export declare class IranPostFulfillmentService extends AbstractFulfillmentProviderService {
    static identifier: string;
    private calculator;
    private originProvince;
    constructor(container: any, options: Record<string, unknown>);
    getFulfillmentOptions(): Promise<FulfillmentOption[]>;
    validateOption(data: Record<string, unknown>): Promise<boolean>;
    validateFulfillmentData(optionData: Record<string, unknown>, data: Record<string, unknown>, context: any): Promise<any>;
    canCalculate(data: any): Promise<boolean>;
    calculatePrice(optionData: Record<string, unknown>, data: Record<string, unknown>, context: any): Promise<CalculatedShippingOptionPrice>;
    createFulfillment(data: Record<string, unknown>, items: any[], order: any, fulfillment: any): Promise<CreateFulfillmentResult>;
    cancelFulfillment(fulfillment: Record<string, unknown>): Promise<any>;
}
