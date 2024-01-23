N, M = map(int, input().split())
book_positions = list(map(int, input().split()))

positive = sorted([x for x in book_positions if x > 0], reverse=True)
negative = sorted([-x for x in book_positions if x < 0], reverse=True)

steps = 0
for i in range(0, len(positive), M):
    steps += positive[i] * 2

for i in range(0, len(negative), M):
    steps += negative[i] * 2

if positive and negative:
    steps -= max(positive[0], negative[0])
elif positive:
    steps -= positive[0]
elif negative:
    steps -= negative[0]

print(steps)