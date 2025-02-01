function foo(x) {
  if (x === null) {
    return 0; //Correctly handles only null
  } else if (x === undefined) {
    return -1; //Correctly handles only undefined
  }
  return x;
}
console.log(foo(null)); //0
console.log(foo(undefined)); //-1