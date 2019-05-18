# Add a new key to dictionary

<span style="display:block;text-align:right">May 13, 2019</span>

## Introduction
Suppose you have an existing dictionary ``d`` as follows:

``` q
q)d:`firstName`lastName!`David`Han
q)d
firstName| David
lastName | Han
```

Now I want to add another key to this dictionary to indicate my age, say, ``d[`age]:30``. Unfortunately, you will see this:

``` q
q)d[`age]:30
'type
  [0]  d[`age]:30
              ^
```

The ``type`` error occurs because:

- The existing dictionary is uniform, and
- The value type of new item is different from the value type of the existing dictionary

## Mixed Value Types

``` q
q)d2:`firstName`lastName`zip!(`David;`Han;10583)
q)d2
firstName| `David
lastName | `Han
zip      | 10583

q)d2[`age]:30 /add a new item
q)d2
firstName| `David
lastName | `Han
zip      | 10583
age      | 30
```

## Uniform Value Type
When the value type of the new item is different from the value type of the existing dictionary, we can create a second dictonary with the new key and then merge this dictionary with the existing dictionary. For example

``` q
q)d:`firstName`lastName!`David`Han
q)d
firstName| David
lastName | Han

q)d,(enlist `age)!(enlist 30)
firstName| `David
lastName | `Han
age      | 30
```

## Remarks
When the value type of a dictionary is not known in advance, the second approach provides a more robust way to insert a new entry to an existing dictionary.
