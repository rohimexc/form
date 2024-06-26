fetch('http://localhost/proxy.php')
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

