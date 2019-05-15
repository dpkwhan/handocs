# Short Sell Restriction

<span style="display:block;text-align:right">May 10, 2019</span>

I had a VWAP long sell order on LMNX.OQ unfinished on May 8, 2019. One basic requirement of a VWAP strategy is to guarantee the order completion at client specified end time or market close if an end time is not provided for the client order if no volume limit or price limit.

This made me a little bit confused 😟. A quick digging shows this stock was trading under short sell restriction. Due to this restriction, the VWAP algorithm cannot cross the spread to finish the residual shares. My immediate question is why this long sell order is short sell restricted.

Some research leads me to the [NYSE TAQ Specifications][NYSE TAQ]. On page 24, it says

> A Short Sale Restriction is to be in effect if a security’s price decreases by 10%
> or more from the previous day’s closing price.
> Once activated, the Short Sale Restriction will remain
> in effect for the remainder of the day as well as the
> following day, unless deactivated.

Next I went to Yahoo Finance to check the OHLC prices for the days before May 8, 2019 as shown below:

<span style="display:block;text-align:center">
![LMNX OHLC](/assets/images/markets/lmnx-ohlc.jpg)
</span>

Clearly the intraday price dropped more than 10% from its previous close on May 7, 2019, which activated the short sell restriction. So the trading on May 8 is also under SSR. Why did the price drop so much on May 7, 2019? A little further digging shows this is due to the much worse earnings than the average expectation repored after market close on May 6, 2019. The earnings surprise is -200%.

<span style="display:block;text-align:center">
![LMNX Earnings](/assets/images/markets/lmnx-earnings.jpg)
</span>

[NYSE TAQ]: https://www.nyse.com/publicdocs/nyse/data/Daily_TAQ_Client_Spec_v3.0.pdf