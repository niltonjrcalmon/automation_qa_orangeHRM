class EmployeeRegistrationElements {
    buttonMenuPIM = () => {return 'span'}
    buttonADD = () => {return 'button[type="button"]'}
    imageFile = () => {return 'input[type="file"]'} 
    inputFirstName = () => {return 'input[placeholder="First Name"]'}
    inputMiddleName = () => {return 'input[placeholder="Middle Name"]'}
    inputLastName = () => {return 'input[placeholder="Last Name"]'}
    buttonSubmitSave = () => {return 'button[type="submit"]'}
    idExists = () => {return '.oxd-input-field-error-message'}
    idImput = () => {return '.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'}
    validateSucessRegister = () => {return 'div.oxd-toast-content--success'}
    errorFieldRequired = () => {return '.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message'}

}

export default EmployeeRegistrationElements