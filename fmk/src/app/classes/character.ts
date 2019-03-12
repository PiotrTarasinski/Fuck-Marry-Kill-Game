export class Character {
    id: number;
    name: string;
    imgSrc: string;
    sex: Sex;
    state: State;
    fuckVotes: number;
    marryVotes: number;
    killVotes: number;
    agreedPercent: number;

    constructor(id: number, name: string, imgSrc: string, sex: Sex, fuckVotes: number, marryVotes: number, killVotes: number) {
        this.id = id;
        this.name = name;
        this.imgSrc = imgSrc;
        this.sex = sex;
        this.state = State.default;
        this.fuckVotes = fuckVotes;
        this.marryVotes = marryVotes;
        this.killVotes = killVotes;
        this.agreedPercent = 0;
    }
}

export class ICharacter {
    id: number;
    name: string;
    imgSrc: string;
    sex: Sex;
    fuckVotes: number;
    marryVotes: number;
    killVotes: number;
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

