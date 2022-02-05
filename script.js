const backButton = document.getElementById('back-btn');
const clsoeButton = document.getElementById('model-close');
const model = document.getElementById('model');
const gotItButton = document.getElementById('got-it');
const continueButton = document.getElementById('continue');
const completedModel = document.getElementById('completed-model');
const mainWrapper = document.getElementById('wrapper');

backButton.addEventListener('click', () => {
    model.style.display = 'block';

})

clsoeButton.addEventListener('click', () => {
    model.style.display = 'none'
})


continueButton.addEventListener('click', () => {
    completedModel.style.display = 'block';
    model.style.display = 'none';
    mainWrapper.style.opacity = 0.1;
    
})

gotItButton.addEventListener('click', () => {
    completedModel.style.display = 'none';
    mainWrapper.style.opacity = 1;
})


