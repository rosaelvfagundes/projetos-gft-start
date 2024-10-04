class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    switch(this.type.toLowerCase()) {
      case "ninja":
        console.log(`O ${this.type} atacou usando shuriken.`);
        break;
      case "mago":
        console.log(`O ${this.type} atacou usando magia.`);
        break;
      case "guerreiro":
        console.log(`O ${this.type} atacou usando espada.`);
        break;
      case "monge":
        console.log(`O ${this.type} atacou usando artes marciais.`);
        break;
      default:
        console.log(`Tipo de classe inválida.`);
    }
  }

  introduce() {
    console.log(`Me chamo ${this.name}. Tenho ${this.age} anos de idade.`);
  }
}

const mage = new Hero('Victor', 110, 'Mago');
mage.introduce();
mage.attack();

const warrior = new Hero('Rafael', 43, 'Guerreiro');
warrior.introduce();
warrior.attack();

const monge = new Hero('Diana', 220, 'Monge');
monge.introduce();
monge.attack();

const ninja = new Hero('Edisia', 500, 'Ninja');
ninja.introduce();
ninja.attack();