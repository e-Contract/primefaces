/**
 * Tests a property with typedef
 */
({
    /**
     * prop foo
     * @type {number}
     * @typedef {(x: boolean) => RegExp} TheType the type
     * @param {boolean} TheType.x param x
     * @return {RegExp} TheType return value
     */
    foo: 0,
})