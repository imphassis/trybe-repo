let headerContainer = document.querySelector('#header-container');
headerContainer.style.color = 'white';
headerContainer.style.backgroundColor = '#01B069';
let body = document.querySelector('body');
body.style.backgroundColor = '#F3F3F3';

const footerContainer = document.querySelector('#footer-container');
footerContainer.style.backgroundColor = '#003533';
footerContainer.style.color = 'white';

const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = '#FF9F84';

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#F9DB5E';

const emergencyDivs = document.querySelectorAll('.emergency-tasks h3');

for (let i = 0; i < emergencyDivs.length; i += 1) {
  emergencyDivs[i].style.color = 'white';
  emergencyDivs[i].style.backgroundColor = '#A500F3';
}

const noEmergencyDivs = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i < emergencyDivs.length; i += 1) {
  noEmergencyDivs[i].style.color = 'white';
  noEmergencyDivs[i].style.backgroundColor = '#232525';
}
