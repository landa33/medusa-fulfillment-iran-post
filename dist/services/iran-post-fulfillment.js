"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IranPostFulfillmentService = void 0;
const utils_1 = require("@medusajs/framework/utils");
const iran_post_static_1 = require("../calculators/iran-post-static");
class IranPostFulfillmentService extends utils_1.AbstractFulfillmentProviderService {
    constructor(container, options) {
        super();
        this.calculator = new iran_post_static_1.IranPostStaticCalculator();
        // Read origin province from options or default to isfahan
        this.originProvince = options?.originProvince || "isfahan";
    }
    async getFulfillmentOptions() {
        return [
            { id: "pishtaz", name: "پست پیشتاز" },
            { id: "sefareshi", name: "پست عادی" },
            { id: "express", name: "پست اکسپرس" },
            { id: "special", name: "پست ویژه" }
        ];
    }
    async validateOption(data) {
        return true;
    }
    async validateFulfillmentData(optionData, data, context) {
        return data;
    }
    async canCalculate(data) {
        return true;
    }
    async calculatePrice(optionData, data, context) {
        // Calculate final price using our Strategy
        const finalPriceRial = await this.calculator.calculate(optionData, data, context, this.originProvince);
        return {
            calculated_amount: finalPriceRial,
            is_calculated_price_tax_inclusive: true,
        };
    }
    async createFulfillment(data, items, order, fulfillment) {
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
        };
    }
    async cancelFulfillment(fulfillment) {
        return {};
    }
}
exports.IranPostFulfillmentService = IranPostFulfillmentService;
IranPostFulfillmentService.identifier = "iran-post";
