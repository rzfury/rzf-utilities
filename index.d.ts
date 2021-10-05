declare module "rzf-utilities" {
    /**
     * Return a value from a matched item from lookup table.
     * 
     * Example:
     * ```
     * const sides = 4;
     * const shapes = lookup(
     *    sides,
     *    [
     *      [4, "Square"],
     *      [3, "Triangle"],
     *    ]
     * );
     * console.log(shapes); // Square
     * ```
     * 
     * @param value `Type`: Value to lookup.
     * @param lookupTable `[Type, any][]`: Arrays of item to match.
     * @returns `any`: Value based on the first matched item. Will return `defaultValue`
     * if `value` isn't matched with any items, `null` if `defaultValue` is not defined.
     */
    export function lookup<T>(value: T, lookupTable: [T, any][], defaultValue: any = null);
}