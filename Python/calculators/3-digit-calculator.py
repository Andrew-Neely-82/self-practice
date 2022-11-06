print("")
print("")
print("Welcome to the calculator program!")
print("Enter three numbers and an operator to perform the calculation.")
print("For example: 2 + 2")
print("The operators are +, -, *, /")
print("")
print("")

# Variables
num1 = float(input("Enter first number: "))
op1 = input("Enter operator +, -, *, /: ")
num2 = float(input("Enter second number: "))
op2 = input("Enter operator +, -, *, /: ")
num3 = float(input("Enter third number: "))

# conditional statements
if op1 == "+":
    num1 = num1 + num2
elif op1 == "-":
    num1 = num1 - num2
elif op1 == "*":
    num1 = num1 * num2
elif op1 == "/":
    num1 = num1 / num2
else:
    print("Invalid operator")

if op2 == "+":
    print(num1 + num3)
elif op2 == "-":
    print(num1 - num3)
elif op2 == "*":
    print(num1 * num3)
elif op2 == "/":
    print(num1 / num3)
else:
    print("Invalid operator")

# End of program
