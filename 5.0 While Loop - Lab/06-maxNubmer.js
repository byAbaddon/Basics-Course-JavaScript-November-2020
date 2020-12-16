function maxNumber(arg) {
  arg.pop()
  return Math.max(...arg)
}

// console.log(maxNumber(["100", "99", "80", "70", "Stop"]))