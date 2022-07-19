# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Topics Covered
- JavaScript
- jQuery - Selectors, append, and event handling

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Create an application that records employee salaries and adds salaries up to report monthly costs. 

For this application, the end user will be able to add elements to the DOM.  The problem solved was calculating and displaying monthly costs using the value of annual salary.  

The way the problem was solved was to create a function to append a table on the DOM using the .append() jQuery built-in.  To display a total monthly cost, the .text() function was used to move the annual cost divided by 12 for each employee to the DOM.  The .text() function was used instead of append to overwrite the previous monthly totals when new employees were added to the table.

The button functionality was handled by an on click handler in the readyNow function. One handler was for the submit button (to add employee data), the other handler was for the delete button to delete an employee row from the table.  The delete button function utilized the "$(this).parent().parent().empty();" code to find the grandparent of the delete button in the HTML and empty the <td></td> in the "employee-data" table.

If monthly costs exceeded $20,000 code was written to say if monthly totals > 20000, "$('#monthly-expenses').addClass("red");".  A class .red {
    background-color: red;
}
was added to the CSS to complete this funtionality.



- [x] Create HTML file (index.html)
- [x] Create stylesheet (style.css)
- [x] Create js file (client.js)
- [x] Create jquery.js 

- [x] Source js, jquery and css
- [x] Test the source with a console.log in client.js



The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

- [x] Add the above elements to the HTML 
- [x] Add a Submit button to the HTML
- [x] Create a table to display the above elements

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

- [x] Add the readyNow function to client.js
- [x] Create blank fields to enter employee information
- [x] Add functionality to the "Submit" button to collect form information

- [x] Append information to the DOM

- [x] Clear the input fields
- [x] Calculate monthly costs
- [x] If monthly total cost exceeds $20,000 add a red background color to the total monthly cost

Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

- [x] Create a delete button



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
