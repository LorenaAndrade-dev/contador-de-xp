// Função para determinar o nível do herói 
function determinarNivelHeroi(nome, xp) 
    { let nivel; if (xp < 1000) { nivel = "Ferro"; } 
                else if (xp >= 1001 && xp <= 2000) { nivel = "Bronze"; } 
                else if (xp >= 2001 && xp <= 5000) { nivel = "Prata"; }
                else if (xp >= 5001 && xp <= 7000) { nivel = "Ouro"; }
                else if (xp >= 7001 && xp <= 8000) { nivel = "Platina"; }
                else if (xp >= 8001 && xp <= 9000) { nivel = "Ascendente"; } 
                else if (xp >= 9001 && xp <= 10000) { nivel = "Imortal"; } 
                else if (xp >= 10001) { nivel = "Radiante"; } else { nivel = "Desconhecido"; } 
  return `O Herói de nome **${nome}** está no nível de **${nivel}**`; } 
  
  //   Exemplo de uso
 const herois = [ { nome: "Arthur", xp: 850 }, { nome: "Morgana", xp: 1500 }, { nome: "Lancelot", xp: 6000 }, { nome: "Guinevere", xp: 11000 } ];
 
 herois.forEach(heroi => { console.log(determinarNivelHeroi(heroi.nome, heroi.xp))});