// Pie Chart
const ctxPie = document.getElementById("pieChart").getContext('2d');
const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ["កើតទុក", "រំភើប", "ខឹង", "ភ័យខ្លាច", "រីករាយ"],
        datasets: [{
            backgroundColor: [
                "#ff2d00",
                "#2ecc71",
                "#f39c12",
                "#9b59b6",
                "#3498db",
            ],
            data: [40, 19, 3, 17, 20] // Raw data
        }]
    },
    options: {
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var total = dataset.data.reduce(function(previousValue, currentValue) {
                        return previousValue + currentValue;
                    }, 0);
                    var currentValue = dataset.data[tooltipItem.index];
                    var percentage = Math.floor(((currentValue / total) * 100) + 0.5); // Calculate percentage
                    return data.labels[tooltipItem.index] + ': ' + percentage + '%'; // Show label with percentage
                }
            }
        }
    }
});
