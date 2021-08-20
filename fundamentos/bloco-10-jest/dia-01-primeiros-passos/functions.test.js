const { sum } = require('./functions')

describe('A função sum(a, b) deve retornar a soma do parâmetro a com o b', () => {

  it('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9)
  })

  it('Testa se o retorno de sum sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0)
  })

  it('Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum (4, '5')}).toThrowError(new Error('parameters must be numbers'))
  })
})