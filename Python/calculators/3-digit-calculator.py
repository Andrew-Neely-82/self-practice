# Advanced Calculator Example

#### Calculator Code +-*/ up to 3 numbers! ####

print("-------------------------------------------------------------------------------------------------------")
print("")
print("===============================")
print("Andrew's Python Calculator!")
print("  -Use up to 3 sets of numbers!")
print("===============================")
print("")

## Variables ##
num1 = float(input("Enter first number: "))
op1 = input("Enter +, -, *, / : ")
num2 = float(input("Enter a second number: "))
op2 = input("Enter +, -, *, / or press enter to leave blank: ")
num3 = float(input("Enter a third number, or 0 if none: "))


### Operator conditions ###

## Same Sets for 2 or 3 numbers ##

# Same + & - sets for 2 numbers
if op1 == "+" and op2 == "":
    print(num1 + num2)
elif op1 == "-" and op2 == "":
    print(num1 - num2)

# Same + & - sets for 3 numbers
if op1 == "+" and op2 == "+":
    print(num1 + num2 + num3)
elif op1 == "-" and op2 == "-":
    print(num1 - num2 - num3)

# Same * & / sets for 2 numbers
if op1 == "*" and op2 == "":
    print(num1 * num2)
elif op1 == "/" and op2 == "":
    print(num1 / num2)

# Same * & / sets for 3 numbers
if op1 == "*" and op2 == "*":
    print(num1 * num2 * num3)
elif op1 == "/" and op2 == "/":
    print(num1 / num2 / num3)


## Different Sets for 3 numbers ##

# Different +/- & +/- set 1
if op1 == "+" and op2 == "-":
    print(num1 + num2 - num3)
if op1 == "-" and op2 == "+":
    print(num1 - num2 + num3)

# Different +/- and *
if op1 == "+" and op2 == "*":
    print(num1 + num2 * num3)
elif op1 == "-" and op2 == "*":
    print(num1 - num2 * num3)

# Different * and +/-
if op1 == "*" and op2 == "+":
    print(num1 * num2 + num3)
elif op1 == "*" and op2 == "-":
    print(num1 * num2 - num3)

# Different / and +/-
if op1 == "/" and op2 == "+":
    print(num1 / num2 + num3)
elif op1 == "/" and op2 == "-":
    print(num1 / num2 - num3)

# Different +/- and /
if op1 == "+" and op2 == "/":
    print(num1 + num2 / num3)
elif op1 == "-" and op2 == "/":
    print(num1 - num2 / num3)

# Different *&/ & &%/ sets
if op1 == "*" and op2 == "/":
    print(num1 * num2 / num3)
elif op1 == "/" and op2 == "*":
    print(num1 / num2 * num3)


### End of calculator Code ###
