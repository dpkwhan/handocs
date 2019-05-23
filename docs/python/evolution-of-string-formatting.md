# Evolution of String Formatting

<span style="display:block;text-align:right">May 22, 2019</span>

## Introduction

String formatting is one of the basic features provided by any programming language. Python offers a few different options on how to format a string.

## Old Style: %-formatting

``` python
# Variable is string
first_name = 'David'
last_name = 'Han'
print('My name is %s %s' % (first_name, last_name))
print('My name is %(first_name)s %(last_name)s' % locals())

# Variable is integer
age = 30
print('I am %d years old' % (age))

# Variable is float
pi = 3.1415926
print('Pi with 3 decimals is %.3f' % (pi))
```

## New Style: str.format()

``` python
# Variable is string
first_name = 'David'
last_name = 'Han'
print('My name is {first_name} {last_name}'.format(**locals()))

# Variable is integer
age = 30
print('I am {age} years old'.format(**locals()))

# Variable is float
pi = 3.1415926
print('Pi with 3 decimals is {:.3f}'.format(pi))
```

## Latest Style: f-string

f-string is introduced in Python 3.6.

``` python
# Variable is string
first_name = 'David'
last_name = 'Han'
print(f'My name is {first_name} {last_name}')

# Variable is integer
age = 30
print(f'I am {age} years old')

# Variable is float
pi = 3.1415926
print(f'Pi with 3 decimals is {pi:.4}')
```

For additional details on f-string, see [here][f-string]. 

## Summary

As we can see from above, the latest f-string formatting style is dramatically easier to use and understand. Two excellent articles about Python formatting are:

- [Python 3's f-Strings: An Improved String Formatting Syntax](https://realpython.com/python-f-strings/)
- [Using % and .format() for great good!](https://pyformat.info/)

[f-string]: https://docs.python.org/3/reference/lexical_analysis.html#formatted-string-literals