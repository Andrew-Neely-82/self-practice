n1 = 100
n2 = 10
nr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# add two numbers

def add(a, b):
    if type(a) == int and type(b) == int:
        print("")
        print(float(a) + float(b))
    else:
        print("Invalid input")

add(n1, n2)

# subtract two numbers

def subtract(a, b):
    if type(a) == int and type (b) == int:
        print("")
        print(float(a) - float(b))
    else: print("Invalid input")

subtract(n1, n2)

# multiply two numbers

def multiply(a, b):
    if type(a) == int and type(b) == int:
        print("")
        print(float(a) * float(b))
    else:
        print("Invalid input")

multiply(n1, n2)

# divide two numbers

def divide(a, b):
    if type(a) == int and type(b) == int:
        print("")
        print(float(a) / float(b))
        print("")
    else: 
        print("Invalid input")

divide(n1, n2)

# even numbers with modulo

def evenNumbers(x):
    if x % 2 == 0:
        print("even")
    else:
        print("not even")

evenNumbers(1)
evenNumbers(2)
evenNumbers(3)
evenNumbers(4)
print("")

# odd numbers with modulo

def oddNumbers(x):
    if x % 2 != 0:
        print("odd")
    else:
        print("not odd")

oddNumbers(1)
oddNumbers(2)
oddNumbers(3)
oddNumbers(4)
print("")