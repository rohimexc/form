const scriptURL = 'https://script.google.com/macros/s/AKfycbwjmHynzWVWW3HEDOTqU63sWB0Bf_v1X1LoWobs1StQi2kooIVIwIPoBuwsuDW1dIZ3cg/exec';
const form = document.forms['pendataan-mitra'];

form.addEventListener('submit', e => {
    e.preventDefault();
  
    // Menonaktifkan tombol submit
    document.getElementById('submit').classList.add('onclic');
  
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // alert('Thank you! Your form is submitted successfully.');
        document.getElementById('submit').classList.remove('onclic');
        document.getElementById('submit').classList.add('validate');
        setTimeout(function() {
            window.location.reload();
        }, 300); // Delay reload selama 1 detik (1000 milidetik)
    })
    .catch(error => {
        console.error('Error!', error);
        alert('Oops! Something went wrong.');
        // Mengaktifkan kembali tombol submit jika terjadi kesalahan
        document.getElementById('submit').classList.remove('validate');
    });
  });
