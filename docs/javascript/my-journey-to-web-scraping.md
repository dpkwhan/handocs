# My Journey to Web Scraping

<span style="display:block;text-align:right">May 27, 2019</span>

## Introduction

I started to learn web scraping techniques over the long weekend of Memorial Day in 2015. The main reason for me to learn this is that one of my colleagues manually downloaded the FINRA ATS data every week from its website. The steps she followed are like this:

- Go to [https://otctransparency.finra.org](https://otctransparency.finra.org)
- Type in username and password[^1]
- Answer three security questions
- Click "I Agree" button
- Select the date from the dropdown menu
- Select the "Report Type" radio button
- Click the link to each symbol to download
- Report the above step for each symbol

You can imagine how tedious this is and very quickly she is bored. I was thinking whether this process could be automated. Then I started to search for a soluation and I found it. The library that can do this job is ``PhantomJS``, a headless web browser scriptable with JavaScript. Over that long weekend four years ago, I learned ``PhantomJS`` and wrote my first web crawler to automatically download FINRA ATS data.

In this blog, I am going to walk through each technology I tried before and the advantages and disadvantages each method has, but I will not discuss each technology in depth. I will provide an real-life example of how to use each technoglogy to scrape data from a website in future blogs.

## PhantomJS
[PhantomJS][PhantomJS] is a headless web browser scriptable with JavaScript. It is very powerful and capable of handling dynamic web pages. This libray opened a brand new window for me and it got my journey to web scraping started.

## Selenium with Python
[Selenium][Selenium] automates browsers. Initially, it is built for automating unit/regression testing in web applications. We can also use it for web crawling. [Selenium with Python][Selenium with Python] provides an easy-to-use API to use webdriver to interact with web component in a physical web browser. It basically launch your web browser and enable you do whatever you can do manually but in a programmatically way. Selenium with Python script can only run from a Windows machine since it needs to physically launch a browser.

## Requests in Python
[Requests][Requests] is an HTTP library for Python, built for Humans and Machines, alike. It is extremely easy and efficient to use if you want to get some static data from a website. Unfortunately if the data from a website is dynamically generated, it is not easy to use Requests to get them since it cannot interact with JavaScript.

## Scrapy
[Scrapy][Scrapy] is also a Python libray built specifically for web scraping. It is very powerful to extract static data you need from a website. It also has the same limitation as [Requests][Requests] since it cannot interpret JavaScript.

## Puppeteer

From [Puppeteer][Puppeteer]'s official documentation site:

> Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the 
> DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full 
> (non-headless) Chrome or Chromium.

The release of [Puppeteer][Puppeteer] by Google basically made [PhantomJS][PhantomJS] unpopular and unnecessary since [Puppeteer][Puppeteer] can do everything that [PhantomJS][PhantomJS] can do and offers a lot more features.

## Curl
The ``curl`` tool lets us fetch a given URL from the command-line and sometimes it is the easiest approach to retrieve a static files from a website. It is also very convenient to use ``curl`` to fetch data from an API. Later I will show how to use ``curl`` to download ATS data from FINRA website.


[PhantomJS]: http://phantomjs.org/

[Selenium]: https://www.seleniumhq.org/

[Selenium with Python]: https://selenium-python.readthedocs.io/

[Requests]: https://3.python-requests.org/

[Scrapy]: https://scrapy.org/

[Puppeteer]: https://pptr.dev/

[^1]:
    In 2015, the FINRA ATS data is credentials protected and an annual fee is charged to access it. Later FINRA made it free and open to public. A while later, FINRA also made batch data downloading available. In January 2019, FINRA provides API to download its ATS data. Over the years, FINRA's data transparency program made trmendous efforts to make its data more accessible to users.
