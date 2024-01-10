N = int(input())
M = int(input())
C = [[] for _ in range(N+1)]
visited = [0] * (N+1)

for _ in range(M):
    a, b = map(int, input().split())
    C[a].append(b)
    C[b].append(a)
    C[a].sort()

def dfs(value):
    visited[value] = 1
    
    for i in C[value]:
        if visited[i]==0:
            dfs(i)
    return

dfs(1)

print(sum(visited)-1)