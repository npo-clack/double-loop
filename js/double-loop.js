const tableArea = document.getElementById("table-area");
const startButton = document.getElementById("double-loop-start");
const iIndexArea = document.getElementById("i-index-area");
const jIndexArea = document.getElementById("j-index-area");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// create table
const kukuTable = document.createElement("table");
kukuTable.setAttribute("class", "table");

// create head
// loop 
//   add th
const thead = document.createElement("thead");
const trHead = document.createElement("tr");

// <th>#</th>
const th = createTh("horizontal-#", "i \\ j");
trHead.appendChild(th);

// loop
// <th>i</th>
for (let i=1; i<=9; i++) {
  const th = createTh("horizontal-" + String(i), String(i));
  trHead.appendChild(th);
}
thead.appendChild(trHead);

kukuTable.appendChild(thead);

// create tbody
// loop 
//  create tr
//  add th
//    loop
//      add td, id "i-j"
const tbody = document.createElement("tbody");
for (let i=1; i<=9; i++) {
  const tr = document.createElement("tr");
  const th = createTh("vertical-" + String(i), String(i));
  tr.appendChild(th);
  for (let j=1; j<=9; j++) {
    const th = createTh(String(i) + "-" + String(j));
    tr.appendChild(th);
  }
  tbody.appendChild(tr);
}
kukuTable.appendChild(tbody);

tableArea.appendChild(kukuTable);




// add component
startButton.onclick = () => {
  if (i < 9 & j <9){
    setInterval(calculate, 300);
  }
}

let i = 1;
let j = 1;
calculate = () => {
  const result = document.getElementById(String(i) + "-" + String(j));
  console.log(String(i) + "-" + String(j));
  result.innerText = i*j;

  // colorize current number 
  document.getElementById("vertical-" + String(i)).setAttribute("class", "bg-primary");
  document.getElementById("horizontal-" + String(j)).setAttribute("class", "bg-primary");

  // decolorize previous number
  const prevJ = j == 1 ? 9 : j-1;
  document.getElementById("horizontal-" + String(prevJ)).setAttribute("class", "bg-white");
  if (j == 1 & i != 1) {
    document.getElementById("vertical-" + String(i-1)).setAttribute("class", "bg-white");
  }

  // 
  iIndexArea.innerText = "i=" + String(i);
  jIndexArea.innerText = "j=" + String(j);
  
  if (j < 9) {
    j++;
  } else if (i < 9) {
    i++;
    j=1;
  }
}


// utility functions
function createTh(id, innerText="") {
  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.setAttribute("class", "col-1");
  th.innerText = innerText;
  th.setAttribute("id", id);
  return th
}