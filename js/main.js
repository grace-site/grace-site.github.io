//open dropdown menu when click "Project"
function toggleDropdown() {
        document.querySelector('.dropdown-items').classList.toggle("dropdown-items-active");
        console.log("toggle");
}
//close dropdown menu when click outside of "Project" or dropdown menu
window.onclick = function(event) {
        if (!event.target.closest('.dropdown-wrapper')) {
            if (document.querySelector('.dropdown-items').classList.contains('dropdown-items-active')) {
                document.querySelector('.dropdown-items').classList.remove('dropdown-items-active');
                console.log("remove");
            }
        }
      }

//toggle "responsive" class to right-side nav when user clicks menu icon
function toggleMenu(){
        document.querySelector('.right-side').classList.toggle("responsive");
}

//add icon from library
feather.replace();

//go back history, or load main page function

function backpage(){
        //if there is history and it is in the same domain
        if(window.history.length > 1 && 
        document.referrer.indexOf(window.location.host) !== -1) {
                //if the previous page is another project, go back to genre
                if (document.referrer.indexOf("/projects/") !== -1){
                        document.location.href="/";
                } else { //otherwise backpage
                        window.history.back();
                }       
        }
        else { //otherwise homepage
                document.location.href="/";
        }
}

