let text, date;
let Goal = JSON.parse(localStorage.getItem('Goal')) || [];
let Mistake = JSON.parse(localStorage.getItem('Mistake')) || [];

function Add(type) {
    if (type === 'Goal') {
        text = document.querySelector('.Goal-Text').value;
        date = document.querySelector('.Goal-Date').value;
        Goal.push({ text, date });
        localStorage.setItem('Goal', JSON.stringify(Goal));
    } else {
        text = document.querySelector('.Mistake-Text').value;
        date = document.querySelector('.Mistake-Date').value;
        Mistake.push({ text, date });
        localStorage.setItem('Mistake', JSON.stringify(Mistake));
    }

    Render();
    ClearInputs();
}

function Render() {
    let GoalHTML = '';
    let MistakeHTML = '';

    for (let i = 0; i < Goal.length; i++) {
        GoalHTML += `
            <div class="Output">
                <p style="margin-left: 12px; margin-right: 10px">${Goal[i].text}</p>
                <p style="margin-left: 10px; margin-right: 10px">${Goal[i].date}</p>
                <button onclick="RemoveItem('Goal', ${i})">Remove</button>
            </div>
        `;
    }

    for (let i = 0; i < Mistake.length; i++) {
        MistakeHTML += `
            <div class="Output">
                <p style="margin-left: 12px; margin-right: 10px">${Mistake[i].text}</p>
                <p style="margin-left: 10px; margin-right: 10px">${Mistake[i].date}</p>
                <button onclick="RemoveItem('Mistake', ${i})">Remove</button>
            </div>
        `;
    }

    document.querySelector('.Improvement-result').innerHTML = GoalHTML;
    document.querySelector('.Mistake-result').innerHTML = MistakeHTML;
}

function RemoveItem(type, index) {
    if (type === 'Goal') {
        Goal.splice(index, 1);
        localStorage.setItem('Goal', JSON.stringify(Goal));
    } else {
        Mistake.splice(index, 1);
        localStorage.setItem('Mistake', JSON.stringify(Mistake));
    }
    Render();
}

function ClearInputs() {
    document.querySelector('.Goal-Text').value = '';
    document.querySelector('.Goal-Date').value = '';
    document.querySelector('.Mistake-Text').value = '';
    document.querySelector('.Mistake-Date').value = '';
}

Render();
