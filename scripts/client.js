console.log('scripts sourced')

$(document).ready(readyNow); 

function readyNow() {
    console.log('testing readyNow');
    $('#employee-submit').on('click', addEmployeeInputs);
}

function addEmployeeInputs () {
    console.log('in addEmployeeInputs');
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let employeeId = $('#id-input').val();
    let employeeTitle = $('#title-input').val();
    let annualSalary = $('#annual-salary-input').val();
    console.log(firstName,lastName,employeeId,employeeTitle,annualSalary);
    $('#employee-data').append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeId}</td>
        <td>${employeeTitle}</td>
        <td>${annualSalary}</td>
    </tr>
    `)
}
// function clearInputFields () {
//     console.log('in clearInputFields')
// }

