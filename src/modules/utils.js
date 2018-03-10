const utils = module.exports = {
  isPromiseLike(p) {
    return p && typeof p.then === 'function'
  },

  isFunction(fn) {
    return typeof fn === 'function'
  },

  isEnumerable(list) {
    return list && Array.isArray(list) || typeof list[Symbol.iterator] === 'function'
  },

  flatten(arr) {
    if (!Array.isArray(arr)) throw new Error('Method `flatten` requires valid array parameter')
    return arr.reduce((results, item) => results.concat(Array.isArray(item) ? utils.flatten(item) : [item]), [])
  }
}
