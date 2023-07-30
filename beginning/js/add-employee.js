// HANDLE THE LOAD EVENT OF THE WINDOW
document.addEventListener("DOMContentLoaded", () => {
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    window.resizeTo(800, 700)

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - window.screen.width)/2), ((window.screen.height - window.screen.height)/2))

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    const $ = (bringDOM) => document.getElementById(bringDOM)

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    $('cancel').addEventListener('click', window.close)

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
    document.getElementById("empForm").addEventListener("submit", (event) => {

    // PREVENT SUBMIT BUTTON FROM SENDING INFO TO A BLACK HOLE
        event.preventDefault()

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
        let id
        let name
        let extension
        let email
        let department

// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
        id = $("id").value
        name = $("name").value
        extension = $("extension").value
        email = $("email").value
        department = $("department").value

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
        var parentoutput = window.opener.document.getElementById('logindetails')
        

// // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

        parentoutput.innerHTML = `ID: ${id}\nName: ${name}\nExtension: ${extension}\nEmail: ${email}\nDepartment: ${department}`

// CLOSE THE POPUP
window.close

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
})})

