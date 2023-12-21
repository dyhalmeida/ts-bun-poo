Crie uma classe Lutador com as seguintes características:
nome, nacionalidade, idade, altura, peso, categoria, número de vitórias, número de derrotas e número de empate.
Crie alguns comportamentos como (se apresentar), (status resumido), ganhar luta, perder luta e empatar luta.
No construtor, defina a categoria do lutador com base no seu peso, sendo que peso leve é um lutador com peso maior que 52.2 e mnenor ou igual a 70.3
Já um lutador da categoria peso médio, seu peso deve ser maior que 70.3 e menor ou igual a 83.9 e o peso pesado deve ser maior que 83.9 e menor ou igual a 120.2, qualquer valor diferente desse range é considerado uma categoria inválida.

Crie também uma classe Luta que possui as seguintes caracteristicas:
rounds, luta aprovada, lutador 1 e lutador 2. Crie dois comportamentos,
agendar luta, nesse agendamento deve-se verificar se os lutadores são da mesma categoria e que o lutador não pode lutar com ele mesmo e com base nisso, aprovar a luta.
O outro comportamento é lutar, que coloca os dois lutadores para lutar e define se foi empate, vitoria ou derrota e com base nisso, altera o estado dos
lutadores. Lembre-se de verificar se a luta foi aprovada para que possa ser iniciada.