class Skill {
    constructor(name, skillLevel, experience, education){
        this.name = name;
        this.skillLevel = skillLevel;
        this.experience = experience;
        this.education = education;
    }
}

const skillLevel_advanced = "Advanced";
const skillLevel_intermediate = "Intermediate";
const skillLevel_beginner = "Beginner";

const educationType_onTheJob = "Learned On The Job";
const educationType_selfTaught = "Self Taught";
const educationType_udemy = "Learned Through Udemy";
const educationType_hamline = "Learned At Hamline";

let languageSkills = [];
languageSkills.push( new Skill("C#", skillLevel_advanced, "4.5 years - Professional", educationType_onTheJob));
languageSkills.push( new Skill("T-SQL", skillLevel_advanced, "4.5 years - Professional", educationType_onTheJob));
languageSkills.push( new Skill("MARK DOWN", skillLevel_advanced, "5 years - Professional", educationType_onTheJob));
languageSkills.push( new Skill("CLARION", skillLevel_advanced, "4.5 years - Professional", educationType_onTheJob));
languageSkills.push( new Skill("AHK", skillLevel_advanced, "4.5 years - Professional", educationType_onTheJob));
languageSkills.push( new Skill("XAML", skillLevel_intermediate, "2 years - Professional", educationType_onTheJob));
languageSkills.push( new Skill("HTML", skillLevel_intermediate, "2ish years", educationType_hamline));
languageSkills.push( new Skill("CSS", skillLevel_intermediate, "2ish years", educationType_hamline));
languageSkills.push( new Skill("Java Script", skillLevel_intermediate, "2ish years", educationType_hamline));
languageSkills.push( new Skill("Java", skillLevel_beginner, ".5 years", educationType_hamline));
languageSkills.push( new Skill("C", skillLevel_beginner, ".5 years", educationType_hamline));
languageSkills.push( new Skill("Python", skillLevel_beginner, ".5 years", educationType_onTheJob));
languageSkills.push( new Skill("C++", skillLevel_beginner, "3 years", educationType_hamline));
languageSkills.push( new Skill("Mongo", skillLevel_beginner, ".1 years", educationType_udemy));

let skillsContentInnerHTML = `
<div class="jumbotron">
    <h2>Languages</h2>
</div>


<div class="container">
    <div class="row align-items-center justify-content-center">
    `;

    languageSkills.forEach(function(languageSkill){
        skillsContentInnerHTML += `
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${languageSkill.name}</h5>
                    <h6 class="card-subtitle mb-2">${languageSkill.skillLevel} Knowledge</h6>
                    <h6 class="card-subtitle mb-2">${languageSkill.experience}</h6>
                    <h6 class="card-subtitle mb-2">${languageSkill.education}</h6>
                </div>
            </div>
        </div>
        `
    })
        

skillsContentInnerHTML += `
    </div>
</div>
`;


let technologySkills = []
technologySkills.push( new Skill("WINDOWS", skillLevel_advanced, "20+ years - Professional", educationType_selfTaught));
technologySkills.push( new Skill("Microsoft Office", skillLevel_advanced, "20+ years - Professional", educationType_selfTaught));
technologySkills.push( new Skill("Google Office", skillLevel_advanced, "5+ years - Professional", educationType_selfTaught));
technologySkills.push( new Skill("Libre Office", skillLevel_advanced, "3 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("SUBLIME", skillLevel_advanced, "4.5 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("Team Viewer", skillLevel_advanced, "4.5 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("Tech Support", skillLevel_advanced, "4.5 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("VISUAL CODE", skillLevel_advanced, "2 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("MSSQL", skillLevel_advanced, "4.5 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("GITHUB", skillLevel_advanced, "4.5 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("Coggle", skillLevel_advanced, "2 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("VISUAL STUDIOS (17, 19)", skillLevel_advanced, "3 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("NODE JS", skillLevel_intermediate, "2 years - Professional", educationType_onTheJob));
technologySkills.push( new Skill("Gitkraken", skillLevel_intermediate, ".3 years", educationType_onTheJob));
technologySkills.push( new Skill("AWS", skillLevel_beginner, "1 year - Professional", educationType_onTheJob));
technologySkills.push( new Skill("Eclipse", skillLevel_beginner, ".5 years", educationType_hamline));
technologySkills.push( new Skill("Jquery", skillLevel_beginner, ".2 years", educationType_udemy));
technologySkills.push( new Skill("Bootstrap 3", skillLevel_beginner, ".2 years", educationType_udemy));
technologySkills.push( new Skill("Bootstrap 4", skillLevel_beginner, ".2 years", educationType_udemy));
technologySkills.push( new Skill("NodeJS - Express", skillLevel_beginner, "2 years - Professional", educationType_udemy));
technologySkills.push( new Skill("NodeJS - dotenv", skillLevel_beginner, ".2 years", educationType_udemy));
technologySkills.push( new Skill("NodeJS - ejs", skillLevel_beginner, ".2 years", educationType_udemy));
technologySkills.push( new Skill("NodeJS - method-override", skillLevel_beginner, ".2 years", educationType_udemy));
technologySkills.push( new Skill("NodeJS - mongoose", skillLevel_beginner, ".2 years", educationType_udemy));
technologySkills.push( new Skill("NodeJS - passport", skillLevel_beginner, ".2 years", educationType_udemy));
technologySkills.push( new Skill("GIT", skillLevel_beginner, ".1 years", educationType_udemy));
technologySkills.push( new Skill("Wix", skillLevel_beginner, ".1 years", educationType_selfTaught));

skillsContentInnerHTML += `
<div class="jumbotron">
    <h2>Technology</h2>
</div>


<div class="container">
    <div class="row align-items-center justify-content-center">
    `;

    technologySkills.forEach(function(technologySkill){
        skillsContentInnerHTML += `
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${technologySkill.name}</h5>
                    <h6 class="card-subtitle mb-2">${technologySkill.skillLevel} Knowledge</h6>
                    <h6 class="card-subtitle mb-2">${technologySkill.experience}</h6>
                    <h6 class="card-subtitle mb-2">${technologySkill.education}</h6>
                </div>
            </div>
        </div>
        `
    })
        

skillsContentInnerHTML += `
    </div>
</div>
`;

document.querySelector("#skillsContent").innerHTML = skillsContentInnerHTML;