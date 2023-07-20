import random

def jogo_100_portas():
    numero_casa_banho = random.randint(1, 100)

    tentativas = 0

    while True:
        porta_escolhida = int(input("Escolha um número de porta (1 a 100): "))

        if porta_escolhida == numero_casa_banho:
            tentativas += 1
            print("Parabéns, acertou na porta da casa de banho em", tentativas, "tentativa(s)!")
            if tentativas == 1:
                print("Génio!")
            elif tentativas <= 4:
                print("Bom desempenho!")
            else:
                print("Desempenho razoável.")
            break

        tentativas += 1
        if porta_escolhida < numero_casa_banho:
            print("O número certo é mais alto.")
        else:
            print("O número certo é mais baixo.")

        if tentativas >= 10:
            print("Excedeu o limite de tentativas. Tente novamente.")
            break

    if tentativas >= 10:
        print("Não aguentaste... tens de trocar de roupa...")
