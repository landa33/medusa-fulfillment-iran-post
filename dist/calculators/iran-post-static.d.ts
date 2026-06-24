import { IShippingCalculator } from "./types";
export declare class IranPostStaticCalculator implements IShippingCalculator {
    private adjacencyMap;
    private getDistanceType;
    private getCoastalSurcharge;
    private getInsuranceCost;
    calculate(optionData: Record<string, unknown>, data: Record<string, unknown>, context: any, originProvince?: string): Promise<number>;
    private calculatePishtaz;
    private calculateSpecial;
    private calculateExpress;
    private calculateSefareshi;
}
