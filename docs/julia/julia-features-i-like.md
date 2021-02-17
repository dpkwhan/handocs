# Julia Features I like

I summarize a few features I like, especially compared with Python.

## Parameter passing
The in-place modifiction to mutable parameters passed to a function is quite common in many programming languranges and this is a frequent source of bugs. Users do not know this until you read the documentation carefully. 

Julia has a convention to distinguish functions with copying or modifying parameters by appending ``!`` to the function name with parameters modified.


**Copying Version:**

``` julia
julia> v = [3, 1, 2];

julia> sort(v)
3-element Array{Int64,1}:
 1
 2
 3

julia> v
3-element Array{Int64,1}:
 3
 1
 2
```

**Modifying Version:**

``` julia
julia> v = [3, 1, 2]; sort!(v); v
3-element Array{Int64,1}:
 1
 2
 3
```

## Duck typing
If you do not know what duck typing is, [here](https://en.wikipedia.org/wiki/Duck_typing) is a quick review. Duck typing is associated with dynamic typing, in contrast with static typing languranges like Java and C++.

Both Python and Julia support duck typing, but Julia is superior to Python because of it is strong typed.


## String interpolation
**Julia:**

```julia
julia> whom = "David";
julia> "Hello, $whom.\n"
"Hello, David.\n"

julia> "1 + 2 = $(1 + 2)"
"1 + 2 = 3"
```

**Python:**

```python
>>> whom = "David"
>>> f"Hello, {whom}.\n"
'Hello, David.\n'

>>> f"1 + 2 = {1 + 2}"
'1 + 2 = 3'
```


## Triple quoted string literal
Below is a simple example for Julia and Python. Note the difference in newline and indentation.

**Julia:**

```julia
julia> str = """
           Hello,
           world.
         """
"  Hello,\n  world.\n"
```

**Python:**

```python
>>> str = """
           Hello,
           world.
         """
>>> str
'\n           Hello,\n           world.\n         '
```

Two noticable differences I like Julia better than Python:

- First, triple-quoted strings are dedented to the level of the least-indented line. This is useful for defining strings within code that is indented. So basically you can use the closing triple quote to determine how many spaces to indent.
- Second, if the opening triple quote is followed by a newline, the newline is stripped from the resulting string.


## Mathematical expression

**Julia:**

```julia
julia> x = 5; 2x
10
```

**Python:**

```python
>>> x = 5
>>> 2*x
10
```


## Math function
**Julia:**

```julia
julia> f(x) = 2x; f(5)
10
```

**Python:**

```python
>>> def f(x):
        return 2*x
>>> f(5)
10
```

Creators of Julia must be mathematicians!


## Ternary operator
**Julia:**

```julia
julia> x < y ? "less than" : "not less than"
"less than"
```

**Python:**

```python
>>> "less than" if 3 < 4 else "not less than"
'less than'

>>> ["not less than", "less than"][3 < 4]
'less than'
```

## Polymorphism
All dynamic languages support polymorphism, more or less. Julia's polymorphism is superior to Python. Let's see an example.

**Julia:**

```julia
julia> f(x::Int) = "The input is an integer";
julia> f(x::String) = "The input is a string";
julia> f(x) = "The intput is everything else";
julia> f
f (generic function with 3 methods)
```
Notice the last line shows function ``f`` has three methods, which method will be used depends on how many parameters and the types of the values passed to ``f`` at run-time. 

```julia
julia> f(2)
"The input is an integer"
julia> f("hi")
"The input is a string"
julia> f(1.5)
"The intput is everything else"
```

**Python:**

```python
>>> def f(x):
        return "This is my first implementation"
>>> def f(x):
        return "This is my second implementation"
>>> f(5)
'This is my second implementation'
```
In Python, the second implemention will overwrite the first one as expected.

