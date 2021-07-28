/* Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
Para os próximos exercícios copie o código abaixo.
 */
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
/* 
1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
 */

const getDragonDamage = () => {
  const damage = Math.floor(Math.random() * (dagron.strength - 15 + 1)) + 15
  return damage
}
/* 
2 - Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */

const getWarriorDamage = () => {
  const damage =  Math.floor(Math.random() * (warror.strength - (warror.strength * warrior.weaponDmg) + 1)) + warror.strength
  return damage
}

const getMageDamageAndMana = () => {
  let damage, mana;
  if(mage.mana < 15){
    damage = 'Não possui mana suficiente' 
    mana = 0;
  } else {
    damage = Math.floor(Math.random() * (mage.strength - (mage.intelligence * 2) + 1)) + mage.strength
    mana = 15
  }

  return damage, mana;
}