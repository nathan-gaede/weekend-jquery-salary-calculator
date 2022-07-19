console.log('scripts sourced')

$(document).ready(readyNow); 

function readyNow() {
    //console.log('testing readyNow');
    $('#employee-submit').on('click', addEmployeeInputs);
    $('body').on('click', '.delete-button', deleteEmployee);

    
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
        <td><button class="delete-button">Delete</button></td>
    </tr>
    `)
    sum += annualSalary/12
     $('#monthly-expenses').text(`
        Monthly Expenses: $${sum}
        `);
     if (sum > 20000) {
        //console.log('too expensive');
        //document.getElementById("monthly-expenses").style.backgroundColor="red"
        $('#monthly-expenses').addClass("red");

     }
     
    //Clear input fields after 'submit' button is clicked.
    $('input').val('');
}

//function calculateMonthlyExpense () {
    //console.log('in calculateMonthlyExpense');
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
     //}
   


// function totalAnnualExpenses() {
//     console.log('in totalAnnualExpenses');
//     $('#annual-expenses').append(`
//     <h4>${annualSalary}</h4>
//     `)

// }

function deleteEmployee() {
    //console.log('in delete employee');
    $(this).parent().parent().empty();
}


