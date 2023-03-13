import React from 'react';
import ReactECharts from 'echarts-for-react';

const ScatterPlot: React.FC<{ data: any[] }> = ({ data }) => {

  const dataAll: any = data.map((item) => {
    return [
      { "name": "Alcohol", value: item["Alcohol"] },
      { "name": "Malic Acid", value: item["Malic Acid"] },
      { "name": "Ash", value: item["Ash"] },
      { "name": "Alcalinity of ash", value: item["Alcalinity of ash"] },
      { "name": "Magnesium", value: item["Magnesium"] },
      { "name": "Total phenols", value: item["Total phenols"] },
      { "name": "Flavanoids", value: item["Flavanoids"] },
      { "name": "Nonflavanoid phenols", value: item["Nonflavanoid phenols"] },
      { "name": "Proanthocyanins", value: item["Proanthocyanins"] },
      { "name": "Color intensity", value: item["Color intensity"] },
      { "name": "Hue", value: item["Hue"] },
      { "name": "OD280/OD315 of diluted wines", value: item["OD280/OD315 of diluted wines"] },
      { "name": "Unknown", value: item["Unknown"] },
    ]
  })
  const markLineOpt = {
    animation: false,
    label: {
      formatter: 'y = 0.5 * x + 3',
      align: 'right'
    },
    lineStyle: {
      type: 'solid'
    },
    tooltip: {
      formatter: 'y = 0.5 * x + 3'
    },
    data: [
      [
        {
          coord: [0, 3],
          symbol: 'none'
        },
        {
          coord: [20, 13],
          symbol: 'none'
        }
      ]
    ]
  };
  const options = {
    title: {
      text: "Anscombe's quartet",
      left: 'center',
      top: 0
    },
    grid: [
      { left: '7%', top: '7%', width: '38%', height: '38%' },
      { right: '7%', top: '7%', width: '38%', height: '38%' },
      { left: '7%', bottom: '7%', width: '38%', height: '38%' },
      { right: '7%', bottom: '7%', width: '38%', height: '38%' }
    ],
    tooltip: {
      formatter: 'Group {a}: ({c})'
    },
    xAxis: [
      { gridIndex: 0, min: 0, max: 20 },
      { gridIndex: 1, min: 0, max: 20 },
      { gridIndex: 2, min: 0, max: 20 },
      { gridIndex: 3, min: 0, max: 20 }
    ],
    yAxis: [
      { gridIndex: 0, min: 0, max: 15 },
      { gridIndex: 1, min: 0, max: 15 },
      { gridIndex: 2, min: 0, max: 15 },
      { gridIndex: 3, min: 0, max: 15 }
    ],
    series: [
      {
        name: 'I',
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataAll[0],
        markLine: markLineOpt
      },
      {
        name: 'II',
        type: 'scatter',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: dataAll[1],
        markLine: markLineOpt
      },
      {
        name: 'III',
        type: 'scatter',
        xAxisIndex: 2,
        yAxisIndex: 2,
        data: dataAll[2],
        markLine: markLineOpt
      },
      {
        name: 'IV',
        type: 'scatter',
        xAxisIndex: 3,
        yAxisIndex: 3,
        data: dataAll[3],
        markLine: markLineOpt
      }
    ]
  };

  return <ReactECharts option={options} style={{ height: '300px', width: '50%' }} />;
};

export default ScatterPlot;
