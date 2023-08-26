


function moveTo(source, destination) {
    destination.appendChild(source);
}

function moveFirstChild(parent, destination) {
    firstChild = parent.firstElementChild;
    moveTo(firstChild, destination);
}


const subNav = document.getElementsByClassName('sub_top_nav_list')[0];
const topNavList = document.getElementsByClassName('top_nav_list')[0];

let breakpoints = ["1315px", "1169px"];
let passeds = [false, false];
let navCollapseBP = "992px";


if(window.matchMedia('(min-width:' + navCollapseBP + ')').matches) {
    document.getElementsByClassName('menu-toggle-btn')[0].style.display = "none";
    document.getElementsByTagName("header")[0].classList.add("uncollapsed");
}

if(window.matchMedia('(max-width:' + navCollapseBP + ')').matches) {
    topNavList.parentElement.style.display = 'none';

    for(let i = 0; i < breakpoints.length; i++) {
        if(!passeds[i]) {
            topNavList.appendChild(subNav.firstElementChild);
            topNavList.insertBefore(topNavList.lastElementChild, topNavList.lastElementChild.previousElementSibling);
            passeds[i] = true;
        }
    }

}


for(let i = 0; i < breakpoints.length; i++) {
    if(window.matchMedia('(min-width:' + breakpoints[i] +  ')').matches) {
        topNavList.appendChild(subNav.firstElementChild);
        topNavList.insertBefore(topNavList.lastElementChild, topNavList.lastElementChild.previousElementSibling);
        passeds[i] = true;

        if(subNav.childElementCount == 0) {
            subNav.parentElement.firstElementChild.style.display = 'none';
        }
    }
}



window.addEventListener('resize', () => {
    if(window.matchMedia('(min-width:' + navCollapseBP + ')').matches) {
        document.getElementsByTagName("header")[0].classList.add("uncollapsed");
        topNavList.parentElement.classList.remove('drop-mode');
        topNavList.parentElement.style.display = 'block';
        document.getElementsByClassName('menu-toggle-btn')[0].style.display = "none";
    }

    if(window.matchMedia('(max-width:' + navCollapseBP + ')').matches) {
        document.getElementsByTagName("header")[0].classList.remove("uncollapsed");
        document.getElementsByClassName('menu-toggle-btn')[0].style.display = "flex";
        topNavList.parentElement.style.display = 'none';
        for(let i = 0; i < breakpoints.length; i++) {
            if(!passeds[i]) {
                topNavList.appendChild(subNav.firstElementChild);
                topNavList.insertBefore(topNavList.lastElementChild, topNavList.lastElementChild.previousElementSibling);
                passeds[i] = true;
                if(subNav.childElementCount == 0) {
                    subNav.parentElement.firstElementChild.style.display = 'none';
                }
            }
        }
      
    
    }
    
    for(let i = 0; i < breakpoints.length; i++) {
        if(window.matchMedia('(min-width:' + breakpoints[i] +  ')').matches) {
            if(passeds[i]) {
                return;
            }

            topNavList.appendChild(subNav.firstElementChild);
            topNavList.insertBefore(topNavList.lastElementChild, topNavList.lastElementChild.previousElementSibling);
            passeds[i] = true;
            if(subNav.childElementCount == 0) {
                subNav.parentElement.firstElementChild.style.display = 'none';
            }
            return;
        }
    }
});


window.addEventListener('resize', () => {
    if(window.matchMedia('(max-width:' + navCollapseBP + ')').matches) {
        for(let i = 0; i < breakpoints.length; i++) {
            if(!passeds[i]) {
                topNavList.appendChild(subNav.firstElementChild);
                topNavList.insertBefore(topNavList.lastElementChild, topNavList.lastElementChild.previousElementSibling);
                passeds[i] = true;
                if(subNav.childElementCount == 0) {
                    subNav.parentElement.firstElementChild.style.display = 'none';
                }
            }
        }
        return;
    
    }
    
    for(let i = 0; i < breakpoints.length; i++) {
        if(window.matchMedia('(max-width:' + breakpoints[breakpoints.length - 1 - i] +  ')').matches) {
            if(passeds[breakpoints.length - 1 - i]) {
                subNav.appendChild(topNavList.lastElementChild.previousElementSibling);
                subNav.parentElement.firstElementChild.style.display = 'flex';
                subNav.insertBefore(subNav.lastElementChild, subNav.lastElementChild.previousElementSibling);
                passeds[breakpoints.length - 1 - i] = false;
                
            }
            
        }
    }

})


hamToggle = document.getElementById('menu-toggle');

hamToggle.addEventListener('click', () => {
    topNavList.parentElement.classList.toggle('drop-mode');
});