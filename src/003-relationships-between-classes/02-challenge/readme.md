Relacionamento em um Blog:
Crie classes para representar um Post e um Autor.
Estabeleça uma relação de Agregação entre o Post e o Autor, indicando que um Post tem 1 Autor.
Implemente métodos para adicionar um autor a um post e para exibir os detalhes do autor de um post.

Classe Autor:
------------------
Atributos:
------------------
Nome do autor
Email do autor
Biografia ou breve descrição
------------------
Comportamentos (Métodos):
------------------
Construtor para inicializar o autor com nome, email e biografia.
Métodos getters para obter informações do autor (nome, email, biografia).


Classe Post:
------------------
Atributos:
------------------
Título do post
Conteúdo do post
Data de publicação
Autor do post (relacionamento de Agregação)
------------------
Comportamentos (Métodos):
------------------
Construtor para inicializar o post com título, conteúdo, data de publicação e autor.
Métodos getters para obter informações do post (título, conteúdo, data de publicação).
Método para associar um autor ao post.