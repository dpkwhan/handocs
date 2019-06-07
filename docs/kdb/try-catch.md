# Try and Catch in q

Error handling is one of basic features of any programming language. The proper handling of error in runtime can gives us much more intuitive and easier to understand messages. Here are some basic try-catch examples in Python, JavaScript and Java.

## Python

```python
try:
  some_code()
except TypeError as e:
  handle_error(e)
finally:
  other_code()
```

## JavaScript
```javascript
try {
  someCode();
} catch (err) {
  console.log(err);
}
```

## Java
```java
public class MyClass {
  public static void main(String[] args) {
    try {
      int[] myNumbers = {1, 2, 3};
      System.out.println(myNumbers[10]);
    } catch (Exception e) {
      System.out.println("Something went wrong.");
    } finally {
      System.out.println("The 'try catch' is finished.");
    }
  }
}
```

## q
The other day, one of my colleague asked me how to use try-catch in q. To be frank, I never used it before. A few days ago, I read the following code at line 102 of [this script][require.q]:

```q
loadRes:@[system;"l ",x;{ (`LOAD_FAILURE;x) }];
```

I am quite familiar with the syntax of loading a script:

```q
system "l ", "/path/to/a/script.q"
```

However, in this example the syntaxt is:

```q
@[f;fx;g]
```

where ``f`` and ``g`` are functions and ``fx`` is the argument of function ``f``. A little bit research led me to the Kx official documentation site about [Trap][Trap]. This is exactly the equivalent form of try-catch in other programmming language. This means that function ``f`` is evaluated at ``fx`` and function ``g`` is evaluated if the evaluation of ``f`` fails. More details and examples can be found [here][Trap].


[require.q]: https://github.com/BuaBook/kdb-common/blob/master/src/require.q
[Trap]: https://code.kx.com/v2/ref/apply/#trap
