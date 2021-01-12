var obj = window.document.location;
var BASE_PATH = obj.href.substring(0, obj.href.indexOf(obj.pathname));
/*var myColor = ["#655dff", "#F57474", "#42e35c", "#f8d526", "#56D0E3", "#8B78F6", "#ff8a00", "#f800af"];*/

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
    "rgba(172,221,82,   0.7)",
    "rgba(75, 250, 72,  0.7)",
    "rgba(107, 255, 230,0.7)",
    "rgba(233, 226, 97, 0.7)",
    "rgba(255, 255, 0,  0.7)",
    "rgba(255, 151, 238,0.7)",
    "rgba(255, 58, 211, 0.7)",
    "rgba(255, 90, 90,  0.7)",
    "rgba(255, 0, 0,    0.7)",
]
var ss={
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
        }
    }}
$.ajax({
    url: BASE_PATH + "/dailyFord",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar1 .chart"));
        var option = {

            color: myColor[1],
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
            xAxis: [
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
            yAxis: [
                {
                    type: "value",
                    // 修改刻度标签 相关样式
                    name:'数量',
                    axisLabel: {
                        color: "rgba(255,255,255,.6) ",
                        fontSize: 12
                    },
                    // y轴的线条改为了 2像素
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                            width: 2
                        }
                    },
                    // y轴分割线的颜色
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)"
                        }
                    }
                }
            ],
            series: [
                {
                    name: "直接访问",
                    type: "bar",
                    barWidth: "45%",
                    data: data.y,
                    itemStyle: {
                        // 修改柱子圆角
                        barBorderRadius: 5
                    },
                    label: {
                        show: true,
                        position: "top"
                    },
                    smooth: true, // 是否为平滑线
                }
            ],

        };
        myChart.setOption(option);
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
        // 2. 指定配置项和数据
        var option = {

            color: myColor[3],
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            // 修改图表的大小
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

            xAxis: [
                {
                    type: "category",
                    data: data.x,
                    axisTick: {
                        alignWithLabel: true
                    },
                    // 修改刻度标签 相关样式
                    axisLabel: {
                        color: "rgba(255,255,255,.6) ",
                        fontSize: "12"
                    },
                    // 不显示x坐标轴的样式
                    axisLine: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name:'数量',
                    // 修改刻度标签 相关样式
                    axisLabel: {
                        color: "rgba(255,255,255,.6) ",
                        fontSize: 12
                    },
                    // y轴的线条改为了 2像素
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)",
                            width: 2
                        }
                    },
                    // y轴分割线的颜色
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)"
                        }
                    }
                }
            ],
            series: [
                {
                    name: "直接访问",
                    type: "bar",
                    barWidth: "45%",
                    data: data.y,
                    itemStyle: {
                        // 修改柱子圆角
                        barBorderRadius: 5
                    },
                    label: {
                        show: true,
                        position: "top"
                    },
                    smooth: true, // 是否为平滑线
                }
            ],

        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

$.ajax({
    url: BASE_PATH + "/monthSource",
    type: "get",
    success: function f(data) {
        //first
        console.log(data)
        var myChart = echarts.init(document.querySelector(".bar2 .chart"));

          ss.series=[
                {
                    name: "",
                    type: "pie",
                    radius: ["30%", "80%"],
                    center: ["40%", "55%"],
                    // 图形的文字标签
                    label: {
                        fontSize: 15,
                        formatter: function (arg) {
                            // console.log(arg)
                            return  arg.value + '\n' + arg.percent + '%'
                        }
                    },
                    // 链接图形和文字的线条
                    labelLine: {
                        // length 链接图形的线条
                        length: 9,
                        // length2 链接文字的线条
                        length2: 12
                    },
                    data: data
                }
            ]
        myChart.setOption(ss);
        // 监听浏览器缩放，图表对象调用缩放resize函数
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

/*$.ajax({
    url: BASE_PATH + "/monthCategory",
    type: "get",
    success: function f(data) {
        //first
        console.log(data)
        var myChart = echarts.init(document.querySelector(".bar4 .chart"));
        var option = {
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
                }
            },
            series: [
                {
                    type: "pie",
                    radius: ["30%", "80%"],
                    center: ["40%", "55%"],
                    // 图形的文字标签
                    label: {
                        fontSize: 15,
                        formatter: function (arg) {
                            // console.log(arg)
                            return  arg.value + '\n' + arg.percent + '%'
                        }
                    },
                    // 链接图形和文字的线条
                    labelLine: {
                        // length 链接图形的线条
                        length: 9,
                        // length2 链接文字的线条
                        length2: 12
                    },
                    data: [127,86],
                }
            ]
        };
        myChart.setOption(option);
        // 监听浏览器缩放，图表对象调用缩放resize函数
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})*/

$.ajax({
    url: BASE_PATH + "/monthCategory",
    type: "get",
    success: function f(data) {
        //first
        console.log(data)
        var myChart = echarts.init(document.querySelector(".bar6 .chart"));
        var option = {
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
                }
            },
            series: [
                {
                    type: "pie",
                    radius: ["30%", "80%"],
                    center: ["40%", "55%"],
                    // 图形的文字标签
                    label: {
                        fontSize: 15,
                        formatter: function (arg) {
                            // console.log(arg)
                            return  arg.value + '\n' + arg.percent + '%'
                        }
                    },
                    // 链接图形和文字的线条
                    labelLine: {
                        // length 链接图形的线条
                        length: 9,
                        // length2 链接文字的线条
                        length2: 12
                    },
                    data: [74,114],
                }
            ]
        };
        myChart.setOption(option);
        // 监听浏览器缩放，图表对象调用缩放resize函数
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

$.ajax({
    url: BASE_PATH + "/monthStatus",
    type: "get",
    success: function f(data) {
        //first
        console.log(data)
        var myChart = echarts.init(document.querySelector(".bar5 .chart"));
        var option = {
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
                }
            },
            series: [
                {
                    type: "pie",
                    radius: ["30%", "80%"],
                    center: ["40%", "55%"],
                    // 图形的文字标签
                    label: {
                        fontSize: 15,
                        formatter: function (arg) {
                            return  arg.value + '\n' + arg.percent + '%'
                        }
                    },
                    // 链接图形和文字的线条
                    labelLine: {
                        // length 链接图形的线条
                        length: 9,
                        // length2 链接文字的线条
                        length2: 12
                    },
                    data: data
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})
