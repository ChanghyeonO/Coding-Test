import sys
input = sys.stdin.readline

def calculate_knight_moves():
    dx = [1, 2, 2, 1, -1, -2, -2, -1]
    dy = [-2, -1, 1, 2, 2, 1, -1, -2]

    board_size = int(input())
    board = [[0 for _ in range(board_size)] for _ in range(board_size)]
    start_x, start_y = map(int, input().split())
    end_x, end_y = map(int, input().split())

    if start_x == end_x and start_y == end_y:
        return 0

    queue = [(start_y, start_x)]
    while queue:
        current_y, current_x = queue.pop(0)
        for i in range(8):
            next_x, next_y = current_x + dx[i], current_y + dy[i]
            if 0 <= next_x < board_size and 0 <= next_y < board_size and board[next_y][next_x] == 0:
                board[next_y][next_x] = board[current_y][current_x] + 1
                queue.append((next_y, next_x))
                if next_x == end_x and next_y == end_y:
                    return board[next_y][next_x]

test_cases = int(input())
for _ in range(test_cases):
    print(calculate_knight_moves())


