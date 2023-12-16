document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    let form = document.getElementById("form");
    const table = document.getElementById('table');


    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;


    function restoreTable() {
        let storedTable = localStorage.getItem("tableData");
        if (storedTable) {
            table.innerHTML = storedTable;
        }
    }

    restoreTable();

    generateTable(name, rating, comment, table)


    function generateTable(name, rating, comment, table) {

        const row = table.insertRow();
        addCell(row, name);
        addCell(row, rating);
        addCell(row, comment);

        form.reset();
        localStorage.setItem("tableData", table.innerHTML);
    }
    function addCell(row, text) {
        const cell = row.insertCell();
        const textNode = document.createTextNode(text);
        cell.appendChild(textNode);
    }
});

// document.addEventListener('DOMContentLoaded', function () {
//     const table = document.getElementById('table');
//     restoreTable(table);
// );
//
//     document.getElementById('form').addEventListener('submit', function (event) {
//         event.preventDefault(); // Предотвращаем перезагрузку страницы
//
//         const form = document.getElementById("form");
//         const table = document.getElementById('table');
//
//         const name = document.getElementById('name').value;
//         const rating = document.getElementById('rating').value;
//         const comment = document.getElementById('comment').value;
//
//         generateTable(name, rating, comment, table);
//         form.reset();
//     );
//
//         function restoreTable(table) {
//             let storedTable = localStorage.getItem("tableData");
//             if (storedTable) {
//                 table.innerHTML = storedTable;
//             }
//
//
//             function generateTable(name, rating, comment, table) {
//                 const row = table.insertRow();
//                 addCell(row, name);
//                 addCell(row, rating);
//                 addCell(row, comment);
//
//                 localStorage.setItem("tableData", table.innerHTML);
//
//
//                 function addCell(row, text) {
//                     const cell = row.insertCell();
//                     const textNode = document.createTextNode(text);
//                     cell.appendChild(textNode);