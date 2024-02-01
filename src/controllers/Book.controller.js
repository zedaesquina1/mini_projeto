import { Book } from "../models/Book.model.js"


let books = []
const procurityBook = (autor, data, genero) => {
   let book = new Book(autor, data, genero);
   books.push(book);
   return book;
}

const getAllBooks = () => {
    return books;
}   

const getBookByAutor = (autor) => {
    const filteredBooks = books.filter(book => book.autor === autor);

    if (filteredBooks.length > 0) {
        return filteredBooks;
    } else {
        console.log(`Nenhum livro encontrado para o autor ${autor}.`);
        return null;
    }
}

const getBookByGenero = (genero) => {
    const filteredBooks = books.filter(book => book.genero === genero);

    if (filteredBooks.length > 0) {
        return filteredBooks;
    } else {
        console.log(`Nenhum livro encontrado para o gênero ${genero}.`);
        return null;
    }
};

export { procurityBook, getAllBooks, getBookByAutor, getBookByGenero };