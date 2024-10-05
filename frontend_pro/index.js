const table = document.createElement('table');

for(let i = 0; i < 10; i++){
    const tableRow = document.createElement('tr');
    for(let j = 0; j < 10; j++){
        const tableCell = document.createElement('td');
        const pifagorNumbers = (i + 1) * (j + 1);
        tableCell.style.width = '20px'
        tableCell.style.height = '20px'
        tableCell.style.border = '1px solid black'
        tableCell.style.textAlign = 'center'
        tableCell.innerHTML = pifagorNumbers.toString();
        tableRow.appendChild(tableCell);
        table.appendChild(tableRow);
    }
}

document.body.appendChild(table);
