function calculate1() {
    const percent = parseFloat(document.getElementById('percent1').value);
    const value = parseFloat(document.getElementById('value1').value);
    if (isNaN(percent) || isNaN(value)) {
        document.getElementById('result1').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    const result = (percent / 100) * value;
    document.getElementById('result1').textContent = `Resultado: ${result.toFixed(2)}`;
}

function calculate2() {
    const value = parseFloat(document.getElementById('value2').value);
    const total = parseFloat(document.getElementById('total2').value);
    if (isNaN(value) || isNaN(total) || total === 0) {
        document.getElementById('result2').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    const result = (value / total) * 100;
    document.getElementById('result2').textContent = `Resultado: ${result.toFixed(2)}%`;
}

function calculate3() {
    const initial = parseFloat(document.getElementById('initial3').value);
    const final = parseFloat(document.getElementById('final3').value);
    if (isNaN(initial) || isNaN(final) || initial === 0) {
        document.getElementById('result3').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    const result = ((final - initial) / initial) * 100;
    document.getElementById('result3').textContent = `Aumento: ${result.toFixed(2)}%`;
}

function calculate4() {
    const initial = parseFloat(document.getElementById('initial4').value);
    const final = parseFloat(document.getElementById('final4').value);
    if (isNaN(initial) || isNaN(final) || initial === 0) {
        document.getElementById('result4').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    const result = ((initial - final) / initial) * 100;
    document.getElementById('result4').textContent = `Diminuição: ${result.toFixed(2)}%`;
}

function calculate5() {
    const part = parseFloat(document.getElementById('part5').value);
    const total = parseFloat(document.getElementById('total5').value);
    if (isNaN(part) || isNaN(total) || total === 0) {
        document.getElementById('result5').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    const result = (part / total) * 100;
    document.getElementById('result5').textContent = `Resultado: ${result.toFixed(2)}%`;
}

function calculate6() {
    const value = parseFloat(document.getElementById('value6').value);
    const percent = parseFloat(document.getElementById('percent6').value);
    if (isNaN(value) || isNaN(percent)) {
        document.getElementById('result6').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    const result = value * (1 + percent / 100);
    document.getElementById('result6').textContent = `Resultado: ${result.toFixed(2)}`;
}

function calculate7() {
    const value = parseFloat(document.getElementById('value7').value);
    const percent = parseFloat(document.getElementById('percent7').value);
    if (isNaN(value) || isNaN(percent)) {
        document.getElementById('result7').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    const result = value * (1 - percent / 100);
    document.getElementById('result7').textContent = `Resultado: ${result.toFixed(2)}`;
}

function calculate8() {
    const percent = parseFloat(document.getElementById('percent8').value);
    const final = parseFloat(document.getElementById('final8').value);
    if (isNaN(percent) || isNaN(final) || percent === -100) {
        document.getElementById('result8').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    const result = final / (1 + percent / 100);
    document.getElementById('result8').textContent = `Valor inicial: ${result.toFixed(2)}`;
}

function calculate9() {
    const percent = parseFloat(document.getElementById('percent9').value);
    const final = parseFloat(document.getElementById('final9').value);
    if (isNaN(percent) || isNaN(final) || percent === 100) {
        document.getElementById('result9').textContent = 'Por favor, insira valores válidos.';
        return;
    }
    const result = final / (1 - percent / 100);
    document.getElementById('result9').textContent = `Valor inicial: ${result.toFixed(2)}`;
}

// Adicionar event listeners para Enter nos inputs
document.addEventListener('DOMContentLoaded', () => {
    // Seção 1
    const inputs1 = document.querySelectorAll('#percent1, #value1');
    inputs1.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate1();
            }
        });
    });

    // Seção 2
    const inputs2 = document.querySelectorAll('#value2, #total2');
    inputs2.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate2();
            }
        });
    });

    // Seção 3
    const inputs3 = document.querySelectorAll('#initial3, #final3');
    inputs3.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate3();
            }
        });
    });

    // Seção 4
    const inputs4 = document.querySelectorAll('#initial4, #final4');
    inputs4.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate4();
            }
        });
    });

    // Seção 5
    const inputs5 = document.querySelectorAll('#part5, #total5');
    inputs5.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate5();
            }
        });
    });

    // Seção 6
    const inputs6 = document.querySelectorAll('#value6, #percent6');
    inputs6.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate6();
            }
        });
    });

    // Seção 7
    const inputs7 = document.querySelectorAll('#value7, #percent7');
    inputs7.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate7();
            }
        });
    });

    // Seção 8
    const inputs8 = document.querySelectorAll('#percent8, #final8');
    inputs8.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate8();
            }
        });
    });

    // Seção 9
    const inputs9 = document.querySelectorAll('#percent9, #final9');
    inputs9.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                calculate9();
            }
        });
    });
});