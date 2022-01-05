export class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    let _nombre = nombre;
    let _edad = edad;
    let _img = img;
    let _comentarios = comentarios;
    let _sonido = sonido;

    this.getNombre = () => {
      return _nombre;
    };

    this.getEdad = () => {
      return _edad;
    };

    this.getImg = () => {
      return _img;
    };
    this.getComentarios = () => {
      return _comentarios;
    };
    this.getSonido = () => {
      return _sonido;
    };
  }

  get nombre() {
    return this.getNombre();
  }

  get edad() {
    return this.getEdad();
  }

  get img() {
    return this.getImg();
  }

  get comentarios() {
    return this.getComentarios();
  }

  get sonido() {
    return this.getSonido();
  }

  playSonido() {
    return console.log(this.sonido);
  }
}

export class Leon extends Animal {
  rugir() {
    this.playSonido();
  }
}

export class Lobo extends Animal {
  aullar() {
    this.playSonido();
  }
}

export class Oso extends Animal {
  grunir() {
    this.playSonido();
  }
}

export class Serpiente extends Animal {
  sisear() {
    this.playSonido();
  }
}

export class Aguila extends Animal {
  chillar() {
    this.playSonido();
  }
}
