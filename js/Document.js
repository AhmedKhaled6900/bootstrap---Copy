//check local storage
let colorslist = document.querySelectorAll(".settings-container .colors li");
let selectedcolor = localStorage.getItem("main-color");

if (selectedcolor !== null) {
  document.documentElement.style.setProperty(
    "--main--color",
    localStorage.getItem("main-color")
  );
  colorslist.forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.color == selectedcolor) {
      ele.classList.add("active");
    }
  });
}

colorslist.forEach((li) => {
  li.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );

    //set color in lacal storage
    localStorage.setItem("main-color", e.target.dataset.color);

    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});
let gear = document.querySelector(".gear");
let settingsbox = document.querySelector(".settings-box");

gear.onclick = function () {
  settingsbox.classList.toggle("active");
  gear.classList.toggle("fa-spin");
  gear.classList.toggle("active");
};

//####################################
//####################################
//####################################
let background = document.querySelectorAll(".background-imgs img ");

let backgroundimgs = Array.from(background);

let selectedbackground = localStorage.getItem("mainbackground");

backgroundimgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    backgroundimgs.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    document.documentElement.style.setProperty(
      "--main--background",
      e.target.dataset.background
    );
    localStorage.setItem("mainbackground", e.target.dataset.background);
  });
});

if (selectedbackground !== null) {
  document.documentElement.style.setProperty(
    "--main--background",
    localStorage.getItem("mainbackground")
  );
  backgroundimgs.forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.background == selectedcolor) {
      ele.classList.add("active");
    }
  });
}
//####################################
//####################################
//####################################

let maintittle = document.querySelectorAll(".main-tittle");

let maintittlearray = Array.from(maintittle);
let ourservices = document.querySelector(".ourservices");
let navbar = document.querySelector(".navbar");

let frontendtext = document.querySelectorAll(".frontendtext");

let textarray = Array.from(frontendtext);
let arrow = document.querySelector(".arrow");
let textcontainer = document.querySelector(".textcontainer");
let backendtext = document.querySelectorAll(".backendtext");
let backendtextarray = Array.from(backendtext);
let backendtextcontainer = document.querySelector(".backendtextcontainer");
let ourgallary = document.querySelector(".ourgallary");
let navlinks = document.querySelectorAll(
  " .navbar .offcanvas .offcanvas-body ul li a"
);

let navlinksarray = Array.from(navlinks);
 
// handle nave menu closure ####

let canvas = document.querySelector(" .navbar .offcanvas")
console.log(canvas)
navlinksarray.map((btn=>
btn.addEventListener("click" ,()=> canvas.classList.remove("show"))
))
// navlinks.forEach((link)=>{
//   link.onclick(
//     ()=>canvas.classList.remove("show")

//   )
// })
let allsection = document.querySelectorAll(".section");
let section = Array.from(allsection);
let door = document.querySelector(".door");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
window.onscroll = () => {
  if (window.scrollY >= 650) {
    arrow.classList.add("active");
  } else arrow.classList.remove("active");
  if (window.scrollY >= 650) {
    navbar.classList.add("active");
  } else navbar.classList.remove("active");

  var current = "";
  var currenttittle = "";
  section.forEach((section) => {
    const sectionTop = section.offsetTop - 400;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navlinksarray.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.sec === "." + current) {
      li.classList.add("active");
    }
  });
  maintittlearray.forEach((tit) => {
    if (scrollY >= tit.offsetHeight) {
      if (tit.dataset.section === "." + current) {
        tit.classList.add("active");
      }
    } else tit.classList.remove("active");
  });
};

// Add and Remove Active Class to Links
//3###########################3
//3###########################3
//3###########################3
navlinksarray.forEach((link) => {
  link.addEventListener("click", (e) => {
    navlinksarray.forEach((e) => {
      e.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});

arrow.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

let taps = document.querySelectorAll(".taps li");

let tapsarray = Array.from(taps);
let projectstaps = document.querySelectorAll(".all div");
let tapssections=document.querySelectorAll(".tap-section")
console.log(tapssections)

tapsarray.forEach((tap)=>{
  tap.addEventListener("click",(e)=>{
    tapsarray.forEach((tap)=>{
      tap.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
    tapssections.forEach((div)=>{
      div.classList.remove("active")
    })
  })
})
gsap.to(".card",{y:-100,stagger:{
  ammounteach:.2
}})
// tapsarray.forEach((element) => {
//   element.addEventListener("click", function (e) {
//     tapsarray.forEach((element) => {
//       element.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");

//     projectstaps.forEach((div) => {
//       div.classList.remove("active");
//     });
//     photosarray.forEach((photo) => {
//       photo.classList.remove("active");
//       document.querySelector(e.currentTarget.dataset.content).classList.add("active");

//       document.querySelector(e.currentTarget.dataset.photo).classList.add("active");
//     });
//   });
// });

// let photos = document.querySelectorAll(".all-imgs .row");
// let photosarray = Array.from(photos);
// let sliders=document.querySelectorAll(".carousel")
// let slidersarray=Array.from(sliders)
// console.log(sliders)
// tapsarray.forEach((element) => {
//   element.addEventListener("click", function (e) {
//     tapsarray.forEach((element) => {
//       element.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");

//     projectstaps.forEach((div) => {
//       div.classList.remove("active");
//     });
//     //         document.querySelector(e.currentTarget.dataset.content)
//     //     .classList.add("active");
//     // // photosarray.forEach((photo) => {
//     // //   photo.classList.remove("active");
//     // //   document
//     //     // .querySelector(e.currentTarget.dataset.content)
//     //     // .classList.add("active");

//     // //   document
//     // //     .querySelector(e.currentTarget.dataset.photo)
//     // //     .classList.add("active");
//     // // });
//   });
// });

// get array from imgs
// let allimgs = Array.from(document.querySelectorAll(".cardcont1 img"));

// //select arrows
// let arrowup = document.querySelector(".uu");
// let arrowdown = document.querySelector(".dd");
// // get imags number
// let imgscount = allimgs.length;
// //set current index //cureent img
// let currentimg = 1;
// arrowup.onclick = up;
// arrowdown.onclick = down;
// function up() {

//  if(arrowup.classList.contains("disable")){
// return "false"
//  }
//  else(currentimg++)

//  thechecker()
//  console.log(currentimg)
// }
// function down() {
//   if(arrowdown.classList.contains("disable")){
//     return "false"
//      }
//      else(currentimg--)
//      thechecker()
// }







// function thechecker() {
//   removeactive();
  
//   allimgs[currentimg - 1].classList.add("active")


//   if (currentimg == allimgs.length) { 
//     arrowup.classList.add("disable");
//   } else arrowup.classList.remove("disable");
//   //check if the current img is the first
//   if (currentimg == 1) {
//     arrowdown.classList.add("disable");
//   } else arrowdown.classList.remove("disable");
// }
// thechecker();
// function removeactive() {
//   allimgs.forEach((ele) => {
//     ele.classList.remove("active");
//   });
// }



