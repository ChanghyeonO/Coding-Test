N = int(input())
sum = 0
result = 0

time = list(map(int, input().split()))

time.sort()

for i in range(N):
    sum += time[i]
    result += sum

print(result)