const tooniimashin = document.getElementById("tooniimashin");
const value = document.createElement("div");
value.innerHTML = "0";
tooniimashin.appendChild(value);

let nuumber1 = "";
let temdeggg = "";
let nuumber2 = "";

for (let i = 0; i <= 9; i++) {
  const tooniimashinButton = document.createElement("button");
  tooniimashinButton.innerHTML = i;

  tooniimashin.appendChild(tooniimashinButton);

  tooniimashinButton.addEventListener("click", function () {
    if (temdeggg === "") {
      nuumber1 = nuumber1 + i;
      value.innerHTML = nuumber1;
    } else {
      nuumber2 = nuumber2 + i;
      value.innerHTML = nuumber1 + temdeggg + nuumber2;
    }
  });
}

const operations = ["+", "-", "*", "/"];
for (let i = 0; i < operations.length; i++) {
  const tooniimashinll = document.createElement("button");
  tooniimashinll.innerHTML = operations[i];

  tooniimashinll.addEventListener("click", function () {
    temdeggg = operations[i];

    value.innerHTML + nuumber1 + temdeggg;
  });

  tooniimashin.appendChild(tooniimashinll);
}
