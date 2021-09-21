// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    let target = document.getElementById("target");

    target.appendChild(table);
    table.appendChild(tr);

    for (let a = 1; a <= 9; a++) {
        let tp = tr.cloneNode(true);
        table.appendChild(tp);
    }

    let trs = document.querySelectorAll("tr");

    for (let b = 0; b < trs.length; b++) {
        console.log(trs[b]);
        for (let c = 0; c < 10; c++) {
            let ts = td.cloneNode(true);
            ts.innerHTML = c + 1;
            trs[b].appendChild(ts);
        }
    }
})();
