let formModel = {};

function handleSubmit(event) {
    console.log("handleSubmit called")
    console.log(formModel)

    // event.preventDefault();
    // let fullName = document.querySelector('input[id="fullName"]').value
    // let email = document.querySelector('input[id="email"]').value
    // let verifiedCheck = document.querySelector('input[id="verifiedCheck"]').value
    // let gender = document.querySelector('input[name="genderRadio"]:checked').value

}

function onFormFieldChange(event) { 
    const { target: { name, value } } = event
    formModel[name] = value;
}