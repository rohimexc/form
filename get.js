<script>
    fetch('https://script.google.com/macros/s/AKfycbwjmHynzWVWW3HEDOTqU63sWB0Bf_v1X1LoWobs1StQi2kooIVIwIPoBuwsuDW1dIZ3cg/exec')
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector('#myTable tbody');
            data.forEach(row => {
                let newRow = tableBody.insertRow();
                Object.values(row).forEach(value => {
                    let newCell = newRow.insertCell();
                    newCell.textContent = value;
                });
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
</script>
