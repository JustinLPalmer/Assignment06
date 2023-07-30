// HANDLE THE LOAD EVENT OF THE WINDOW
document.addEventListener("DOMContentLoaded", () => {

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
let btn = window.document.getElementById('btnAddEmployee')

btn.addEventListener('click', function () {

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    window.open('add-employee.html', 'add-employee', 'width = 800, height =400')
})})
