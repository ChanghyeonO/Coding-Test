n, m = map(int,input().split())
cards = list(map(int, input().split()))

for i in range(m):
    cards.sort()
    sum_val = cards[0] + cards[1]

    cards[0] = sum_val
    cards[1] = sum_val

result = sum(cards)

print(result)