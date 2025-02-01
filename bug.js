function foo(x) {
  if (x == null) {
    return 0; //This will return 0 for both null and undefined
  }
  return x;
}
console.log(foo(null)); //0
console.log(foo(undefined)); //0