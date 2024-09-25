function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    let Display = document.getElementById("display").value;
    document.getElementById("display").value = Display.slice(0, -1);
}
function calculateResult() {
    let Display = document.getElementById("display").value;

    try {
        let result = eval(Display);

        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}
