function selectChartingLibrary(evt, libName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(libName).style.display = "block";
  evt.currentTarget.className += " active";
}

var data = [
  [
    [1516, 68, 1154605773, "China", 1990],
    [29476, 77.1, 56943299, "France", 1990],
    [31476, 75.4, 78958237, "Germany", 1990],
    [1777, 57.7, 870601776, "India", 1990],
    [29550, 79.1, 122249285, "Japan", 1990],
    [12087, 72, 42972254, "South Korea", 1990],
    [10088, 70.8, 38195258, "Poland", 1990],
    [19349, 69.6, 147568552, "Russia", 1990],
    [10670, 67.3, 53994605, "Turkey", 1990],
    [37062, 75.4, 252847810, "United States", 1990]
  ],
  [
    [13334, 76.9, 1376048943, "China", 2015],
    [37599, 81.9, 64395345, "France", 2015],
    [44053, 81.1, 80688545, "Germany", 2015],
    [5903, 66.8, 1311050527, "India", 2015],
    [36162, 83.5, 126573481, "Japan", 2015],
    [34644, 80.7, 50293439, "South Korea", 2015],
    [24787, 77.3, 38611794, "Poland", 2015],
    [23038, 73.13, 143456918, "Russia", 2015],
    [19360, 76.5, 78665830, "Turkey", 2015],
    [53354, 79.1, 321773631, "United States", 2015]
  ]
];

// ECharts
var dom = document.getElementById("echarts-container");
var myChart = echarts.init(dom);

var option = {
  title: {
    text: "Life Expectancy and GDP",
    subtext: "1990 vs 2015",
    left: "center"
  },
  toolbox: {
    feature: {
      saveAsImage: {
        show: true,
        title: "Save As Image",
        type: "png",
        name: "ECharts"
      },
      dataZoom: {
        show: true,
        yAxisIndex: "none",
        title: {
          zoom: "Area Zoom",
          back: "Restore Area Zoom"
        }
      },
      restore: {
        show: true,
        title: "Restore"
      }
    },
    orient: "vertical",
    iconStyle: {
      normal: {
        textPosition: "left",
        textAlign: "right"
      },
      emphasis: {
        textPosition: "left",
        textAlign: "right"
      }
    },
    top: "middle"
  },
  legend: {
    bottom: 10,
    left: "center",
    data: ["1990", "2015"]
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: "dashed"
      }
    },
    axisLabel: {
      formatter: function(value, index) {
        return value / 1000 + "k";
      }
    },
    name: "GDP",
    nameLocation: "end",
    nameGap: 5
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: "dashed"
      }
    },
    scale: true,
    name: "Life Expectancy",
    nameLocation: "middle",
    nameGap: 30
  },
  series: [
    {
      name: "1990",
      data: data[0],
      type: "scatter",
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 4e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function(param) {
            return param.data[3];
          },
          position: "top"
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: "rgba(120, 36, 50, 0.5)",
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(251, 118, 123)"
            },
            {
              offset: 1,
              color: "rgb(204, 46, 72)"
            }
          ])
        }
      }
    },
    {
      name: "2015",
      data: data[1],
      type: "scatter",
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 4e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function(param) {
            return param.data[3];
          },
          position: "top"
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 10,
          shadowColor: "rgba(25, 100, 150, 0.5)",
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(129, 227, 238)"
            },
            {
              offset: 1,
              color: "rgb(25, 183, 207)"
            }
          ])
        }
      }
    }
  ]
};
myChart.setOption(option, true);
window.onresize = function() {
  myChart.resize();
};

// PlotlyJS
function convertDataPlotly(dataItems) {
  var x = [];
  var y = [];
  var z = [];
  var t = [];
  dataItems.forEach(function(d) {
    x.push(d[0]);
    y.push(d[1]);
    z.push(Math.sqrt(d[2]) * 0.003);
    t.push(d[3]);
  });
  return { x: x, y: y, z: z, t: t };
}

var d1990 = convertDataPlotly(data[0]);
var trace1990 = {
  type: "scatter",
  x: d1990.x,
  y: d1990.y,
  mode: "markers",
  marker: {
    size: d1990.z
  },
  text: d1990.t,
  name: "1990",
  hovertemplate:
    "<b>%{text}</b>:" + "<br>Life Expectancy: %{y}<br>" + "GDP Per Capita: %{x}"
};
var d2015 = convertDataPlotly(data[1]);
var trace2015 = {
  type: "scatter",
  x: d2015.x,
  y: d2015.y,
  mode: "markers",
  marker: {
    size: d2015.z
  },
  text: d2015.t,
  name: "2015",
  hovertemplate:
    "<b>%{text}</b>:" +
    "<br>Life Expectancy: %{y:.1f}<br>" +
    "GDP Per Capita: %{x:.0f}"
};
var dataPlotly = [trace1990, trace2015];
var layout = {
  title: { text: "<b>Life Expectancy and GDP</b><br>1990 vs 2015" },
  showlegend: true,
  legend: {
    orientation: "h",
    xanchor: "center",
    x: 0.5
  },
  autosize: true,
  xaxis: {
    linecolor: "#636363",
    linewidth: 3
  },
  yaxis: {
    title: "Life Expectancy",
    titlefont: {
      family: "Courier New, monospace",
      size: 18,
      color: "#7f7f7f"
    }
  },
  annotations: [
    {
      xref: "paper",
      yref: "paper",
      x: 1,
      xanchor: "left",
      y: 0,
      yanchor: "top",
      text: "GDP",
      showarrow: false
    }
  ]
};

Plotly.newPlot("plotlyjs-container", dataPlotly, layout, {
  showSendToCloud: false
});

// Highcharts
function convertData(dataItems) {
  var data = [];
  dataItems.forEach(function(d) {
    var d = {
      x: d[0],
      y: d[1],
      z: Math.sqrt(d[2]) * 0.001,
      name: d[3]
    };
    data.push(d);
  });
  return data;
}

var data1990 = convertData(data[0]);
var data2015 = convertData(data[1]);

Highcharts.chart("highcharts-container", {
  credits: {
    enabled: false
  },
  chart: {
    plotBorderWidth: 1,
    zoomType: "xy",
    height: "45%",
    reflow: true,
    spacingRight: 50
  },
  exporting: {
    enabled: true
  },
  legend: {
    enabled: true
  },
  title: {
    text: "Life Expectancy and GDP"
  },
  subtitle: {
    text: "1990 vs 2015"
  },
  xAxis: {
    gridLineDashStyle: "dash",
    gridLineWidth: 1,
    title: {
      text: "GDP",
      align: "high",
      rotation: 0,
      y: -35,
      x: 30
    },
    minPadding: 0,
    maxPadding: 0,
    max: 60000,
    tickInterval: 10000
  },
  yAxis: {
    gridLineDashStyle: "dash",
    startOnTick: false,
    endOnTick: false,
    title: {
      text: "Life Expectancy"
    },
    maxPadding: 0.2,
    max: 85,
    tickInterval: 5
  },
  tooltip: {
    useHTML: true,
    headerFormat: "<table>",
    pointFormat:
      '<tr><th colspan="2"><h3>{series.name}: {point.name}</h3></th></tr>' +
      "<tr><th>GDP:</th><td>{point.x}</td></tr>" +
      "<tr><th>Life:</th><td>{point.y} years</td></tr>",
    footerFormat: "</table>",
    followPointer: true
  },
  plotOptions: {
    bubble: {
      minSize: 4,
      maxSize: 80
    }
  },
  series: [
    {
      type: "bubble",
      data: data2015,
      name: "1990"
    },
    {
      type: "bubble",
      data: data1990,
      name: "2015"
    }
  ],
  colors: ["#DB616E", "#69D0E1"]
});
