import { ModuleProvider, Modules } from "@medusajs/framework/utils"
import { IranPostFulfillmentService } from "./services/iran-post-fulfillment"

export default ModuleProvider(Modules.FULFILLMENT, {
  services: [IranPostFulfillmentService],
})
