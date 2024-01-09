while True:
    input_text = input()
    if input_text == '.':
        break

    stack = []
    result = True
    for char in input_text:
        if char in '([':
            stack.append(char)
        elif char in ')]':
            if not stack:
                result = False
                break
            if char == ')' and stack[-1] != '(':
                result = False
                break
            if char == ']' and stack[-1] != '[':
                result = False
                break
            stack.pop()
    if not stack and result:
        print("yes")
    else:
        print("no")