export class Character {
    id: number;
    name: string;
    imgSrc: string;
    sex: Sex;
    state: State;

    constructor(id: number, name: string, imgSrc: string, sex: Sex) {
        this.id = id;
        this.name = name;
        this.imgSrc = imgSrc;
        this.sex = sex;
        this.state = State.default;
    }
}

export enum Sex {
    man = 'man',
    woman = 'woman',
}

export enum State {
    default = 'default',
    fuck = 'fuck',
    marry = 'marry',
    kill = 'kill'
}

