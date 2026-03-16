'''
splite e join com list e str 
split - divide uma string 
join -  une uma string 
'''

frase = '     Olha só que   ,         coisa interessante        '

lista_frases_cruas = frase.split(', ')

lista_palavras = []

for i, frase in enumerate(lista_frases_cruas):
    lista_palavras.append( lista_frases_cruas[i].strip())

print(lista_frases_cruas)
print(lista_palavras)

frases_unidas = '-'.join(lista_palavras)
print(frases_unidas)