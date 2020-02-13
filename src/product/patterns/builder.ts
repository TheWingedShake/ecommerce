interface Builder {
  producePlatform(): void;
  produceWeapon(): void;
  produceDetectionSystem(): void;
}

class Tank {
  platform: string;
  weapon: string;
  detectionSystem: string;

  getEquipment(): string[] {
    return [this.platform, this.weapon, this.detectionSystem];
  }
}

// tslint:disable-next-line:max-classes-per-file
abstract class TankBuilder implements Builder {
  tank: Tank;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.tank = new Tank();
  }

  public getTank(): Tank {
    const tank = this.tank;
    this.reset();
    return tank;
  }

  producePlatform(): void {
    throw new Error("Method not implemented.");
  }
  produceWeapon(): void {
    throw new Error("Method not implemented.");
  }
  produceDetectionSystem(): void {
    throw new Error("Method not implemented.");
  }
}

// tslint:disable-next-line:max-classes-per-file
class EonTankBuilder extends TankBuilder {
  producePlatform(): void {
    this.tank.platform = 'hoverPlatform';
  }
  produceWeapon(): void {
    this.tank.weapon = 'energy weapon';
  }
  produceDetectionSystem(): void {
    this.tank.detectionSystem = 'eon rls subsystem';
  }
}

// tslint:disable-next-line:max-classes-per-file
class UEFTankBuilder extends TankBuilder {
  producePlatform(): void {
    this.tank.platform = 'ground platform';
  }
  produceWeapon(): void {
    this.tank.weapon = 'heavy kinetic projectile turret';
  }
  produceDetectionSystem(): void {
    this.tank.detectionSystem = 'uef detection subsystem';
  }
}

function clientCode(tankBuilder: TankBuilder) {
  tankBuilder.producePlatform();
  tankBuilder.produceWeapon();
  tankBuilder.produceDetectionSystem();
  const tank = tankBuilder.getTank();
  console.log(tank.getEquipment());
}

export function testBuilder() {
  const eonTankBuilder = new EonTankBuilder();
  const uefTankBuilder = new UEFTankBuilder();
  clientCode(eonTankBuilder);
  clientCode(uefTankBuilder);
}