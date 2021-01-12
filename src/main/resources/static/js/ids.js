var obj = window.document.location;
var BASE_PATH = obj.href.substring(0, obj.href.indexOf(obj.pathname));
var mapColor = [
    "rgba(53,250,113,0.7)",
    "rgba(139,221,28,0.7)",
    "rgba(107, 255, 230,0.7)",
    "rgba(233, 226, 97, 0.7)",
    "rgba(255, 255, 0,  0.7)",
    "rgba(255, 151, 238,0.7)",
    "rgba(255, 58, 211, 0.7)",
    "rgba(255, 90, 90,  0.7)",
    "rgba(255, 0, 0,    0.7)",]
var myColor = [
    "rgba(75, 250, 72,  0.7)",
    "rgba(255, 90, 90,  0.7)",
    "rgba(135,48,255,   0.7)",
    "rgba(107, 255, 230,0.7)",
    "rgba(255, 58, 211, 0.7)",
    "rgba(56,59,255,0.7)",
    "rgba(255, 255, 0,  0.7)",
    "rgba(255,51,44,0.7)",
    "rgba(88,71,88,0.7)"
]
var SColor = [
    "rgba(255,74,70,0.67)",
    "rgb(76,76,76)",
    "rgba(68,158,255,0.7)",
    "rgba(135,48,255,   0.7)",
    "rgba(60,255,114,0.7)",
    "rgba(255,122,41,0.7)",
    "rgba(255,78,218,0.7)",
    "rgba(255, 255, 0,  0.7)",

]
var mapdata= [
    {name:"北京",value:199},
    {name:"天津",value:42},
    {name:"河北",value:102},
    {name:"山西",value:81},
    {name:"内蒙古",value:47},
    {name:"辽宁",value:67},
    {name:"吉林",value:82},
    {name:"黑龙江",value:123},
    {name:"上海",value:24},
    {name:"江苏",value:92},
    {name:"浙江",value:114},
    {name:"安徽",value:109},
    {name:"福建",value:116},
    {name:"江西",value:91},
    {name:"山东",value:119},
    {name:"河南",value:137},
    {name:"湖北",value:116},
    {name:"湖南",value:114},
    {name:"重庆",value:91},
    {name:"四川",value:125},
    {name:"贵州",value:62},
    {name:"云南",value:83},
    {name:"西藏",value:19},
    {name:"陕西",value:80},
    {name:"甘肃",value:56},
    {name:"青海",value:10},
    {name:"宁夏",value:18},
    {name:"新疆",value:180},
    {name:"广东",value:123},
    {name:"广西",value:59},
    {name:"海南",value:14},
];
var twelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var bars = {
    color: [myColor[0], myColor[4], myColor[3]],
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: twelve,
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            color: "rgba(255,255,255,.6) ",
            fontSize: "12"
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: "value",
        name: "数量",
        scale: true,//是否从0开始
        axisLabel: {
            color: "rgba(255,255,255,.6) ",
            fontSize: 12
        },
        axisLine: {
            lineStyle: {
                color: "rgba(254,243,255,0.64)",
                width: 1
            }
        },
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.1)",
                show: false
            }
        }
    },
    legend: {
        icon: 'circle',
        top: '5%',
        right: '5%',
        itemWidth: 12,
        itemGap: 20,
        textStyle: {
            color: 'rgba(218,221,87,0.88)'
        }
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        formatter: '{c}'
    },
    grid: {
        left: "0%",
        top: "30px",
        right: "0%",
        bottom: "4%",
        containLabel: true
    },
    toolbox: {
        feature: {
            magicType: {show: false, type: ['line', 'bar']},
        }
    },

};

function one() {
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));
    bars.series = [
        {
            name: "福特",
            type: "line",
            smooth: true,
            data: [10, 16, 13, 8, 3, 11, 19, 11, 3, 20, 12]
        },
        {
            name: "林肯",
            type: "line",
            smooth: true,
            data: [13, 3, 16, 12, 3, 13, 10, 7, 6, 14, 5]
        },

        {
            name: "JMC",
            type: "line",
            symbol: 'circle',
            smooth: true,
            data: [5, 5, 1, 2, 9, 3, 4, 1, 6, 6, 5]
        }
    ];
    myChart.setOption(bars);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function three() {
    var myChart = echarts.init(document.querySelector(".bar3 .chart"));
    bars.color = [myColor[0], myColor[4], myColor[3]]
    bars.yAxis.name = "金额: 万"
    bars.series = [
        {
            name: "福特",
            type: "line",
            smooth: true,
            data: [192, 276, 195, 120, 243, 71, 92, 53, 169, 267, 264,]
        },
        {
            name: "林肯",
            type: "line",
            smooth: true,
            data: [152, 64, 18, 186, 91, 50, 7, 97, 20, 213, 63,]
        },

        {
            name: "JMC",
            type: "line",
            symbol: 'circle',
            smooth: true,
            data: [87, 128, 143, 98, 58, 86, 104, 89, 95, 136, 94,]
        }
    ];
    myChart.setOption(bars);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function four() {
    var myChart = echarts.init(document.querySelector(".bar4 .chart"));
    bars.series = [
        {
            name: "福特",
            type: "line",
            smooth: true,
            data: [6, 16, 8, 12, 16, 17, 11, 1, 11, 12, 9]
        },
        {
            name: "林肯",
            type: "line",
            smooth: true,
            data: [9, 7, 9, 9, 5, 3, 6, 1, 4, 9, 7]
        },

        {
            name: "JMC",
            type: "line",
            symbol: 'circle',
            smooth: true,
            data: [5, 3, 1, 3, 5, 6, 1, 7, 1, 3, 4]
        }
    ];
    bars.yAxis.name = "数量";
    myChart.setOption(bars);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function six() {
    var myChart = echarts.init(document.querySelector(".bar6 .chart"));
    var Color = [

        "rgba(245,116,116,0.99)",
        "rgba(86,208,227, 0.99)",
        "rgba(75,248,46,  0.99)",
        "rgba(139,120,246,0.99)",
        "rgba(227,85,226,0.99)",
        "rgba(248,180,72, 0.99)"
    ];
    var option = {
        grid: {
            top: "0%",
            left: "10%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: "category",
                inverse: true,
                data: ["北京","上海","深圳","杭州","西安","湖南"],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                data: [],
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                }
            }
        ],
        series: [
            {
                name: "条",
                type: "bar",
                data: [578,543,501,467,433,365],
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: 20,
                    color: function(params) {
                        return Color[params.dataIndex];
                    }
                },
                barCategoryGap: 20,
                barWidth: 10,
                label: {
                    show: true,
                    position: "inside",
                    formatter: "{c}"
                }
            },
            {
                name: "框",
                type: "bar",
                barCategoryGap: 20,
                barWidth: 15,
                yAxisIndex: 1,
                data: [600, 600, 600, 600, 600,600],
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function seven() {
    var myChart = echarts.init(document.querySelector(".bar7 .chart"));
    bars.xAxis.boundaryGap = true;
    bars.color = myColor[1];
    bars.series = {
        type: "bar",
        barWidth: "35%",
        data: [56,96,64,38,55,81,103,25,90,95,72],
        itemStyle: {
            barBorderRadius: 7
        },
        label: {
            show: true,
            position: "top"
        }
    };
    bars.yAxis.name="小时";
    myChart.setOption(bars);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function nine() {
        var myChart = echarts.init(document.querySelector(".bar9 .chart"));
        bars.color = myColor[3];
        bars.xAxis.data = twelve;
        bars.yAxis.name = "次数";
        bars.series.data = [240, 777, 714, 619, 327, 222, 660, 956, 938, 571, 487, 285]
        myChart.setOption(bars);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
}

function five() {
    var myChart = echarts.init(document.querySelector(".map .chart"));
    console.log(123);
    $.get('js/china.json', function (ret) {
        echarts.registerMap('chinaMap', ret)
        var option = {
            geo: {
                type: 'map',
                map: 'chinaMap', // chinaMap需要和registerMap中的第一个参数保持一致
                roam: true, // 设置允许缩放以及拖动的效果
                zoom: 1.2,
                label: {
                    show: true,
                    color: "#fff"
                },
                itemStyle: {
                    normal: {
                        // 地图省份的背景颜色
                        areaColor: "rgba(255,242,254,0.55)",
                        borderColor: "#195BB9",
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: "#2B91B7"
                    }
                }
            },
            series: [
                {
                    data: mapdata,
                    geoIndex: 0, // 将空气质量的数据和第0个geo配置关联在一起
                    type: 'map',
                }
            ],
            tooltip: {
                formatter: function(params) {
                    return params.name + '：' + params.data['value']+" 万"
                },
            },
            visualMap: {
                min: 0,
                max: 200,
                text:['金额: 万',' '],
                textStyle:{
                    color:"rgba(255, 255, 0,  0.7)",
                },
                inRange: {
                    color:mapColor
                },
                calculable: true // 出现滑块
            }
        }
        myChart.setOption(option)
    })
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

function lair() {
    one();
    three();
    four();
    six();
    seven();
    nine()
    five();
}

