# Funcion para sumar (2 num)
# num1 = number
# num2 = number
# return => number
def add(num1, num2):
    res = num1 + num2
    return res
def subtract(num1, num2):
    res = num1 - num2
    return res
def multiply(num1, num2):
    res = num1 * num2
    return res
def split(num1, num2):
    res = num1 / num2
    return res
def menu():
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Split")
    opcion = input("==> ")
    return opcion

print("Welcome!")
number_1 = float(input("Enter the first number to operate: "))

# function call
# Function(paramete, parameter)

while True:
    op = menu()
    number_2 = float(input("Enter the new number: "))
    if op == "1":
        result = add(number_1, number_2)
    elif op == "2":
        result = subtract (number_1, number_2)
    elif op == "3":
        result = multiply(number_1, number_2)
    elif op == "4":
        result = split (number_1, number_2)
    print("Outcome:", result)

    number_1 = result

    stay = input("Continue the operation? (y/n) ")
    if stay == "n":
        print("Goodbye!")
        break