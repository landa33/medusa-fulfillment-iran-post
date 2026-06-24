export interface IShippingCalculator {
  calculate(
    optionData: Record<string, unknown>,
    data: Record<string, unknown>,
    context: any,
    originProvince?: string
  ): Promise<number>;
}
