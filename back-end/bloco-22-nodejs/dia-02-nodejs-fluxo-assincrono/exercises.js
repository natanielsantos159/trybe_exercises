// exercicio 1
const multiplicador = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    if (![num1, num2, num3].every((num) => typeof num === "number")) {
      reject("Informe apenas números");
    }

    const sum = (num1 + num2) * num3;
    if (sum < 50) reject ("Valor muito baixo")
    if (sum > 50) resolve(sum)
  });
};
