function bonusScore(num) {
    num  = parseInt(num)
    let bonus = 0 
 
    if (num <= 100) {
        bonus += 5
    } else{
        num < 1000 ? bonus = num * 0.20 : bonus = num * 0.10
    }

    num % 2 === 0 ? ++bonus : null
    num % 10 === 5 ? bonus += 2 : null

    return `${bonus}\n${num + bonus}`
}

// console.log(bonusScore('20'));
// console.log(bonusScore('2703'));