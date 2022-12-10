# Initialize and declare string
a = '\nway to initialize and declare string'
b = "\nanother way to i and d string"
c = '''\na way to
'declare' and "initialize"
multiline string'''

# use single and double quotes in string
d = "\nUse single quote(' ') in double "
e = 'Use double quote in (" ") in single'
f = "Using escape \'sequence\" character\n"

print(a)
print(b)
print(c)
print(d)
print(e)
print(f)

# In python, string is like an array of characters
name = "Pushkar Dangi"
print(name[0] + name[1] + name[2], name[3], name[4])

# for loop to print string char by char
for character in name:
    print(character)

print("size of string : ",len(name))
