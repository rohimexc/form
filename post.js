const scriptURL = 'https://script.google.com/macros/s/AKfycbwjmHynzWVWW3HEDOTqU63sWB0Bf_v1X1LoWobs1StQi2kooIVIwIPoBuwsuDW1dIZ3cg/exec';
const form = document.forms['pendataan-mitra'];

form.addEventListener('submit', e => {
    e.preventDefault();
  
    // Menonaktifkan tombol submit
    document.getElementById('submit').setAttribute('disabled', 'true');
  
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you! Your form is submitted successfully.');
        window.location.reload();
    })
    .catch(error => {
        console.error('Error!', error);
        alert('Oops! Something went wrong.');
        // Mengaktifkan kembali tombol submit jika terjadi kesalahan
        document.getElementById('submit').removeAttribute('disabled');
    });
  });
  
