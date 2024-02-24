 const navli = [{
    licontext: 'Home'
},
{
    licontext: 'Project'
},
{
    licontext: 'About'
},
{
    licontext: 'Contact Us'
}
]
var ul = document.querySelector('ul')
navli.forEach((ele) => {
    // console.log(ele, "here");
    var li = document.createElement('li')
    li.innerHTML = `${ele.licontext}`
    ul.appendChild(li)
})

window.addEventListener('scroll',()=>{
    let nav=document.getElementById('navbar')
    let ul=document.getElementById('ul')

    var scrolled = window.scrollY;
    if (scrolled > 400) { 
      navbar.style.backgroundColor = "#8ab9df";
      nav.style.height='10vh'

    } else {
      navbar.style.backgroundColor = "rgb(243, 243, 243)"; // Back to initial color
      nav.style.height='12vh'
    }
  });

const div1= [
    {
        heading: "Summer House",
        src: "./img/house5.jpg"
    },
    {
        heading: "Brick House",
        src: "./img/house2.jpg"
    },
    {
        heading: "Renovated",
        src: "./img/house4.jpg"
    },
    {
        heading: "Barn House",
        src: "./img/house3.jpg"
    },
    {
        heading: "Summer House",
        src: "./img/house5.jpg"
    },
    {
        heading: "Brick House",
        src: "./img/house2.jpg"
    },
    {
        heading: "Renovated",
        src: "./img/house4.jpg"
    },
    {
        heading: "Barn House",
        src: "./img/house3.jpg"
    }
]

var project= document.getElementsByClassName('main')[0]
div1.forEach((ele) => {
    // console.log(ele, "here");
    var maindiv = document.createElement('div')
    maindiv.classList.add('sum')
    maindiv.classList.add('col-md-4')
    maindiv.classList.add('col-lg-3')
    maindiv.classList.add('col-sm-6')
    maindiv.classList.add('col-12')
    maindiv.innerHTML=`<h5 class="text-white bg-dark w-50 pe-3 ps-1">${ele.heading}</h5>
    `
maindiv.style.backgroundImage=`url(${ele.src})`
project.appendChild(maindiv)
})

let teamData = [
    {
        src: "./img/team2.jpg",
        Name: "John Doe",
        Data: "CEO & Founder",
        About: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum"
    },
    {
        src: "./img/team1.jpg",
        Name: "Jane Doe",
        Data: "Architects",
        About: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum"
    },
    {
        src: "./img/team3.jpg",
        Name: "Mike Ross",
      Data: "Architects",
        About: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum"
    },
    {
        src: "./img/team4.jpg",
        Name: "Dan Star",
        Data: "Architects",
        About: "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum"
    },
]

var team= document.getElementsByClassName('teamdiv')[0]
teamData.forEach((ele) => {
    // console.log(ele, "here");
    var tsecond = document.createElement('div')
    tsecond.classList.add('team')
    tsecond.classList.add('col-md-4')
    tsecond.classList.add('col-lg-3')
    tsecond.classList.add('col-sm-6')
    tsecond.classList.add('col-12')



    tsecond.innerHTML=`<img class="w-100 h-50" src="${ele.src}">
    <h5 class="pt-3 ps-2">${ele.Name}</h5>
    <h6 class="fw-normal ps-2 pt-1">${ele.Data}</h6>
    <P class="ps-2 pt-1"> ${ele.About}</p>
    <div class=" pb-5 col-12 d-flex justify-content-center">
    <button class="btn btn-secondary w-50" type="button">Contact</button>
</div>
    `;
    team.appendChild(tsecond);
})

function handlefunc() {
    let inputw = document.getElementById("inputwar").value;

    if (inputw === "") {
        alert('Enter the complete information');
    } else {
        alert('Thank you for your info, we will inform you soon');
        document.getElementById("inputwar").value = ''; 
        // Clear the input field
        let divshow = document.getElementById('mydiv')
        divshow.style.display = "block";
    }
}
setTimeout(handlefunc(), 5000);