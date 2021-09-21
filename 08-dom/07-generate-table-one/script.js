// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


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
        let ts = td.cloneNode(true);
        trs[b].appendChild(ts);
    }
})();
