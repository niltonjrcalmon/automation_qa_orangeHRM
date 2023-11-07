class EmployeeSearchElements{
    buttonMenuPim = () => {return 'span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]'}
    validateTitlePim = () => {return 'span > h6'}
    inputEmployeeName = () => {return 'input[placeholder="Type for hints..."]'}
    buttonSearch = () => {return 'button[type="submit"]'}
    selectEmployee = () => {return 'div[class="oxd-table-cell oxd-padding-cell"]'}
    validateFirstName = () => {return 'input[placeholder="First Name"]'}
    validateMiddleName = () => {return 'input[placeholder="Middle Name"]'}
    validateLastName = () => {return 'input[placeholder="Last Name"]'}
    validateIdEmployee = () => {return 'input[class="oxd-input oxd-input--active"]'} 
}

export default EmployeeSearchElements