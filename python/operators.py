# taking inputs from the user
int_a = input("Enter value of a : ")
int_b = input("Enter value of b : ")

# type casting (str -> int)
int_a = int(int_a)
int_b = int(int_b)

# all arithmetic operations
print("\nAddition of",int_a,"and",int_b,":        ",int_a + int_b)
print("Subtraction of",int_a,"and",int_b,":     ",int_a - int_b)
print("Multiplication of",int_a,"and",int_b,":  ",int_a * int_b)
print("Division of",int_a,"and",int_b,":        ",int_a / int_b)
print("Floor Division of",int_a,"and",int_b,":  ",int_a // int_b)
print("Modulus of",int_a,"and",int_b,":         ",int_a % int_b)
print("Exponent of",int_a,"and",int_b,":        ",int_a ** int_b)