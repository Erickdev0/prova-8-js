function convert() {
    const meters = document.getElementById('meters').value;
    const unit = document.getElementById('unit').value;
    let result = 0;

    if (meters === "") {
        alert("Por favor, insira um valor em metros.");
        return;
    }

    switch (unit) {
        case "yard":
            result = meters * 1.094;
            break;
        case "foot":
            result = meters * 3.281;
            break;
        case "inch":
            result = meters * 39.37;
            break;
        case "mile":
            result = meters * 0.000621;
            break;
    }

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(4)}`;
}
