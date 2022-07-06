const { getBorrowersForBook } = require("./books");

// should return the account object that matches given id
const findAccountById = (accounts, id) => accounts.find(account => account.id === id);
// function findAccountById(accounts, id) {
  // return accounts.find(account => account.id === id);
// }

// should returns an array sorted by lastname
function sortAccountsByLastName(accounts) {
  // using .sort on accounts.name.last to sort
  return accounts.sort((accA, accB) => 
  accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1
  );
}
// should return the number of times the account id  appears in books borrows
// destructure account to account.id into var accId
function getTotalNumberOfBorrows({id: accId}, books) {
  // using .reduce on books with two var
  // sum is the count will increase on match start at 0
  // {borrows} is destructure books.borrows check if borrow.id match  accId
  return books.reduce((sum, {borrows}) =>{
    return sum + borrows.filter(({id}) =>  id === accId).length
  }, 0)
}

// should return an array with book obj and author of the book checkout
function getBooksPossessedByAccount({id}, books, authors) {
  return books.reduce((acc, book) => {
    // if borrows[0].id match account.id
    if (book.borrows[0].id == id)
      acc.push({
        ...book, // spreading book object
        author: authors.find(({id}) => book.authorId === id)
      });
    return acc
  }, [])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
