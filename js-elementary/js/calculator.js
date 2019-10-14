function calcu() {
    // let num1 = parseInt(document.getElementById('n1').value)
    let num1 = parseFloat(document.getElementById('n1').value)
    let num2 = parseFloat(document.getElementById('n2').value)
    let oper = document.getElementById('operators').value
    if (oper === '+') {
        document.getElementById('result').value = num1 + num2;
    }
    if (oper === '-') {
        document.getElementById('result').value = num1 - num2;
    }
    if (oper === '/') {
        document.getElementById('result').value = num1 / num2;
    }
    if (oper === 'x') {
        document.getElementById('result').value = num1 * num2;
    }
}