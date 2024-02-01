import { Router } from "express";
import { procurityBook, getAllBooks } from "../controllers/book.controller.js"
const bookRouter = Router();

bookRouter.post("/book", (req, res) => {   
    const {autor, data, genero} = req.body
    const newBook = procurityBook(autor, data, genero)
    res.json({mensagem:"seu livro foi cadastrado", novolivro:newBook})
})

bookRouter.get("/allBooks", (req, res) => {
    const listBook = getAllBooks()
    res.json({listBook})
})

bookRouter.get("/bookByAutor", (req, res) => {
    const { autor } = req.body;

    if (autor) {
        const booksByAutor = getBookByAutor(autor);
        if (booksByAutor.length > 0) {
            res.json({ booksByAutor });
        } else {
            res.json({ mensagem: `Nenhum livro encontrado para o autor ${autor}.` });
        }
    } else {
        res.status(400).json({ mensagem: "Autor não fornecido na solicitação." });
    }
});

bookRouter.get("/bookByGenero", (req, res) => {
    const genero = req.body.genero; // Certifique-se de extrair o gênero corretamente do corpo da solicitação
    if (genero) {
        const booksByGenero = getBookByGenero(genero);
        res.json({ booksByGenero });
    } else {
        res.status(400).json({ mensagem: "Gênero não fornecido na solicitação." });
    }
});


export { bookRouter  }