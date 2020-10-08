function notBanned(users, blackListed) {
    return users.filter(a => !blackListed.some( b => b === a)); 
} 

const usuarios = ["Wei", "Jesus", "Manel",  "Miquel"];

const baneados = ["Jesus", "Miquel"];

console.log(notBanned(usuarios, baneados));

