// Importa a classe Pen do arquivo "./class/Pen"
import { Pen } from "./class/Pen"

// Cria uma instância da classe Pen chamada pen1
const pen1 = new Pen()

// Define as propriedades da caneta pen1
pen1.model = 'Bic',
pen1.tip = 0.6
pen1.color = 'Azul'
pen1.charge = 90
pen1.capped = false

// Exibe o estado atual da caneta pen1
pen1.state()

// Faz a caneta pen1 rabiscar
pen1.scribble()

// Tapa a caneta pen1
pen1.cover()

// Tenta fazer a caneta pen1 rabiscar novamente (mas está tampada, então exibe um erro)
pen1.scribble()

// Exibe o estado atual da caneta pen1
pen1.state()

// Cria uma segunda instância da classe Pen chamada pen2
const pen2 = new Pen()

// Define as propriedades da caneta pen2
pen2.model = 'Bic',
pen2.tip = 0.5
pen2.color = 'Preta'
pen2.charge = 100
pen2.capped = true

// Exibe o estado atual da caneta pen2
pen2.state()

// Tenta fazer a caneta pen2 rabiscar (mas está tampada, então exibe um erro)
pen2.scribble()

// Destampa a caneta pen2
pen2.uncover()

// Faz a caneta pen2 rabiscar novamente (agora que está destampada)
pen2.scribble()

// Exibe o estado atual da caneta pen2
pen2.state()