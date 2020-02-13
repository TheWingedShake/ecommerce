abstract class Creator {
    public abstract factoryMethod(): Awaken;

    public someOperation(): string {
        return 'Not implemented yet';
    }
}

interface Awaken {
    awake(): string;
}

// tslint:disable-next-line:max-classes-per-file
export class FlyUnitCreator extends Creator {

    public factoryMethod(): Awaken {
        return new FlyUnit();
    }

}

// tslint:disable-next-line:max-classes-per-file
export class GroundUnitCreator extends Creator {

    public factoryMethod(): Awaken {
        return new GroundUnit();
    }

}

// tslint:disable-next-line:max-classes-per-file
class FlyUnit implements Awaken {

    awake(): string {
        return 'Fly unit is ready.';
    }

}

// tslint:disable-next-line:max-classes-per-file
class GroundUnit implements Awaken {

    awake(): string {
        return 'Ground unit is ready.';
    }

}

function clientCode(creator: Creator) {
    const unit = creator.factoryMethod();
    const res = unit.awake();
    console.log(res);
}

export function testCreator() {
    const flyUnitCreator = new FlyUnitCreator();
    const groundUnitCreator = new GroundUnitCreator();

    clientCode(flyUnitCreator);
    clientCode(groundUnitCreator);
}
