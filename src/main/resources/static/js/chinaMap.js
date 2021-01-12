var obj = window.document.location;
var BASE_PATH = obj.href.substring(0, obj.href.indexOf(obj.pathname));

var mapColor=[
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
var bars = {
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
            magicType: {show: true, type: ['line', 'bar']},
        }
    },

};

var pies = {
    color: SColor,
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        left: "80%",
        itemWidth: 15,
        itemHeight: 15,
        space: 10,
        textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "16"
        },
    }}


/*function today() {
    console.log(123);
    var t = setTimeout(time, 1000); //開始运行
    clearTimeout(t); //清除定时器
    var today=null;
    $.ajax({
        url: BASE_PATH + "/province",
        type: "get",
        success: function f(data) {
            today=555;
            today++;
        }})
    document.querySelector(".today").innerHTML =today;
    t = setTimeout(time, 1000); //设定定时器，循环运行
}*/

$.ajax({
        url: BASE_PATH + "/province",
        type: "get",
        success: function f(data) {
            console.log(data)
            var myChart = echarts.init(document.querySelector(".map .chart"));

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
                            data: data,
                            geoIndex: 0, // 将空气质量的数据和第0个geo配置关联在一起
                            type: 'map',
                        }
                    ],
                    tooltip: {
                        formatter: function(params) {
                            return params.name + '：' + params.data['value']
                        },
                    },
                    visualMap: {
                        min: 1,
                        max: 120,
                        text:['人数',' '],
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
    })

$.ajax({
    url: BASE_PATH + "/dailyFord",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar1 .chart"));
        bars.color=myColor[4];
        bars.xAxis = [
            {
                type: "category",
                data: data.x,
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
            }
        ],
           bars.yAxis=[
            {
                type: "value",
                name:"数量",
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
                        show:false
                    }
                }
            }
        ],
            bars.series = [
                {
                    name: "直接访问",
                    type: "bar",
                    barWidth: "45%",
                    data: data.y,
                    itemStyle: {
                        barBorderRadius: 5
                    },
                    label: {
                        show: true,
                        position: "top"
                    },
                    smooth: true,
                }
            ],
            myChart.setOption(bars);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

$.ajax({
    url: BASE_PATH + "/dailyLincoln",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar3 .chart"));
        bars.color=myColor[3];
        bars.yAxis=[
            {
                type: "value",
                name:"数量",
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
                        show:false
                    }
                }
            }
        ],
        bars.xAxis = [
            {
                type: "category",
                data: data.x,
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
            }
        ],
            bars.series = [
                {
                    name: "直接访问",
                    type: "bar",
                    barWidth: "45%",
                    data: data.y,
                    itemStyle: {
                        barBorderRadius: 5
                    },
                    label: {
                        show: true,
                        position: "top"
                    },
                    smooth: true,
                }
            ],
            myChart.setOption(bars);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

$.ajax({
    url: BASE_PATH + "/monthSource",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar4 .chart"));
        pies.color=myColor;
        pies.series= [
            {
                name: "",
                type: "pie",
                radius: ["30%", "80%"],
                center: ["40%", "55%"],
                label: {
                    fontSize: 15,
                    formatter: function (arg) {
                        return  arg.name+"  "+arg.value + '\n' + arg.percent + '%'
                    }
                },
                labelLine: {
                    length: 9,
                    length2: 12
                },
                data: data
            }
        ]
        myChart.setOption(pies);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

$.ajax({
    url: BASE_PATH + "/status",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar6 .chart"));
        pies.color=myColor;
        pies.series= [
            {
                name: "",
                type: "pie",
                radius: ["30%", "80%"],
                center: ["40%", "55%"],
                label: {
                    fontSize: 15,
                    formatter: function (arg) {
                        return  arg.name+"  "+arg.value + '\n' + arg.percent + '%'
                    }
                },
                labelLine: {
                    length: 9,
                    length2: 12
                },
                data: data
            }
        ]
        myChart.setOption(pies);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

$.ajax({
    url: BASE_PATH + "/process",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar7 .chart"));
        bars.color=myColor[0];
        bars.xAxis = [
            {
                type: "category",
                data: data.x,
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
            }
        ],
            bars.yAxis=[
                {
                    type: "value",
                    name:"小时",
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
                            show:false
                        }
                    }
                }
            ],
            bars.series = [
                {
                    name: "直接访问",
                    type: "bar",
                    barWidth: "45%",
                    data: data.y,
                    itemStyle: {
                        barBorderRadius: 5
                    },
                    label: {
                        show: true,
                        position: "top"
                    },
                    smooth: true,
                }
            ],
            myChart.setOption(bars);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

$.ajax({
    url: BASE_PATH + "/test",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar9 .chart"));
        bars.color=myColor[2];
        bars.xAxis = [
            {
                type: "category",
                data: data.x,
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
            }
        ],
            bars.yAxis=[
                {
                    type: "value",
                    name:"数量",
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
                            show:false
                        }
                    }
                }
            ],
            bars.series = [
                {
                    name: "直接访问",
                    type: "bar",
                    barWidth: "45%",
                    data: data.y,
                    itemStyle: {
                        barBorderRadius: 5
                    },
                    label: {
                        show: true,
                        position: "top"
                    },
                    smooth: true,
                }
            ],
            myChart.setOption(bars);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})
