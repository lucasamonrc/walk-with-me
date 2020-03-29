/* Button Map */
const check1 = document.querySelector("#week-1");
const link1 = document.querySelector("#link1");

const check2 = document.querySelector("#week-2");
const link2 = document.querySelector("#link2");

const check3 = document.querySelector("#week-3");
const link3 = document.querySelector("#link3");

const check4 = document.querySelector("#week-4");
const link4 = document.querySelector("#link4");

const check5 = document.querySelector("#week-5");
const link5 = document.querySelector("#link5");

const check6 = document.querySelector("#week-6");
const link6 = document.querySelector("#link6");

/* Check on Local Storage */
if (localStorage.getItem("check1") === "true") {
  check1.checked = true;
  link1.classList.add("done");
}

if (localStorage.getItem("check2") === "true") {
  check2.checked = true;
  link2.classList.add("done");
}

if (localStorage.getItem("check3") === "true") {
  check3.checked = true;
  link3.classList.add("done");
}

if (localStorage.getItem("check4") === "true") {
  check4.checked = true;
  link4.classList.add("done");
}

if (localStorage.getItem("check5") === "true") {
  check5.checked = true;
  link5.classList.add("done");
}

if (localStorage.getItem("check6") === "true") {
  check6.checked = true;
  link6.classList.add("done");
}

/* Event Listeners */
check1.addEventListener("click", () => {
  link1.classList.toggle("done");
  localStorage.setItem("check1", link1.classList.contains("done"));
});

check2.addEventListener("click", () => {
  link2.classList.toggle("done");
  localStorage.setItem("check2", link2.classList.contains("done"));
});

check3.addEventListener("click", () => {
  link3.classList.toggle("done");
  localStorage.setItem("check3", link3.classList.contains("done"));
});

check4.addEventListener("click", () => {
  link4.classList.toggle("done");
  localStorage.setItem("check4", link4.classList.contains("done"));
});

check5.addEventListener("click", () => {
  link5.classList.toggle("done");
  localStorage.setItem("check5", link5.classList.contains("done"));
});

check6.addEventListener("click", () => {
  link6.classList.toggle("done");
  localStorage.setItem("check6", link6.classList.contains("done"));
});

/* Scripture of the day functionality */
const scripture = document.querySelector("div.day-scripture p");

function renderScripture(data) {
  scripture.innerHTML =
    data.verse.details.text + "<br> - " + data.verse.details.reference;
}

axios
  .get("https://beta.ourmanna.com/api/v1/get/?format=json")
  .then(function(response) {
    renderScripture(response.data);
  })
  .catch(() => (scripture.innerHTML = "Error in retrieving the scripture"));
