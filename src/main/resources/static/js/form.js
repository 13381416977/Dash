var obj = window.document.location;
var BASE_PATH = obj.href.substring(0, obj.href.indexOf(obj.pathname));

var myColor = [
    "rgba(75, 250, 72,  0.7)",
    "rgba(255, 90, 90,  0.7)",
    "rgba(135,48,255,   0.7)",
    "rgba(107, 255, 230,0.7)",
    "rgba(255, 58, 211, 0.7)",
    "rgba(56,59,255,0.7)",
    "rgba(255, 255, 0,  0.7)",
    "rgba(255, 0, 0,    0.7)",
]
var mapColor = [
    "rgba(75, 250, 72,  0.7)",
    "rgba(172,221,82,   0.7)",
    "rgba(107, 255, 230,0.7)",
    "rgba(233, 226, 97, 0.7)",
    "rgba(255, 255, 0,  0.7)",
    "rgba(255, 151, 238,0.7)",
    "rgba(255, 58, 211, 0.7)",
    "rgba(255, 90, 90,  0.7)",
    "rgba(255, 0, 0,    0.7)",
]
var bars = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
    },
    tooltip: {
        formatter: '{c}'
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['bar', 'line', 'pei']
            }
        }
    },

    yAxis: [
        {
            type: "value",
            axisLabel: {
                color: "rgba(255,255,255,.6) ",
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }
    ],
};
var pies = {
    color: myColor,
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        left: "80%",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
        },
    }}

/*function cc(color,date,type) {
    console.log(color);
    console.log(date);
    console.log(type);
    $.ajax({
        url: BASE_PATH + "/mCount",
        type: "get",
        success: function f(data) {
            var myChart = echarts.init(document.querySelector(".bar1 .chart"));
            bars.color = myColor[color];
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
        url: BASE_PATH + "/income",
        type: "get",
        success: function f(data) {
            var myChart = echarts.init(document.querySelector(".bar3 .chart"));
            bars.color = myColor[date];
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
}*/

$.ajax({
    url: BASE_PATH + "/mCount",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar1 .chart"));
        bars.color = myColor[0];
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


/*$.ajax({
    url: BASE_PATH + "/lists",
    type: "get",
    success: function f(data) {
        //first
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".bar2 .chart"));
        // 2. 指定配置和数据
        var bars = {
            grid: {
                top: "10%",
                left: "10%",
                bottom: "10%"
                // containLabel: true
            },
            // 不显示x轴的相关信息
            xAxis: {
                show: false
            },
            yAxis: [
                {
                    type: "category",
                    inverse: true,
                    data: data.x,
                    // 不显示y轴的线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    },
                    // 把刻度标签里面的文字颜色设置为白色
                    axisLabel: {
                        color: "#fff"
                    }
                },
                {
                    data: data.y,
                    inverse: true,
                    // 不显示y轴的线
                    axisLine: {
                        show: false
                    },
                    // 不显示刻度
                    axisTick: {
                        show: false
                    },
                    // 把刻度标签里面的文字颜色设置为白色
                    axisLabel: {
                        color: "#fff"
                    }
                }
            ],
            series: [
                {
                    name: "条",
                    type: "bar",
                    data: [70, 34, 65, 17, 69, 91, 60],
                    yAxisIndex: 0,
                    // 修改第一组柱子的圆角
                    itemStyle: {
                        barBorderRadius: 20,
                        // 此时的color 可以修改柱子的颜色
                        color: function (params) {
                            // params 传进来的是柱子对象
                            // console.log(params);
                            // dataIndex 是当前柱子的索引号
                            return myColor[params.dataIndex % myColor.length];
                        }
                    },
                    // 柱子之间的距离
                    barCategoryGap: 50,
                    //柱子的宽度
                    barWidth: 10,
                    // 显示柱子内的文字
                    label: {
                        show: true,
                        position: "inside",
                        // {c} 会自动的解析为 数据  data里面的数据
                        formatter: "{c}%"
                    }
                },
                {
                    name: "框",
                    type: "bar",
                    barCategoryGap: 50,
                    barWidth: 15,
                    yAxisIndex: 1,
                    data: [100, 100, 100, 100, 100, 100, 100],
                    itemStyle: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 3,
                        barBorderRadius: 15
                    }
                }
            ]
        };

        // 3. 把配置给实例对象
        myChart.setOption(bars);
        // 4. 让图表跟随屏幕自动的去适应
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})*/

$.ajax({
    url: BASE_PATH + "/income",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar3 .chart"));
        bars.color = myColor[2];
        bars.xAxis = [
            {
                type: "category",
                data: data.x,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,0.6)",
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
    url: BASE_PATH + "/process",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar4 .chart"));
        bars.color = myColor[3];
        bars.xAxis = [
            {
                type: "category",
                data: data.x,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,0.6)",
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

/*$.ajax({
    url: BASE_PATH + "/status",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar5 .chart"));
        var bars = {
            color: myColor,
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                left: "85%",
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: "12"
                }
            },
            series: [
                {
                    name: "地区分布",
                    type: "pie",
                    radius: ["30%", "80%"],
                    center: ["40%", "55%"],
                    // 图形的文字标签
                    label: {
                        fontSize: 20,
                        formatter: function (arg) {
                            // console.log(arg)
                            return arg.name + '  -  ' + arg.value + '\n' + arg.percent + '%'
                        }
                    },
                    // 链接图形和文字的线条
                    labelLine: {
                        // length 链接图形的线条
                        length: 12,
                        // length2 链接文字的线条
                        length2: 16
                    },
                    data: data
                }
            ]
        };
        myChart.setOption(bars);
        // 监听浏览器缩放，图表对象调用缩放resize函数
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})*/

$.ajax({
    url: BASE_PATH + "/leads",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar6 .chart"));
        bars.color = myColor[4];
        bars.xAxis = [
            {
                type: "category",
                data: data.x,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,0.6)",
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
    url: BASE_PATH + "/test",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar7 .chart"));
        bars.color = myColor[5];
        bars.xAxis = [
            {
                type: "category",
                data: data.x,
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,0.6)",
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
