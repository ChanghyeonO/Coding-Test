def binary_search(trees, target, left, right):
    while left <= right:
        mid = (left + right) // 2
        need = sum(tree - mid for tree in trees if tree > mid)

        if need < target: 
            right = mid - 1
        elif need > target:
            left = mid + 1
        else:  
            return mid
    return right  


n, m = map(int, input().split()) 
trees = list(map(int, input().split()))  

result = binary_search(trees, m, 0, max(trees))
print(result)
