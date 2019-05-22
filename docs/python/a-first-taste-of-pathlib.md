# A First Taste of ``pathlib``

<span style="display:block;text-align:right">May 21, 2019</span>

## Introduction
The library ``pathlib`` is introduced in Python 3.4 and it brings us a spate of convenient features. I try using this library instead of the traditional functions provided in modules ``os`` and ``os.path`` in one of my projects and demonstrate why it is better than the traditional functions. The task here is to write a function to download the daily volume file from this [page][CBOE Daily Volume] for a given year.

## Traditional Python Code

``` python hl_lines="9 10 11 14"
import requests
import os

def download_file_1(year):
    site_url = 'http://markets.cboe.com/us/equities'
    base_url = f'{site_url}/market_statistics/historical_market_volume'
    url = f'{base_url}/market_history_{year}.csv-dl'

    fpath = os.path.join(os.path.expanduser("~"), 'data', 'daily_volume')
    if not os.path.exists(fpath): os.makedirs(fpath)
    fname = os.path.join(fpath, f'daily_volume_{year}.csv')

    res = requests.get(url)
    with open(fname, 'w') as f:
        f.write(res.text)

if __name__ == "__main__":
    download_file_1(2019)
```

## Using ``pathlib``

``` python hl_lines="9 10 11 14"
import requests
from pathlib import Path

def download_file_2(year):
    site_url = 'http://markets.cboe.com/us/equities'
    base_url = f'{site_url}/market_statistics/historical_market_volume'
    url = f'{base_url}/market_history_{year}.csv-dl'

    fpath = Path.home().joinpath('data', 'daily_volume')
    fpath.mkdir(parents=True, exist_ok=True)
    fname = fpath / f'daily_volume_{year}.csv'

    res = requests.get(url)
    with fname.open('w') as f:
        f.write(res.text)

if __name__ == "__main__":
    download_file_2(2019)
```

## Main Differences

The main differences are highlighted at lines 9, 10, 11 and 14.

- Get home directory
    * ``os.path.expanduser("~")``
    * ``Path.home()``
- Join path
    * ``os.path.join('dir', 'subdir')``
    * ``Path.joinpath('dir', 'subdir')``
- Create path
    * ``if not os.path.exists(fpath): os.makedirs(fpath)``
    * ``fpath.mkdir(parents=True, exist_ok=True)``
- Open file
    * ``with open(fname, 'w') as f``
    * ``with fname.open('w') as f``

## Summary
``pathlib`` library puts these methods that used to be in ``os`` and ``os.path`` into a single library and makes it easier to use. For additional features provided by this library, see [pathlib][pathlib].

[CBOE Daily Volume]: http://markets.cboe.com/us/equities/market_statistics/historical_market_volume/
[pathlib]: https://docs.python.org/3/library/pathlib.html
