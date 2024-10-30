const getElement = (seletor) => {
  return document.querySelector(seletor);
};

// Bài 1

getElement("#btnBai1").onclick = () => {
  let soChan = "";
  let soLe = "";
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      soChan += i + ", ";
    } else {
      soLe += i + ", ";
    }
  }

  getElement("#result1 span").innerHTML = `Số chẵn:  ${soChan} <hr/> 
  Số lẻ: ${soLe} `;
};

//Bài 2

getElement("#btnBai2").onclick = () => {
  let n = +getElement("#input2").value;
  let tong = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      tong += i;
    }
  }
  getElement("#result2 span").innerHTML = tong;
};

//Bài 3

getElement("#btnBai3").onclick = () => {
  let count = 0;
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0) {
      count++;
    }
  }

  getElement("#result3 span").innerHTML = `Có ${count} chia hết cho 3`;
};

// bài 4

getElement("#btnBai4").onclick = () => {
  let newDiv = getElement("#newDiv");
  newDiv.innerHTML = ""; //Xóa các thẻ div cũ

  for (let i = 1; i < 11; i++) {
    const div = document.createElement("div");
    div.innerHTML = `Div số ${i}`;

    if (i % 2 === 0) {
      div.classList.add("divRed");
    } else {
      div.classList.add("divBlue");
    }

    newDiv.appendChild(div);
  }
};

// Bài 5
getElement("#btnBai5").onclick = () => {
  let sum = 0;
  let n = 0;

  while (sum <= 10000) {
    n++;
    sum += n;
  }

  getElement("#result5 span").innerHTML = n;
};

// Bài 6

getElement("#btnBai6").onclick = () => {
  let x = +getElement("#inputX").value;
  let n = +getElement("#inputN").value;

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += x ** i;
  }

  getElement("#result6 span").innerHTML = sum;
};

// Bài 7

getElement("#btnBai7").onclick = () => {
  let n = +getElement("#inputN7").value;

  let tong = 1;

  for (let i = 1; i <= n; i++) {
    tong = tong * i;
  }

  getElement("#result7 span").innerHTML = tong;
};

// Bài 8
getElement("#btnBai8").onclick = () => {
  let n = +getElement("#input8").value;

  let result = "";
  for (let i = 1; i <= n; i++) {
    result += `${i}, `;
  }
  getElement("#result8 span").innerHTML = result;
};
