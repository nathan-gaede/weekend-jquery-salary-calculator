console.log('scripts sourced')

$(document).ready(readyNow); 

function readyNow() {
    console.log('testing readyNow');
    $('#employee-submit').on('click', addEmployeeInputs);
    $('#employee-submit').on('click', calculateMonthlyExpense);

    
}
let sum = 0

function addEmployeeInputs () {
    //console.log('in addEmployeeInputs');
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let employeeId = $('#id-input').val();
    let employeeTitle = $('#title-input').val();
    let annualSalary = $('#annual-salary-input').val();
    //console.log(firstName,lastName,employeeId,employeeTitle,annualSalary);

    //Pushing input data to table on DOM
    $('#employee-data').append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeId}</td>
        <td>${employeeTitle}</td>
        <td>${annualSalary}</td>
    </tr>
    `)
    
     $('#monthly-expenses').html(
        sum += annualSalary/12
        );
     if (sum > 20000) {
        console.log('too expensive');
        
     }
     
    //Clear input fields after 'submit' button is clicked.
    $('input').val('');
}

function calculateMonthlyExpense () {
    console.log('in calculateMonthlyExpense');
    // let monthlyExpense = (annualSalary/12);
    // console.log(monthlyExpense);
    // $('#annual-expenses').append(`
    // <h4>${monthlyExpense}</h4>
    // `)

    // let monthlyExpense = 0
    //   monthlyExpense += $('#annual-salary-input').val();
    //     $('#annual-expenses').append(`
    //         <h4></h4>
    //      `)
     }
   


// function totalAnnualExpenses() {
//     console.log('in totalAnnualExpenses');
//     $('#annual-expenses').append(`
//     <h4>${annualSalary}</h4>
//     `)

// }


