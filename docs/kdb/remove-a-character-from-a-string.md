# Removing a Character from a String

<span style="display:block;text-align:right">Nov 9, 2019</span>

Removing a character from a string. For example, convert ``2019.11.09`` to ``20191109`` by removing the dot:

```q
s:"2019.11.09";
\t do[1000000;except[;"."] s]
\t do[1000000;ssr[s;".";""]]
```

The first one took 404 ms, but the second one took 2109 ms on my PC. Using ``except`` is five times faster than string search and replacement (``ssr``). Furthermore, if function projection is replaced, the speed is further improved. The code belows takes 328 ms to finish.

```q
\t do[1000000;s except "."]
```