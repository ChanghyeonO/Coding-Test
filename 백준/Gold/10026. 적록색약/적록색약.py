from collections import deque

def input_grid(n):
    return [input().strip() for _ in range(n)]

def bfs(grid, n, color_dict):
    visited = [[False] * n for _ in range(n)]
    q = deque()
    region_count = 0

    for i in range(n):
        for j in range(n):
            if not visited[i][j]:
                q.append((i, j))
                region_count += 1

                while q:
                    x, y = q.popleft()
                    if visited[x][y]:
                        continue
                    visited[x][y] = True

                    for dx, dy in [(1, 0), (0, 1), (-1, 0), (0, -1)]:
                        nx, ny = x + dx, y + dy
                        if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny]:
                            if color_dict[grid[nx][ny]] == color_dict[grid[x][y]]:
                                q.append((nx, ny))
    return region_count

n = int(input())
grid = input_grid(n)

normal_color_dict = {'R': 1, 'G': 2, 'B': 3}
color_blind_dict = {'R': 1, 'G': 1, 'B': 3}

normal_count = bfs(grid, n, normal_color_dict)
color_blind_count = bfs(grid, n, color_blind_dict)

print(normal_count, color_blind_count)