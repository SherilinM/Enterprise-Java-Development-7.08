export class Employee {

    constructor(
        private _id: number,
        private _name: string,
        private _phoneNumber: string,
        private _officeNumber: string,
        private _position: string,
        private _manager: string,
        private _showDetails: boolean
    ) { }

    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get phoneNumber(): string {
        return this._phoneNumber;
    }
    get officeNumber(): string {
        return this._officeNumber;
    }
    get position(): string {
        return this._position;
    }
    get manager(): string {
        return this._manager;
    }

    get showDetails(): boolean {
        return this._showDetails;
    }


    set id(id: number) {
        this._id = id;
    }
    set name(name: string) {
        this._name = name;
    }
    set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }
    set officeNumber(officeNumber: string) {
        this._officeNumber = officeNumber;
    }
    set position(position: string) {
        this._position = position;
    }
    set manager(manager: string) {
        this._manager = manager;
    }
    set showDetails(showDetails: boolean) {
        this._showDetails = showDetails;
    }
}