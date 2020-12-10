function areaOfFigures(figure, numA, numB) {
  let result = 0

    switch (figure) {
        case 'square': result = Math.pow(numA, 2); break 
        case 'rectangle': result = numA * numB ; break
        case 'circle': result = numA * numA * Math.PI; break
        case 'triangle': result = numA * numB / 2; break
        }
        
    return  result.toFixed(3)
  }

// console.log(areaOfFigures('square', 5)) 