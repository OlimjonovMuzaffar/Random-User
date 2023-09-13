"use strict";

let darkIcon = document.querySelector(".dark");
let lightIcon = document.querySelector(".light");
let deleteBtn = document.querySelector(".delete");
let form = document.querySelector("form");
let refreshBtn = document.getElementById("refresh");

refreshBtn.addEventListener("click", (e) => {
  e.preventDefault();
  apiData();
});

let darkmodee = localStorage.getItem("mode");

if (darkmodee) {
  document.body.classList.add("dark--mode");
  lightIcon.classList.remove("hidden");
  darkIcon.classList.add("hidden");
}

darkIcon.addEventListener("click", () => {
  darkMode();
  localStorage.setItem("dark--mode");
});

lightIcon.addEventListener("click", () => {
  lightMode();
});

let darkMode = () => {
  document.body.classList.add("dark--mode");
  lightIcon.classList.remove("hidden");
  darkIcon.classList.add("hidden");
  localStorage.setItem("mode", "dark--mode");
};

let lightMode = () => {
  document.body.classList.remove("dark--mode");
  lightIcon.classList.add("hidden");
  darkIcon.classList.remove("hidden");
  localStorage.setItem("mode", "");
};

//api dan malumot olib kelish

let main = document.querySelector(".main");

let getUpdate = (data) => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let { name, picture, location, gender } = data[i];
    main.innerHTML += ` 
    <li>
          <div class="item1">
            <img width="100" height="100" src="${picture.large}" alt="" />
            <h4 class="name__el">${name.first}</h4>
            <span>${location.country}</span>
            <h4>${gender}</h4>

          </div>
        </li>
`;
  }
};

let inpEl = document.querySelector("input");
let clearEl = document.querySelector("#clear");

clearEl.addEventListener("click", (e) => {
  e.preventDefault();
  main.classList.toggle("hidden");
});

inpEl.addEventListener("input", () => {
  const inpValue = inpEl.value.toLowerCase();
  let name = document.querySelectorAll(".name__el");

  name.forEach((item) => {
    if (item.textContent.toLowerCase().includes(inpValue)) {
      item.parentElement.classList.remove("hidden");
    } else {
      item.parentElement.classList.add("hidden");
    }
  });
});
