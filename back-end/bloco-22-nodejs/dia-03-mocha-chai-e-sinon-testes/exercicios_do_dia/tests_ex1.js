const { expect } = require("chai");

describe("Função positivoOuNegativo", () => {
  describe("quando recebe o valor esperado", () => {

    it('deve retornar "positivo" caso receba um numero maior que 0', () => {
      expect(positivoOuNegativo(3)).to.be.equal("positivo");
    });

    it('deve retornar "negativo" caso receba um numero menor que 0', () => {
      expect(positivoOuNegativo(-6)).to.be.equal("negativo");
    });

    it('deve retornar "neutro" caso receba um numero igual 0', () => {
      expect(positivoOuNegativo(0)).to.be.equal("neutro");
    });
  });
});
