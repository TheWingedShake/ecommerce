interface AbstractFactory {
  createCommander(): Commander;
  createEngineer(): Engineer;
  createTank(): Tank;
}

class CybranFactory implements AbstractFactory {
  createCommander(): Commander {
    return new CybranCommander();
  }
  createEngineer(): Engineer {
    return new CybranEngineer();
  }
  createTank(): Tank {
    return new CybranTank();
  }
}

// tslint:disable-next-line:max-classes-per-file
class EonFactory implements AbstractFactory {
  createCommander(): Commander {
    return new EonCommander();
  }
  createEngineer(): Engineer {
    return new EonEngineer();
  }
  createTank(): Tank {
    return new EonTank();
  }
}

interface Commander {
  build(): string;
}

interface Engineer {
  repair(): string;
}

interface Tank {
  attack(): string;
}

// tslint:disable-next-line:max-classes-per-file
class CybranCommander implements Commander {
  build(): string {
    return 'Cybrans construction completed';
  }
}

// tslint:disable-next-line:max-classes-per-file
class CybranEngineer implements Engineer {
  repair(): string {
    return 'Cybrans united repaired';
  }
}

// tslint:disable-next-line:max-classes-per-file
class CybranTank implements Tank {
  attack(): string {
    return 'Cybrans enemies defeated';
  }
}

// tslint:disable-next-line:max-classes-per-file
class EonCommander implements Commander {
  build(): string {
    return 'Eons construction completed';
  }
}

// tslint:disable-next-line:max-classes-per-file
class EonEngineer implements Engineer {
  repair(): string {
    return 'Eons unit repaired';
  }
}

// tslint:disable-next-line:max-classes-per-file
class EonTank implements Tank {
  attack(): string {
    return 'Eons enemies defeated';
  }
}

function clientCode(factory: AbstractFactory) {
  const commander = factory.createCommander();
  const engineer = factory.createEngineer();
  const tank1 = factory.createTank();
  const tank2 = factory.createTank();
  console.log(commander.build());
  console.log(engineer.repair());
  console.log(tank1.attack());
  console.log(tank2.attack());
}

export function testAbstractFactory() {
  const cybranFactory = new CybranFactory();
  const eonFactory = new EonFactory();
  clientCode(cybranFactory);
  clientCode(eonFactory);
}
