'''
Crie um programa que receba um número inteiro e diga se ele é par ou ímpar.
'''

def validador_impar_ou_par():
    numero = int(input("Digite um nomero inteiro: "))
    validador = numero % 2 != 0
    if validador == True:
        print(f'O numero : {numero} é ÍMPAR')
    else:
        print(f'O numero : {numero} é PAR')


validador_impar_ou_par()