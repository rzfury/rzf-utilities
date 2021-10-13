declare module "rzf-utilities" {
    /**
     * Return a value from a matched item from lookup table.
     *  
     * @param value `Type`: Value to lookup.
     * @param lookupTable `[Type, any][]`: Arrays of item to match.
     * @param defaultValue `any`: The default value to return if there's no match.
     * @returns `any`: Value based on the first matched item. Will return `null` if there's no match,
     * or `defaultValue` if you define a default value.
     * @example
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
     */
    export function lookup<T>(value: T, lookupTable: [T, any][], defaultValue: any);

    /**
     * Usually used in React projects.
     * 
     * A simple class names join function, will ignore non-string values if there's any.
     * @param {string[]} classes Class Names
     */
    export default function conclass(...classes: string[]): string;
}