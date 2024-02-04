function curriedAdd(total) {
  if (total == undefined) {
    return 0;
  } else {
    return function addMore(num) {
      if (num == undefined) return total;
      total += num
      return addMore
    };
  }
}
module.exports = { curriedAdd };
