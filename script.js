function insert_Row() {
    // Get the table element by its ID
    const table = document.getElementById('sampleTable');
    
    // Create a new row at the top of the table (index 0)
    const newRow = table.insertRow(0);
    
    // Insert two new cells in the row
    const cell1 = newRow.insertCell(0);  // First cell
    const cell2 = newRow.insertCell(1);  // Second cell
    
    // Set the text content for the new cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
}
