"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const iran_post_fulfillment_1 = require("./services/iran-post-fulfillment");
exports.default = (0, utils_1.ModuleProvider)(utils_1.Modules.FULFILLMENT, {
    services: [iran_post_fulfillment_1.IranPostFulfillmentService],
});
