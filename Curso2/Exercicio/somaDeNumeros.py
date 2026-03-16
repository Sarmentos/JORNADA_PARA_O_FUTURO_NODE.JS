'''
Soma de números de uma lista

Crie um programa que receba uma lista de números e retorne a soma total.
'''

def receber():
    entrada = input('Digite os itens separados por espaço: ')
    
    lista = list(map(int, entrada.split()))
    total = sum(lista)

    print(f'A lista inserida é : {lista}')
    print(f'A soma total é : {total}')

receber()  