const container = document.querySelector("#container");
const header = document.createElement("h1");
header.textContent = "Multiplication Tables";
container.appendChild(header);
const table = document.createElement("table");
container.appendChild(table);

const min = 1;
const max = 10;

for (let i = min; i <= max; i++) {
  const trow = document.createElement("tr");
  table.appendChild(trow);

  for (let j = min; j <= max; j++) {
    buildTable(i, j);
  }
}

function buildTable(i, j) {
  const trowAll = document.querySelectorAll("tr");
  const trow = trowAll[trowAll.length - 1];
  const thead = document.createElement("th");
  const result = i * j;

  if (i === min) {
    thead.textContent = result;
    trow.appendChild(thead);
  } else if (j === min && i > min) {
    thead.textContent = result;
    trow.appendChild(thead);
  } else {
    const tdata = document.createElement("td");
    const input = document.createElement("input");
    input.classList.add('invalid');
    tdata.appendChild(input);

    input.addEventListener("input", () => {
      input.value == result ? input.classList.remove('invalid') : input.classList.add('invalid');
    });

    input.addEventListener('focus', () => {
      console.log(`${i} x ${j} focused`);
      trow.querySelector('th').classList.add('active');

      trowAll[0].querySelectorAll('th').forEach(th =>{
        if (th.textContent == j)  th.classList.add('active');
      });
    })

    input.addEventListener('blur', () => {
      console.log(`${i} x ${j} unfocused`);
      trow.querySelector('th').classList.remove('active');

      trowAll[0].querySelectorAll('th').forEach(th =>{
        if (th.textContent == j)  th.classList.remove('active');
      }); 
    })

    trow.appendChild(tdata);
  }
}
