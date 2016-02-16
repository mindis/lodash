define(['./_baseFlatten', './toInteger'], function(baseFlatten, toInteger) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Recursively flatten `array` up to `depth` times.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to flatten.
   * @param {number} [depth=1] The maximum recursion depth.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * var array = [1, [2, [3, [4]], 5]];
   *
   * _.flattenDepth(array, 1);
   * // => [1, 2, [3, [4]], 5]
   *
   * _.flattenDepth(array, 2);
   * // => [1, 2, 3, [4], 5]
   */
  function flattenDepth(array, depth) {
    var length = array ? array.length : 0;
    if (!length) {
      return [];
    }
    depth = depth === undefined ? 1 : toInteger(depth);
    return baseFlatten(array, depth);
  }

  return flattenDepth;
});
