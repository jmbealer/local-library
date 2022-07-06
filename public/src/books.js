
const findAuthorById = (authors, id) => authors.find(author => author.id === id);
// function findAuthorById(authors, id) {
  // return authors.find(author => author.id === id )
// }

const findBookById = (books, id) => books.find(book => book.id === id)
// function findBookById(books, id) {
  // return books.find(book => book.id === id)
// }

function partitionBooksByBorrowedStatus(books) {
  // using .filter to check if borrows[].returned false
  const borrowed = books.filter((book) => book.borrows[0].returned === false)
  // using .filter to check if borrows[].returned true
  const returned = books.filter((book) => book.borrows[0].returned === true)
  // return both 
  return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    // .find if account.id and borrow.id match
    const account = accounts.find(account => account.id === borrow.id)
    // spreading both and puting them into object
    return {...borrow, ...account}
    // only 10 borrowers
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
