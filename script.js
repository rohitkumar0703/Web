function showDashboard() {
    document.getElementById('content').innerHTML = '<h2>Into Of my project my name is</h2>';
}

function showProject() {
    document.getElementById('content').innerHTML = '<h2>Project Details</h2>';
}
function showSchedule() {
    document.getElementById('content').innerHTML = '<h2>Meeting Game</h2>';
}
function showTeammembers() {
    document.getElementById('content').innerHTML = '<h2>Team Members Details</h2>';
}
function showWork() {
    document.getElementById('content').innerHTML = '<h2>What work you have given</h2>';
}



const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    });

    searchBtn.addEventListener("click", () =>{
        sidebar.classList.remove("close");
    });

    modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText,innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
    });
