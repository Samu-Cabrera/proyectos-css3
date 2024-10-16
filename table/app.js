const input = document.querySelector('.input__group input');
const tableRows = document.querySelectorAll('tbody tr');
 
const searchTable = () => {
    tableRows.forEach((row, i) => {
        let tableData = row.textContent.toLowerCase(),
        searchData = input.value.toLowerCase();

        row.classList.toggle('hide', tableData.indexOf(searchData) < 0);
        row.style.setProperty('--delay', i/25 + 's');
    });
};

input.addEventListener('input', searchTable);