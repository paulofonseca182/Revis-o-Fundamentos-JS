const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

const livro = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}`

const novoLivro = {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}

reader.favoriteBooks.push(novoLivro)


const qntLivros = reader.favoriteBooks.length
const fraseReq3 = `${reader.name} tem ${qntLivros} livros favoritos.`

/* Saida Req 1 */
console.log(`Req - 1: ${livro}`);


/* Saida Req 2 */
console.log('Req - 2:');
console.log(reader.favoriteBooks);

/* Saida Req 3 */
console.log(`Req - 3: ${fraseReq3}`);