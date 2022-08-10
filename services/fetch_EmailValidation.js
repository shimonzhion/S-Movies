const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
let userEmail =document.getElementById('email')
let btnEmail =document.getElementById('message_contact')
async function emailValidationApi() {
    try {
        return await fetch(`https://api.eva.pingutil.com/email?email=${userEmail.value}`, requestOptions)
            .then(response => response.json())
    }
    catch (err) {
    }
}
async function reactionToEmailValidation() {
    let response = await emailValidationApi();
    console.log(response.data.webmail);
    console.log(response.data.deliverable);
    console.log(response.data);
    if (response.data.webmail === true && response.data.deliverable === true) {
        return true
    } else {
        return false
    }

}
function actionOfPrintingUser() {
    return (
        window.location.href = "mailto:" +('danielmalede@gmail.com')

        )
}
async function printingUserPage() {
    let check = await reactionToEmailValidation()
    if (check == true) {
        return actionOfPrintingUser()
    }
    else { return alert("email isn't valid") }
}

btnEmail.addEventListener("click", () => { printingUserPage() })

