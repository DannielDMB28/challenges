function celsiusToFahrenheit() {
    let c = document.getElementById("temperatura").value;
    c = parseFloat(c);

    if (isNaN(c)) {
        document.getElementById("resultado").innerText = "Porfavor digite um numero";
        return;
    }

    let f = (c * 9/5) + 32;
    f = f.toFixed(1);

    document.getElementById("resultado").innerText = `${c} C = ${f} F`;
}

function fahrenheitToCelsius() {
    let f = document.getElementById("temperatura").value;
    f = parseFloat(f);

    if (isNaN(f)) {
        document.getElementById("resultado").innerText = "Porfavor digite um numero";
        return;
    }

    let c = (f - 32) * 5/9;
    c = c.toFixed(1);

    document.getElementById("resultado").innerText = `${f} F = ${c} C`;
}