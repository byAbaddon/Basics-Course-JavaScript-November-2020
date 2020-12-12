function skiTrip(...arg) {
  let [days, room_type, opinion] = [+arg[0] - 1, arg[1], arg[2]]
  let price = 0

  switch (true) {
      case room_type === 'room for one person': price = 18; break
      case room_type === 'apartment': 
          price = 25
          days > 15 ? price *= 0.50 : days >= 10 ? price *= 0.65 : price *= 0.70; break
      case room_type === 'president apartment': 
          price = 35 
          days > 15 ? price *= 0.80 : days >= 10 ? price *= 0.85 : price *= 0.90; break
  }

  opinion == 'positive' ? price *= 1.25 : opinion == 'negative' ? price *= 0.90 : null 
  return (price * days).toFixed(2)
}

//console.log(skiTrip(30, "president apartment", "negative"))


//---------------------------------------------------(2)-----------------------------------------
function skiTrip(days, room_type, opinion) {
  let price = 0
  days -= 1

  if (room_type === 'room for one person') price = 18 
  else if (room_type === 'apartment') {
      price = 25
      days > 15 ? price *= 0.50 : days >= 10 ? price *= 0.65 : price *= 0.70
  } else {
      price = 35
      days > 15 ? price *= 0.80 : days >= 10 ? price *= 0.85 : price *= 0.90;
  }

  opinion == 'positive' ? price *= 1.25 : opinion == 'negative' ? price *= 0.90 : null
  return (price * days).toFixed(2)
}

//console.log(skiTrip(14, "apartment", "positive"))