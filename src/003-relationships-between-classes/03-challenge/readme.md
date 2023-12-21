Gerenciamento de Escola:
Crie classes para representar uma Escola e uma Turma.
Estabeleça uma relação de Agregação entre a Escola e a Turma, indicando que uma Escola tem 1 ou mais Turmas.
Implemente métodos para adicionar turmas a uma escola e para exibir os detalhes das turmas de uma escola.

Classe Escola:
---------------------------
Atributos:
---------------------------
Nome da escola
Endereço da escola
Lista de turmas (relacionamento de Agregação)
---------------------------
Comportamentos (Métodos):
---------------------------
Construtor para inicializar a escola com nome e endereço.
Método para adicionar uma turma à lista de turmas.
Método para obter a lista de turmas da escola.


Classe Turma:
---------------------------
Atributos:
---------------------------
Nome da turma
Lista de alunos
---------------------------
Comportamentos (Métodos):
---------------------------
Construtor para inicializar a turma com um nome.
Método para adicionar um aluno à lista de alunos.
Método para obter a lista de alunos da turma.