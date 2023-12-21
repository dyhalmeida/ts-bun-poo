import { Author } from "./Author";
import { Post } from "./Post";

const author = new Author({
  name: 'Diego Almeida',
  email: 'dyhalmeida@gmail.com',
  biography: 'Desenvolvedor de software e amante da tecnologia, escrevo artigos sobre o ecosistema Javascript nas horas vagas'
})

const post = new Post({
  date: new Date(),
  title: 'Programação Orientada a Objetos: Relacionamento entre classes',
  content: `
    O relacionamento entre classes é crucial na POO para modelar interações e dependências entre objetos.
    Esses relacionamento podem ser de dependência, associação, composição ou agregação, dependendo da natureza da interação.

    A agregação é um tipo de associação entre classes onde uma classe é composta por uma ou mais instância de outra classe, mas
    a relação não é tão forte quanto na composição.
    A existência da classe agregada não depende da classe principal.
  `
})

post.setAuthor(author)
console.log(post.getAuthor()?.getBiography())
console.log(post.getContent())
