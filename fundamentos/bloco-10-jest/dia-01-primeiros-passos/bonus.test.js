const searchEmployee = require("./bonus")


describe('searchEmployee', () => {
  it('Testa se a função existe', () => {
    expect(typeof searchEmployee).toBe('function');
  })
  it('Testa se for passado id e um detail existente, retorna o esperado', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    expect(searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
    expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
  });
  it('Testa se retorna um erro caso seja passado um ID não existente', () => {
    expect(() => {searchEmployee('38439', 'firstName')}).toThrowError("ID não identificada")
  })
  it('Testa se retorna um erro caso seja passado um detail não existente', () => {
    expect(() => {searchEmployee('4678-2', 'special')}).toThrowError("Informação indisponível")
  })
})