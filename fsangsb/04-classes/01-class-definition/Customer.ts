class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(first: string, last: string) {
        this._firstName = first;
        this._lastName = last;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

let customer = new Customer('Martin', 'Dixon');

console.log(customer.firstName);
console.log(customer.lastName);
