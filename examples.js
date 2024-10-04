let ex1 = `
print("Hello World!")
`
let ex2 = `

#Variaveis de tipo texto exemplificando.

tipoString = "Ola mundo"

#Tipo inteiro, numeros que não tem ponto flutuante.

tipoInt = 10

#Tipo float, que tem ponto flutuante.

tipoFloat = 10.5

#Tipo boolean, classico verdadeiro ou falso.

verdade = True
falso = False

#Vendo o resultado...
print(tipoString)
print(tipoInt)
print(tipoFloat)
print(verdade)
print(falso)
`
let ex3 = `
#Operadores, podemos realizar operações matematicas com eles.

print(2 + 2)
print(2 - 2)
print(4 / 2)
print(2 * 2)
print(2 ** 2) # 2 elevado ao quadrado

#Faça exercios com operadores, pois são muito importantes!
`
let ex4 = `
#Estrutura codicional e como se fosse caminhos que o programa pode seguir

#Nesse caso vai ser False, 2 não e maior que 2.
if 2 > 2:
    print("E maior!")
else:
    print("Não e maior!")

#Mudamos o operador, agora vai ser True, 2 nãe e maior que 2, Porem, são iguais.
if 2 >= 2:
  print("E maior!")
else:
  print("Não e maior!")
`
let ex5 = `
#Funções, e uma maneira de executar um determinado bloco de codigo e um momento decidido pelo programador.

# A palavra resevada para se declara uma funcao e o "def"

def minhaFuncao():
    print("Isso e uma função em python.")

#Apos isso e so chamar a função

minhaFuncao()
`
let ex6 = `
#Estrutura de repeticao for e listas

#Uma lista com determinado produtos

lista = ["Arroz", "Feijao", "Macarrao", "Oleo"]

#chamar um determinado ingrediente por indice

print(lista[0]) #Arroz. o indice comeca de 0!

#Percorrendo uma lista
for comprados in lista:
   print("Eu comprei " + comprados)
`