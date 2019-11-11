# Removing a Character from a String

<span style="display:block;text-align:right">Nov 9, 2019</span>

Removing a character from a string. For example, convert ``2019.11.09`` to ``20191109`` by removing the dot:

```q
s:"2019.11.09";
```

| No. | Method                         | Execution Time (milliseconds) |
|:---:|:-------------------------------|:-----------------------------:|
|  1  | ``do[1000000;ssr[s;".";""]]``  |             2,109             |
|  2  | ``do[1000000;except[;"."] s]`` |              404              |
|  3  | ``do[1000000;s except "."]``   |              328              |
|  4  | ``do[1000000;s where s<>"."]`` |              445              |

The first one took $2,109$ ms, but the second one took 404 ms on my PC. Using ``except`` is five times faster than string search and replacement (``ssr``). Furthermore, if function projection is replaced with the juxtaposition form, the speed is further improved and it takes only 328 ms to finish. The speed of method 4 is Okay, but slightly slower than ``except``.
