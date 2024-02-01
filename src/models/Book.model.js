class Book{
    constructor(autor, data, genero){
        this.id = Math.random() * (100 - 1) + 1;
        this.autor = autor;
        this.data = data;
        this.genero = genero;
        this.created_at = new Date();
    }
}

export { Book }