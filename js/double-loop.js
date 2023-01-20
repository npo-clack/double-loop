const tableArea = document.getElementById("table-area");
const startButton = document.getElementById("double-loop-start");
const iIndexArea = document.getElementById("i-index-area");
const jIndexArea = document.getElementById("j-index-area");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// initialize table
const kukuTable = createTable(numbers);
tableArea.appendChild(kukuTable);

// set action
startButton.onclick = () => {
  // tableArea.removeChild(tableArea.firstChild);
  // const kukuTable = createTable(numbers);
  // tableArea.appendChild(kukuTable);
  let j = 0;
  let i = 0;
  const calcId = setInterval(
    () => {
      calculate(i, j);
      
      if (j < numbers.length-1) {
        j++;
      } else if (i < numbers.length-1) {
        i++;
        j=0;
      } else {
        clearInterval(calcId);
      }
    }, 10);
  }


// functions
// -----------
// create table
function createTable(numbers) {
  const kukuTable = document.createElement("table");
  kukuTable.setAttribute("class", "table");
  
  // create head
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  // <th>#</th>
  const th = createTh("horizontal-#", "a[i] \\ a[j]");
  trHead.appendChild(th);
  // loop
  // <th>i</th>
  for (let i=0; i<numbers.length; i++) {
    const th = createTh("horizontal-" + String(numbers[i]), String(numbers[i]));
    trHead.appendChild(th);
  }
  thead.appendChild(trHead);
  kukuTable.appendChild(thead);
  
  // create tbody
  const tbody = document.createElement("tbody");
  for (let i=0; i<numbers.length; i++) {
    const tr = document.createElement("tr");
    const th = createTh("vertical-" + String(numbers[i]), String(numbers[i]));
    tr.appendChild(th);
    for (let j=0; j<numbers.length; j++) {
      const th = createTh(String(numbers[i]) + "-" + String(numbers[j]));
      tr.appendChild(th);
    }
    tbody.appendChild(tr);
  }
  kukuTable.appendChild(tbody);

  return kukuTable;
}

function createTh(id, innerText="") {
  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.setAttribute("class", "col-1");
  th.innerText = innerText;
  th.setAttribute("id", id);
  return th
}

// calculate i*j and show
function calculate(i, j) {
  const result = document.getElementById(String(numbers[i]) + "-" + String(numbers[j]));
  console.log(String(numbers[i]) + "-" + String(numbers[j]));
  result.innerText = numbers[i]*numbers[j];
  
  // colorize current number 
  document.getElementById("vertical-" + String(numbers[i])).setAttribute("class", "bg-secondary");
  document.getElementById("horizontal-" + String(numbers[j])).setAttribute("class", "bg-secondary");
  
  // decolorize previous number
  const prevJ = j == 0 ? numbers.length-1 : j-1;
  document.getElementById("horizontal-" + String(numbers[prevJ])).setAttribute("class", "bg-white");
  if (j == 0 & i != 0) {
    document.getElementById("vertical-" + String(numbers[i-1])).setAttribute("class", "bg-white");
  }
  
  // 
  iIndexArea.innerText = "i=" + String(i);
  jIndexArea.innerText = "j=" + String(j);
}
