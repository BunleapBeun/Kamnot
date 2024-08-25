// ! line graph

const ctx = document.getElementById("lineGraph");

const lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024"], // Update the years
    datasets: [{
      label: "Mood Tracker",
      pointBackgroundColor: '#002949',
      pointBorderColor: '#fff',
      pointBorderWidth: '4',
      pointRadius: '8',
      pointHoverBorderWidth: '4',
      pointHoverRadius: '8',
      backgroundColor: '#00294960',
      borderColor: '#002949',
      borderWidth: '4',
      borderJoinStyle: 'miter',
      data: [3, 4, 2, 5, 1], // Example mood data corresponding to the years
    }]
  },
  options: {
    legend: {
      display: false
    },
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value, index, values) {
            const emotions = ['កើតទុក', 'រំភើប', 'ភ័យខ្លាច', 'រីករាយ', 'ខឹង'];
            return emotions[value - 1]; // Only return the emotion labels
          }
        },
        // Ensure the y-axis has as many ticks as there are emotions
        min: 1,
        max: 5,
        stepSize: 1
      }],
      gridLines: {
        display: false // Optionally remove grid lines for a cleaner look
      }
    }
  }
});
