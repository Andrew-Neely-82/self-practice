# Print the sum of the current number and the previous number

print("")

prevNum = 0

for x in range(1, 11):
    sum = prevNum + x
    print("loop number ", x, " + last loop number ", prevNum, " = ", sum)
    prevNum = x

print("")
