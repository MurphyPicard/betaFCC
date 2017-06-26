function addit(x,y) {
  return x + y
}
var total = 1

function factorialit(x) {


  if   (x >= 2)
  {
    total *= x
    return factorialit(x-1)
  }
  else if (x < 2){ return total}

  else { return 1 }
}
