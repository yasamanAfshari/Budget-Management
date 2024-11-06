
function float2dollar(value) {

    return "تومان " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}

function renderChart(data, labels) {

    var ctx = document.getElementById("myChart").getContext('2d');

    var myChart = new Chart(ctx, {

        type: 'line',

        data: {

            labels: labels,

            datasets: [

                {

                    label: 'ورودی ها',

                    data: data[0],

                    borderColor: 'rgba(34, 107, 0, 0.8)',

                    backgroundColor: 'rgba(255, 255, 255, 0)',

                },

                {

                    label: 'خروجی ها',

                    data: data[1],

                    borderColor: 'rgba(225, 74, 74, 0.8)',

                    backgroundColor: 'rgba(255, 255, 255, 0)',

                }

            ]

        },

        options: {
            

            scales: {

                yAxes: [{

                    ticks: {

                        beginAtZero: true,

                        callback: function (value, index, values) {

                            return float2dollar(value);

                        }

                    }

                }]

            },

        }

    });

}

function getChartData() {

    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');

    $.ajax({

        url: "http://localhost:3000/chartData",

        success: function (result) {

            $("#loadingMessage").html("");

            var data = [];

            data.push(result.input);

            data.push(result.output);

            var labels = result.labels;

            renderChart(data, labels);

        },

        error: function (err) {

            $("#loadingMessage").html('<img src="img/No-data-rafiki.png">');


        }

    });

}

$(document).ready(

    function () {

        getChartData();

    }



);



/*--------line chart--------*/

function rChart(data, labels) {

    var ctxz = document.getElementById("ChartDoughnut").getContext('2d');

    var ChartDoughnut = new Chart(ctxz, {

        type: 'doughnut',

        data: {



            datasets: [{

                label: 'output',

                data: data,


                backgroundColor: ['rgba(3, 103, 223, 100%)', 'rgba(220, 53, 69, 100%)', 'rgba(255, 193, 7, 100%)', 'rgba(25, 135, 84, 100%)', 'rgba(233, 236, 239, 100%)'],
                hoverBackgroundColor: ['rgba(3, 103, 223, 100%)', 'rgba(220, 53, 69, 100%)', 'rgba(255, 193, 7, 100%)', 'rgba(25, 135, 84, 100%)', 'rgba(233, 236, 239, 100%)'],



            }]

        },

        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,

                },
                title: {
                    display: false,
                }
            }
        }

    });

}

$(document).ready(function () {

    data = [650, 500, 420, 300, 200];

    labels = ["پوشاک ", "ورزش", "خوراکی ", "زیبایی ", "سایر "];

    rChart(data, labels);


})



