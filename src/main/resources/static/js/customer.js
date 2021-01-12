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
    "rgba(255,51,44,0.7)"
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
            magicType: {
                type: []
            }
        }
    },

    yAxis: [
        {
            type: "value",
            name:"人数",
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

$.ajax({
    url: BASE_PATH + "/customer/income",
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
    url: BASE_PATH + "/customer/sex",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar2 .chart"));
        pies.color=["rgba(255,51,44,0.7)","rgba(35,111,255,0.7)"]
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
    url: BASE_PATH + "/customer/age",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar3 .chart"));
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
    url: BASE_PATH + "/customer/marry",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar4 .chart"));
        pies.color=SColor;
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
    url: BASE_PATH + "/customer/job",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar8 .chart"));
      /*  bars.color=myColor[0];
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
            myChart.setOption(bars);*/
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
                data: [
                    { value: 356, name: "普通职员" },
                    { value: 124, name: "专业人士" },
                    { value: 112, name: "工程师" },
                    { value: 87, name: "销售人员" },
                    { value: 66, name: "工人(蓝领)" },
                    { value: 55, name: "部门主管" },
                    { value: 34, name: "部门经理或以上" }
                ]
            }
        ];
        myChart.setOption(pies);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
})

$.ajax({
    url: BASE_PATH + "/customer/house",
    type: "get",
    success: function f(data) {
        var myChart = echarts.init(document.querySelector(".bar6 .chart"));
        pies.color=SColor;
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

function lair() {
    var myChart = echarts.init(document.querySelector(".bar7 .chart"));
    bars.color=myColor[6];
    bars.xAxis = [
        {
            type: "category",
            data: ["服务","制造","零售","建筑","教育","互联网","政府","食宿","金融"],
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
                data: [54,78,65,21,98,36,67,22,45,55],
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
    window.addEventListener("resize", function() {
        myChart.resize();
    });

    var myChart = echarts.init(document.querySelector(".bar5 .chart"));
    var Color = [
        "rgba(16,137,231, 0.99)",
        "rgba(245,116,116,0.99)",
        "rgba(86,208,227, 0.99)",
        "rgba(75,248,46,  0.99)",
        "rgba(139,120,246,0.99)",
        "rgba(248,180,72, 0.99)"
    ];
    var option = {
        grid: {
            top: "10%",
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
                data: ["高中", "中专", "大专", "本科", "硕士","博士"],
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
                data: [141, 89, 254, 389, 128,174],
                yAxisIndex: 0,
                itemStyle: {
                    barBorderRadius: 20,
                    color: function(params) {
                        return Color[params.dataIndex];
                    }
                },
                barCategoryGap: 50,
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
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                data: [400, 400, 400, 400, 400,400],
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
    window.addEventListener("resize", function() {
        myChart.resize();
    });

    var myChart = echarts.init(document.querySelector(".bar9 .chart"));
    bars.color=myColor[3];
    bars.xAxis = [
        {
            type: "category",
            data: ["全职","兼职","私营业主","退休","无业","学生","家庭主妇","私人营业"],
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
                data: [72,24,56,91,34,57,68,24,40],
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
    window.addEventListener("resize", function() {
        myChart.resize();
    });
};