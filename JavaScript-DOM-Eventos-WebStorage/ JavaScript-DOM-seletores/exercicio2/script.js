const header = document.querySelector('#header-container');
header.style.background = 'rgb(0, 176, 105)';
header.style.color = 'white';


const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.background = 'rgb(255, 159, 132)';

const emergencyTasksTitle = document.querySelectorAll('.emergency-tasks div h3');
for (let index = 0; index < emergencyTasksTitle.length; index += 1) {
    emergencyTasksTitle[index].style.background =  'rgb(165, 0, 243)';
    emergencyTasksTitle[index].style.color =  'white';
}

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.background = 'rgb(249, 219, 94)';


const noEmergencyTasksTitle = document.querySelectorAll('.no-emergency-tasks div h3');
for (let index = 0; index < noEmergencyTasksTitle.length; index += 1) {
    noEmergencyTasksTitle[index].style.background =  'rgb(35, 37, 37';
    noEmergencyTasksTitle[index].style.color =  'white';
}

const footer = document.getElementById('footer-container');
footer.style.background = 'rgb(0, 53, 51)';
footer.style.color = 'white';
