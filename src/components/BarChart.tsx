import React from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart: React.FC<{ data: any[] }> = ({ data }) => {
    const dataAll: any = data.map((item) => {
        return [item["Alcohol"], item["Malic Acid"], item["Ash"], item["Alcalinity of ash"], item["Magnesium"]
            , item["Total phenols"], item["Flavanoids"], item["Nonflavanoid phenols"], item["Proanthocyanins"], item["Color intensity"],
        item["Hue"], item["OD280/OD315 of diluted wines"], item["Unknown"]]
    })

    console.log(dataAll[0]);
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
    const option = {
        xAxis: {
            type: 'category',
            data: ["Alcohol", "Malic Acid", "Ash", "Alcalinity of ash", "Magnesium", "Total phenols", "Flavanoids", "Nonflavanoid phenols"
                , "Color intensity", "Hue", "OD280/OD315 of diluted wines", "Unknown"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: dataAll[0],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
                markLine: markLineOpt


            }
        ]
    };

    const options = {
        xAxis: {
            type: 'category',
            data: ["Alcohol", "Malic Acid", "Ash", "Alcalinity of ash", "Magnesium", "Total phenols", "Flavanoids", "Nonflavanoid phenols"
                , "Color intensity", "Hue", "OD280/OD315 of diluted wines", "Unknown"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: dataAll[1],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };

    const options2 = {
        xAxis: {
            type: 'category',
            data: ["Alcohol", "Malic Acid", "Ash", "Alcalinity of ash", "Magnesium", "Total phenols", "Flavanoids", "Nonflavanoid phenols"
                , "Color intensity", "Hue", "OD280/OD315 of diluted wines", "Unknown"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: dataAll[2],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };
    const options3 = {
        xAxis: {
            type: 'category',
            data: ["Alcohol", "Malic Acid", "Ash", "Alcalinity of ash", "Magnesium", "Total phenols", "Flavanoids", "Nonflavanoid phenols"
                , "Color intensity", "Hue", "OD280/OD315 of diluted wines", "Unknown"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: dataAll[3],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };

    const options4 = {
        xAxis: {
            type: 'category',
            data: ["Alcohol", "Malic Acid", "Ash", "Alcalinity of ash", "Magnesium", "Total phenols", "Flavanoids", "Nonflavanoid phenols"
                , "Color intensity", "Hue", "OD280/OD315 of diluted wines", "Unknown"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: dataAll[4],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };
    const options5 = {
        xAxis: {
            type: 'category',
            data: ["Alcohol", "Malic Acid", "Ash", "Alcalinity of ash", "Magnesium", "Total phenols", "Flavanoids", "Nonflavanoid phenols"
                , "Color intensity", "Hue", "OD280/OD315 of diluted wines", "Unknown"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: dataAll[5],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };

    return <div style={{ display: "block", flexDirection: "row" }}>
        <div style={{ display: "flex" }}>
            <ReactECharts option={option} style={{ height: '300px', width: '50%' }} />
            <ReactECharts option={options} style={{ height: '300px', width: '50%' }} /></div>
        <div style={{ display: "flex" }}>
            <ReactECharts option={options2} style={{ height: '300px', width: '50%' }} />
            <ReactECharts option={options3} style={{ height: '300px', width: '50%' }} /> </div>
        <div style={{ display: "flex" }}>
            <ReactECharts option={options4} style={{ height: '300px', width: '50%' }} />
            <ReactECharts option={options5} style={{ height: '300px', width: '50%' }} /> </div>

    </div>


};

export default BarChart;
