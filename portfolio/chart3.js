const ctx = document.getElementById('barchart');       
const barchart =new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['ปี1 เทอม 1', 'ปี1 เทอม 2', 'ปี2 เทอม 1'],
    datasets: [{
      label: 'เกรด',
      data: [3.58,3.58,3.58],
      backgroundColor: [
        'rgba(125, 60, 152,0.7)',
        'rgba(100, 149, 237,0.7)',
        'rgba(64, 224, 208,0.7)',
      ],
      backgroundColor: [
        'rgba(125, 60, 152,0.7)',
        'rgba(100, 149, 237,0.7)',
        'rgba(64, 224, 208,0.7)',
      ],
      borderWidth: 3
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});