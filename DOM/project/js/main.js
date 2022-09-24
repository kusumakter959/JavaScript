
const milestonesData = JSON.parse(data).data;

// load course milestonesData
// console.log(milestonesData);

function loadMildtones(){
  const milestones = document.querySelector('.milestones');
  // milestones.innerHTML = milestonesData.join('');
  milestones.innerHTML = `${milestonesData.map(function(milestone){
    return `<div class="milestone border-b" id="${milestone._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick="markMilstone(this, ${milestone._id})"/></div>
      <div onclick="openMilestone(this, ${milestone._id})">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
      ${milestone.modules
        .map(function(module){
          return `<div class='module border-b'>
            ${module.name}
            </div>
          `
      }).join("")}
      
    </div>
  </div>`
  }).join("")}`;

  // console.log(milestonesData);
}

function openMilestone(milestoneElement, id){
  const currentPanel = milestoneElement.parentNode.nextElementSibling;
  const shownPanel = document.querySelector(".show");

//first hide previous panel of open[other than the click element]
  if(!currentPanel.classList.contains("show") && shownPanel){
    shownPanel.classList.remove("show");
  }
  //toggle current clicked one

  currentPanel.classList.toggle("show");

  // first remove previous active class if any [other than click one]
  const activeP = document.querySelector(".active");
  if(activeP && !milestoneElement.classList.contains('active')){
    activeP.classList.remove("active");
  }
  milestoneElement.classList.toggle("active");

  shownMailstone(id);
}
 
function shownMailstone(id){
  const milestoneImage = document.querySelector(".milestoneImage");
  const name = document.querySelector('.title');
  const details = document.querySelector('.details');

  milestoneImage.style.opacity = "0"

  milestoneImage.src = milestonesData[id].image;
  name.innerText = milestonesData[id].name;
  details.innerText = milestonesData[id].description;
}

const milestoneImage = document.querySelector(".milestoneImage");
  milestoneImage.onload = function(){
  this.style.opacity = "1";
}

function markMilstone(checkbox,id){
  const doneList = document.querySelector(".doneList");
  const milestonesList = document.querySelector(".milestones");
  const item = document.getElementById(id);


  if(checkbox.checked){
    // mark aad done
    milestonesList.removeChild(item);
    doneList.appendChild(item);
  }else{
    // back to main list
    milestonesList.appendChild(item);
    doneList.removeChild(item);
  }

}
loadMildtones();