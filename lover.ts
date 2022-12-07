export class Lover {
    id: number = 0
    static _auto: number = 0
    private _name: string
    private _zodiac: string;
    private _homeTown: string;
    private _yearOfBirth: number;
    private _interests: string;

    constructor(name: string, zodiac: string, homeTown: string, yearOfBirth: number, interests: string) {
        this._name = name;
        this._zodiac = zodiac;
        this._homeTown = homeTown;
        this._yearOfBirth = yearOfBirth;
        this._interests = interests;
        this.id = Lover._auto
        Lover._auto++
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get homeTown(): string {
        return this._homeTown;
    }

    set homeTown(value: string) {
        this._homeTown = value;
    }

    get yearOfBirth(): number {
        return this._yearOfBirth;
    }

    set yearOfBirth(value: number) {
        this._yearOfBirth = value;
    }

    get interests(): string {
        return this._interests;
    }

    set interests(value: string) {
        this._interests = value;
    }
}