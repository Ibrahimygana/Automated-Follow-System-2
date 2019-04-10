// function onFormSubmit(){
//     var formData = readformData();

//     insertNewRecord(formData);


// }

// function readformData(){
//     var formData = {};
//     formData["firstName"] = document.getElementById("firstName").value;
//     formData["LastName"] = document.getElementById("lastName").value;
//     formData["phoneNumber"] = document.getElementById("phoneNumber").value;
//     formData["email"] = document.getElementById("email").value;
//     formData["address"] =document.getElementById("address").value;

//     return formData;

// }

// function insertNewRecord(){
//     var table = document.getElementById("newMember").getElementsByTagName("tbody")[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.firstName;
//     cell2 =newRow.insertCell(1);
//     cell2.innerHTML = data.LastName;
//     cell3 =newRow.insertCell(2);
//     cell3.innerHTML = data.phoneNumber;
//     cell4 =newRow.insertCell(3);;
//     cell4.innerHTML = data.email;
//     cell5 =newRow.insertCell(5);
//     cell5.innerHTML = data.address;
//     cell6 =newRow.insertCell(6);
//     cell6.innerHTML = `<a>Edit</a>
//                       <a>Delete</a>`;
// }

// let form = document.getElementById('myform');
// form.addEventListener('submit', addUser);
function addUser() {
    e.preventDefault();
    let firstName=document.getElementById('firstName').value;
    let lastName=document.getElementById('lastName').value;
    let phoneNumber= document.getElementById('phoneNumber').value;
    let email  = document.getElementById('email').value;
    let address=document.getElementById('address').value;
    let table=document.getElementById('newMember');
    let newRow = table.insertRow(1);
    cell1=newRow.insertCell(0);
    cell2=newRow.insertCell(1);
    cell3=newRow.insertCell(2);
    cell4=newRow.insertCell(3);
    cell5=newRow.insertCell(4);
    cell.innerHTML=firstName;
    cell2.innerHTML=lastName;
    cell3.innerHTML=phoneNumber;
    cell4.innerHTML=email;
    cell5.innerHTML=address;

//  


    
}




