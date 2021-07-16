document.addEventListener('scroll', function () {
    let nav = document.getElementById("mainnav");
    nav.classList.toggle('scrolling-active', window.scrollY > 0,);
    if (window.scrollY > 0) {
        deleteHours();
    } else {
        createHours();
    }
})

function deleteHours() {
    //find and delete hours and location divs
    let hours = document.getElementById('hours');
    let location = document.getElementById('location');
    hours.remove();
    location.remove();
    //change sizing on div
    let links = document.getElementById('links');
    links.classList.remove('col-4');
    links.classList.add('col-12');
    links.classList.remove('row');
    links.classList.add('col');
    let name = document.getElementById("name");
    name.classList.add("col-6");
}
//Maybe I need to write a function that manually writes and deletes that info up top.
function createHours() {
    //change sizing on div
    let links = document.getElementById('links');
    links.classList.add('col-4');
    links.classList.remove('col-12');
    links.classList.add('row');
    links.classList.remove('col');
    //create hours
    let hours = document.createElement('div');
    console.log("hours created");
    let navtop = document.getElementById("navtop");
    hours.setAttribute("id", "hours");
    navtop.prepend(hours);
    hours.innerHTML = "<p class='text-center montfont'> Monday-Saturday <br> 10:45am-2:30pm* <br><i>*OR UNTIL WE SELL OUT</i></p>";
    hours.classList.add('col-4', 'row', 'align-items-center');
    //create location
    let location = document.createElement('div');
    location.setAttribute("id", "location");
    navtop.appendChild(location);
    location.innerHTML = '<p class="text-center montfont">289 Hanover St.,<br>Boston, MA 02113</p>';
    location.classList.add('col-4', 'row', 'align-items-center');
    let name = document.getElementById("name");
    name.classList.remove("col-6");
}