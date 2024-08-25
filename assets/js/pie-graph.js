// ! pie graph

var ctx = document.getElementById("pieChart").getContext('2d');
var myChart = new Chart(ctx, {
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
      data: [12, 19, 3, 17, 28]
    }]
  }
});