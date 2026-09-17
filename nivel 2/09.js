const usuario = {
  nome: "Pedro",
  idade: 20,
  email: "pedro@email.com",
  cidade: "São Paulo"
};
const { nome: nomeUsuario, email } = usuario;
console.log(`${nomeUsuario} - ${email}`);