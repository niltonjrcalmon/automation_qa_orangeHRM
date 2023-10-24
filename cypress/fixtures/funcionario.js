import { fakerPT_BR } from '@faker-js/faker';

export const funcionario = {
    firstName: fakerPT_BR.person.firstName(),
    middleName: fakerPT_BR.person.middleName(),
    lastName: fakerPT_BR.person.lastName(),
};
