let calculation = JSON.parse(localStorage.getItem('saveCalculation')) ||{
    value: ''
};
document.querySelector('.js-workspace').innerHTML = calculation.value

function updateWorkspace() {
    const workspace = document.querySelector('.js-workspace')
    localStorage.setItem('saveCalculation', JSON.stringify(calculation))
    workspace.innerHTML = calculation.value
}
