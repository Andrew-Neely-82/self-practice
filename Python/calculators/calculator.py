print("Welcome to the calculator program!")
print("Enter two numbers and an operator to perform the calculation.")
print("For example: 2 + 2")
print("The operators are +, -, *, /")
print("Enter 'q' to quit.")


## Variables
num1 = float(input("Enter first number: "))
op1 = input("Enter operator +, -, *, /: ")
num2 = float(input("Enter second number: "))

## conditional statements
if op1 == "+":
    print(num1 + num2)
elif op1 == "-":
    print(num1 - num2)
elif op1 == "*":
    print(num1 * num2)
elif op1 == "/":
    print(num1 / num2)
else:
    print("Invalid operator")

## End of program
    