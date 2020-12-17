function oldBooks(arg) {
  let book = arg.shift()
  let bookIndex = arg.indexOf(book)

  return bookIndex > -1 
   ? `You checked ${bookIndex} books and found it.` 
   : `The book you search is not here!\nYou checked ${arg.length -1} books.`
}

//console.log(oldBooks(['Troy','Stronger','Life Style','Troy']))




  
 
  
