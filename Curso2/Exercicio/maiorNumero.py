'''
Receba uma lista de números e retorne o maior número.
'''

def receber():
    entrada = input('Digite os itens separados por espaço: ')
    
    lista = list(map(int, entrada.split()))
    total = max(lista)

    print(f'A lista inserida é : {lista}')
    print(f'O maximo é : {total}')

receber()  