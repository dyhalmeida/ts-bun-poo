// Definição da classe Pen (Caneta)
export class Pen {
  // Propriedades da caneta
  model?: string   // Modelo da caneta
  color?: string   // Cor da caneta
  tip?: number      // Tipo da ponta da caneta
  charge?: number   // Carga da caneta
  capped?: boolean  // Indica se a caneta está tampada

  // Método para rabiscar
  scribble(): void {
    // Verifica se a caneta está tampada
    if (this.capped) {
      console.error('A caneta está tampada')
      return;
    }
    console.log('Rabiscando...')
  }

  // Método para tampar a caneta
  cover(): void {
    console.log('Tampando a caneta...')
    this.capped = true
  }

  // Método para destampar a caneta
  uncover(): void {
    console.log('Destampando a caneta...')
    this.capped = false
  }

  // Método para exibir o estado atual da caneta
  state() {
    console.log('Estado:', {
      model: this.model,
      color: this.color,
      tip: this.tip,
      charge: this.charge,
      capped: this.capped
    })
  }
}