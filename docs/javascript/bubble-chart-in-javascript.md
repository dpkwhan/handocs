# Bubble Chart in JavaScript

<span style="display:block;text-align:right">Aug 17, 2019</span>

In this article, I visualized the GDP Per Capita and Life Expectancy for a few selected countries in 1990 and 2015 using three popular JavaScript charting libraries:

- ECharts: [http://echarts.apache.org](http://echarts.apache.org)
- Highcharts: [https://www.highcharts.com/](https://www.highcharts.com/)
- PlotlyJS: [https://plot.ly/javascript/](https://plot.ly/javascript/)

I've been using Highcharts for a couple of years in my web applications, but this is the first time I used ECharts and PlotlyJS. I actually just heard of ECharts yesterday in a blog article about [pyechart](https://pyecharts.org/#/), a Python Echarts plotting library. I saw some cool featured provided by pyechart and that stimulated my interest in exploring the underlying JavaScript library used by pyechart. Playing with it for a couple of hours made me really like it since it offers very similar features as Highcharts as well as:

- It is open sourced and free, but Highcharts is a commercial software
- It also offers support to WebGL, which makes 3D plotting a breeze
- It's documentation, example gallery and user community is strong
- It is developed and maintained by Baidu, a big Chinese tech company listed on NASDAQ

It is time to move to open-sourced and free charting library ECharts!

<div class="tab">
  <button
    class="tablinks active"
    onclick="selectChartingLibrary(event, 'ECharts')"
  >
    ECharts
  </button>
  <button class="tablinks" onclick="selectChartingLibrary(event, 'HighchartsJS')">
    Highcharts
  </button>
  <button class="tablinks" onclick="selectChartingLibrary(event, 'PlotlyJS')">
    PlotlyJS
  </button>
</div>

<div id="ECharts" class="tabcontent" style="display:block; height:90%; min-height: 500px">
  <div id="echarts-container" style="height:100%; min-height: 500px"></div>
</div>

<div id="HighchartsJS" class="tabcontent" style="height:90%; min-height: 500px">
  <div id="highcharts-container" style="height:100%; min-height: 500px"></div>
</div>

<div id="PlotlyJS" class="tabcontent" style="height:90%; min-height: 500px">
  <div id="plotlyjs-container" style="height:50vh; width:57vw; min-height: 500px"></div>
</div>
