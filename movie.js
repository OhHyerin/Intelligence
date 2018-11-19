$(document).ready(function () {
var bubbleChart = new d3.svg.BubbleChart({
  supportResponsive: true,
  size: 600,
  innerRadius: 600 / 3.5,
  radiusMin: 50,
  data: {
    items: [
      {text: "완벽한 타인", count: "9.18"},
      {text: "보헤미안 랩소디", count: "9.55"},
      {text: "신비한 동물사전", count: "9.24"},
      {text: "해리포터와 마법사의 돌", count: "9.22"},
      {text: "동네사람들", count: "7.70"},
      {text: "성난황소", count: "5.93"},
      {text: "여곡성", count: "6.00"},
      {text: "바울", count: "9.49"},
      {text: "스타 이즈 본", count: "9.17"},
      {text: "창궐", count: "6.67"},
    ],
    eval: function (item) {return item.count;},
    classed: function (item) {return item.text.split(" ").join("");}
  },
  plugins: [
    {
      name: "lines",
      options: {
        format: [
          {// Line #0 //평점
            textField: "count",
            classed: {count: true},
            style: {
              "font-size": "28px",
              "font-family": "Source Sans Pro, sans-serif",
              "text-anchor": "middle",
              fill: "white"
            },
            attr: {
              dy: "0px",
              x: function (d) {return d.cx;},
              y: function (d) {return d.cy;}
            }
          },
          {// Line #1 //영화이름
            textField: "text",
            classed: {text: true},
            style: {
              "font-size": "8px",
              "font-family": "Source Sans Pro, sans-serif",
              "text-anchor": "middle",
              fill: "white"
            },
            attr: {
              dy: "20px",
              x: function (d) {return d.cx;},
              y: function (d) {return d.cy;}
            }
          }
        ],
        centralFormat: [
          {// Line #0
            style: {"font-size": "50px"},
            attr: {}
          },
          {// Line #1
            style: {"font-size": "30px"},
            attr: {dy: "40px"}
          }
        ]
      }
    }]
});
});
