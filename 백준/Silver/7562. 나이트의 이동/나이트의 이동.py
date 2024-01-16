import sys
input = sys.stdin.readline

def find_minimum_moves():
    dx = [1, 2, 2, 1, -1, -2, -2, -1]
    dy = [-2, -1, 1, 2, 2, 1, -1, -2]

    I = int(input())
    board = [[0 for _ in range(I)] for _ in range(I)]
    st_x, st_y = map(int, input().split())
    ed_x, ed_y = map(int, input().split())

    if st_x == ed_x and st_y == ed_y:
        return 0

    bfs = [(st_y, st_x)]
    while bfs:
        buf = []
        for y, x in bfs:
            for i in range(8):
                nx, ny = x + dx[i], y + dy[i]
                if 0 <= nx < I and 0 <= ny < I and board[ny][nx] == 0:
                    board[ny][nx] = board[y][x] + 1
                    buf.append((ny, nx))
                    if nx == ed_x and ny == ed_y:
                        return board[ny][nx]
        bfs = buf

T = int(input())
for _ in range(T):
    print(find_minimum_moves())

