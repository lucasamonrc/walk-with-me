/* Scripture of the day functionality */
axios.get("https://beta.ourmanna.com/api/v1/get/?format=json")
  .then(res => {
    renderScripture(res.data);
  })
  .catch(err => renderScripture(err.message));

const scriptureEl = document.querySelector("#scripture");
const scriptureRefEl = document.querySelector("#scripture-reference");

function renderScripture(data) {
  const { reference, text} = data.verse.details;  
  scriptureEl.innerText = text;
  scriptureRefEl.innerText = `- ${reference}`;
}

/* Your Progress persistent checks functionality */
const checkboxes = document.querySelector('.checkboxes');

checkboxes.addEventListener("click", event => {
  let id = event.target.id;
  boxClicked(id);
});

function boxClicked(id) {
  let box;
  try {
    box = document.querySelector(`#${id}`);    
    renderBox(box.checked.toString(), id);
    saveState(box);
  } catch (err) {}
}

function renderBox(state, element) {
  if (state == 'true') { 
    document.querySelector(`label[for='${element}']`).classList.add("step-complete");
  } else {
    document.querySelector(`label[for='${element}']`).classList.remove("step-complete");
  }
}

function saveState(box) {
  localStorage.setItem(box.id, box.checked.toString());
}

function loadStates() {
  const keys = ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'];

  for (let key of keys) {
    renderBox(localStorage.getItem(key), key);
    document.getElementById(key).checked = localStorage.getItem(key) === "true" ? true : false;
  }
}

loadStates();