var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["email"] = document.getElementById("email").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["job"] = document.getElementById("job").value;
    formData["education"] = document.getElementById("education").value;
    formData["city"] = document.getElementById("city").value;
    formData["pincode"] = document.getElementById("pincode").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.firstName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.lastName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.email;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.mobile;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.job;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.education;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.city;
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.pincode;
    var cell9 = newRow.insertCell(8);
        cell9.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('job').value = '';
    document.getElementById('education').value = '';
    document.getElementById('city').value = '';
    document.getElementById('pincode').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('firstName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lastName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('mobile').value = selectedRow.cells[3].innerHTML;
    document.getElementById('job').value = selectedRow.cells[4].innerHTML;
    document.getElementById('education').value = selectedRow.cells[5].innerHTML;
    document.getElementById('city').value = selectedRow.cells[6].innerHTML;
    document.getElementById('pincode').value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.mobile;
    selectedRow.cells[4].innerHTML = formData.job;
    selectedRow.cells[5].innerHTML = formData.education;
    selectedRow.cells[6].innerHTML = formData.city;
    selectedRow.cells[7].innerHTML = formData.pincode;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}