// === GERENCIAR TEMAS ===
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    applyTheme(theme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// === FUNÇÕES DE CÁLCULO ===
function setResult(resultId, value) {
    const resultDisplay = document.getElementById(resultId);
    if (value === '' || value === null) {
        resultDisplay.classList.remove('active');
    } else {
        const span = resultDisplay.querySelector('span');
        span.textContent = value;
        resultDisplay.classList.add('active');
    }
}

function calculate1() {
    const percent = parseFloat(document.getElementById('percent1').value);
    const value = parseFloat(document.getElementById('value1').value);
    if (isNaN(percent) || isNaN(value)) {
        setResult('result1', '');
        return;
    }
    const result = (percent / 100) * value;
    setResult('result1', result.toFixed(2));
}

function calculate2() {
    const value = parseFloat(document.getElementById('value2').value);
    const total = parseFloat(document.getElementById('total2').value);
    if (isNaN(value) || isNaN(total) || total === 0) {
        setResult('result2', '');
        return;
    }
    const result = (value / total) * 100;
    setResult('result2', result.toFixed(2) + '%');
}

function calculate3() {
    const initial = parseFloat(document.getElementById('initial3').value);
    const final = parseFloat(document.getElementById('final3').value);
    if (isNaN(initial) || isNaN(final) || initial === 0) {
        setResult('result3', '');
        return;
    }
    const result = ((final - initial) / initial) * 100;
    setResult('result3', result.toFixed(2) + '%');
}

function calculate4() {
    const initial = parseFloat(document.getElementById('initial4').value);
    const final = parseFloat(document.getElementById('final4').value);
    if (isNaN(initial) || isNaN(final) || initial === 0) {
        setResult('result4', '');
        return;
    }
    const result = ((initial - final) / initial) * 100;
    setResult('result4', result.toFixed(2) + '%');
}

function calculate5() {
    const part = parseFloat(document.getElementById('part5').value);
    const total = parseFloat(document.getElementById('total5').value);
    if (isNaN(part) || isNaN(total) || total === 0) {
        setResult('result5', '');
        return;
    }
    const result = (part / total) * 100;
    setResult('result5', result.toFixed(2) + '%');
}

function calculate6() {
    const value = parseFloat(document.getElementById('value6').value);
    const percent = parseFloat(document.getElementById('percent6').value);
    if (isNaN(value) || isNaN(percent)) {
        setResult('result6', '');
        return;
    }
    const result = value * (1 + percent / 100);
    setResult('result6', result.toFixed(2));
}

function calculate7() {
    const value = parseFloat(document.getElementById('value7').value);
    const percent = parseFloat(document.getElementById('percent7').value);
    if (isNaN(value) || isNaN(percent)) {
        setResult('result7', '');
        return;
    }
    const result = value * (1 - percent / 100);
    setResult('result7', result.toFixed(2));
}

function calculate8() {
    const percent = parseFloat(document.getElementById('percent8').value);
    const final = parseFloat(document.getElementById('final8').value);
    if (isNaN(percent) || isNaN(final) || percent === -100) {
        setResult('result8', '');
        return;
    }
    const result = final / (1 + percent / 100);
    setResult('result8', result.toFixed(2));
}

function calculate9() {
    const percent = parseFloat(document.getElementById('percent9').value);
    const final = parseFloat(document.getElementById('final9').value);
    if (isNaN(percent) || isNaN(final) || percent === 100) {
        setResult('result9', '');
        return;
    }
    const result = final / (1 - percent / 100);
    setResult('result9', result.toFixed(2));
}

// Adicionar event listeners para Enter nos inputs
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar tema
    initializeTheme();
    
    // Adicionar event listener ao botão de tema
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
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