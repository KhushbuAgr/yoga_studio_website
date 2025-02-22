import teachersData from '../data/trainers.json' assert { type: "json" };
import managementData from '../data/management.json' assert { type: "json" };

import { renderTeamModal } from './teamModal.js';

export function renderTeam(contId) {

    var data = {}

    if(contId == "teamContainerTeachers") data = teachersData;
    if(contId == "teamContainerManagement") data = managementData;

    var container = document.getElementById(contId);
    var htmlContent = '';

    for (var i = 0; i < data.length; i++) {
        var card = `
            <div class="single-team" >
                <div class="thumb" data-toggle="modal" data-target="#teamModal-${i}">
                    <img class="img-fluid img-fluid-team" src=${data[i].img} alt="">
                    <div class="align-items-center justify-content-center d-flex team-overlay" data-toggle="modal" data-target="#teamPage">
                        <button class="team-sbutton">
                            Read More
                        </button>
                    </div>
                </div>
                <div class="meta-text mt-30 text-center">
                    <h4>${data[i].name}</h4>
                    <p>${data[i].desc}</p>
                </div>
            </div>
        `;
        htmlContent += card
        
    }
    container.innerHTML = htmlContent;
    
}