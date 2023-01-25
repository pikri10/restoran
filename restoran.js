function total() {
    let makanan = document.getElementById('makanan').value;
    let jumlah = parseInt(document.getElementById('jumlah').value);
    if (makanan == 'rendang') {
        let total = 50000 * jumlah;
        document.getElementById("total").innerHTML = total;
    } else if (makanan == 'sate') {
        let total = 75000 * jumlah;
        document.getElementById("total").innerHTML = total;
    } else if (makanan == 'nasgor') {
        let total = 20000 * jumlah;
        document.getElementById("total").innerHTML = total;
    } else {
        document.getElementById("total").innerHTML = "error!";
    }
}