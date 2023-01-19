const tableArea = document.getElementById("table-area");
const startButton = document.getElementById("double-loop-start");
const kukuTable = document.createElement("table");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// create table
// add class "table"
kukuTable.setAttribute("class", "table");

// create head
// loop 
//   add th
const thead = document.createElement("thead");
const trHead = document.createElement("tr");

// <th>#</th>
const th = document.createElement("th");
th.setAttribute("scope", "col");
th.setAttribute("id", "horizontal-#");
th.innerText = "#";
trHead.appendChild(th);

// loop
// <th>i</th>
for (let i=1; i<=9; i++) {
  const th = document.createElement("th");
  th.setAttribute("scope", "col");
  th.setAttribute("id", "horizontal-" + String(i));
  th.innerText = String(i);
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
  const th = document.createElement("th");
  th.setAttribute("scope", "col");
  th.setAttribute("id", "vertical-" + String(i));
  th.innerText = String(i);
  tr.appendChild(th);
  for (let j=1; j<=9; j++) {
    const th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.setAttribute("id", String(i) + "-" + String(j));
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

  const numberI = document.getElementById("vertical-" + String(i));
  numberI.setAttribute("class", "bg-primary");
  
  const numberJ = document.getElementById("horizontal-" + String(j));
  numberJ.setAttribute("class", "bg-primary");

  const prevJ = j == 1 ? 9 : j-1;
  const numberPrevJ = document.getElementById("horizontal-" + String(prevJ));
  numberPrevJ.setAttribute("class", "bg-white");

  if (j == 1 & i != 1) {
    const numberPrevI = document.getElementById("vertical-" + String(i-1));
    numberPrevI.setAttribute("class", "bg-white");
  }
  
  if (j < 9) {
    j++;
  } else if (i < 9) {
    i++;
    j=1;
  }
}
