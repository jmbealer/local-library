// helper function
const _getTotalCount = arr => arr.length;

const getTotalBooksCount = books => _getTotalCount(books);
// function getTotalBooksCount(books) {
  // return books.length
// }

const getTotalAccountsCount = accounts => _getTotalCount(accounts);
// function getTotalAccountsCount(accounts) {
  // return accounts.length
// }

function getBooksBorrowedCount(books) {
  // .reduce: set up count and iterator
  return books.reduce((count, book) => {
    // checking if book returned or not: count increase
    !book.borrows[0].returned ? count++ : null;
    // return the count and repeat on all books
    return count;
  }, 0);
}

// helper function for sorting and limiting array
const _sortFive = arr => { 
  arr.sort((elem0, elem1) =>{
    return elem1.count - elem0.count;
  })
  return arr.slice(0, 5)
}

function getMostCommonGenres(books) {
  // .reduce: to loop and add objects to the empty array
  const mostComGenres = books.reduce((genres, book) => {
    // .find to check if current genre name match
    const genObj = genres.find(curGenre => curGenre.name === book.genre);
    // check genObj exist if not push book.genre and count
    !genObj ? genres.push({
      name: book.genre,
      count: 1,
      // if it does add one to count
    }) : genObj.count++;
    return genres;
  }, []);
  return _sortFive(mostComGenres);
}

function getMostPopularBooks(books) {
  const mostPopBooks = books.map(book => {
    // returns obj name with book.title , count with book.borrows.length
    return {name: book.title, count: book.borrows.length}
  });
  // using help func on mostPopBooks
  return _sortFive(mostPopBooks);
}

function getMostPopularAuthors(books, authors) {
  const mostPopAuthors = authors.map(author => {
    // using string temp to make the authorName
    const authorName = `${author.name.first} ${author.name.last}`;
    // .filter books by author id
    const authorBooks = books.filter(book => book.authorId === author.id);
    // .reduce kept total authorBooks that been borrowed
    const borrows = authorBooks.reduce((total, book) => total + book.borrows.length, 0);
    // storing data
    const authorsInfo = {
      name: authorName,
      count: borrows,
    };
    // returning data
    return authorsInfo;
  })
  // using helper func on mostPopAuthors return
  return _sortFive(mostPopAuthors);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
