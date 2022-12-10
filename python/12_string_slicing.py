names = "Pushkar Dangi"

# length of a string
print(len(names))

# string slicing
print("1.",names[0:8])     # index 8 is excluded
print("2.",names[:8])
print("3.",names[1:8])
print("4.",names[0:-8])
# or
print("5.",names[0:len(names)-8])

# Exercise
alphabets = "\nabcde"
for i in alphabets:
    print(i)
print("\n")

# Exercise
name = "Harry"
print(name[-4:-2])