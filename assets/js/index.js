import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from './animales.js';
(async function () {
  //////////////////////////////////////PETICION FETCH
  const animalesJSON = await fetch('animales.json');
  const { animales } = await animalesJSON.json();
  console.log(animales);

  //////////////////////////////////// SELECCION DE ELEMENTOS DEL DOM
  const animalInput = $('#animal');
  const edadInput = $('#edad');
  const comentariosInput = $('#comentarios');
  const btnRegistrar = $('#btnRegistrar');
  const preview = $('#preview');
  const animalesContainer = $('#animales');
  const player = $('#player');

  /////////////////////////CAMBIAR IMAGEN DEL PREVIEW
  const cambiarPreview = () => {
    const animalActual = animales.find(
      (animal) => animalInput.val() == animal.name
    );
    preview.css('background-image', `url(assets/imgs/${animalActual.imagen}`);
  };
  animalInput.on('change', cambiarPreview);

  //////////////////////////////REGISTRAR ANIMAL

  // funcion para crear instancias
  const crearAnimal = (nombre, edad, img, comentarios, sonido) => {
    if (nombre == 'Leon')
      return new Leon(nombre, edad, img, comentarios, sonido);

    if (nombre == 'Oso') return new Oso(nombre, edad, img, comentarios, sonido);

    if (nombre == 'Lobo')
      return new Lobo(nombre, edad, img, comentarios, sonido);

    if (nombre == 'Serpiente')
      return new Serpiente(nombre, edad, img, comentarios, sonido);

    if (nombre == 'Aguila')
      return new Aguila(nombre, edad, img, comentarios, sonido);
  };

  ///////////////////////////////////IMPRIMIR ANIMAL
  const htmlAnimal = (img, posicionLista) => {
    return `
        <div class="card m-1 bg-secondary" style="max-width: 8rem">
          <img src="assets/imgs/${img}" class="card-img-top foto-modal" alt="Animal" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div class="card-body py-1">
          
            <button class="btn btn-sonido btn-primary bg-transparent border-0" data-posicion=${posicionLista}>
              <i class="fas fa-volume-up">
              </i>
            </button>
          </div>
        </div>
   `;

    //agrega modal
    // $('.foto-modal').on('click', function () {
    //   $('#exampleModal').modal('show');
    //   $('.modal-body').html(`
    //       <div class="card m-1 bg-secondary" style="">
    //         <img src="assets/imgs/${img}" class="card-img-top" alt="Animal">
    //         <div class="card-body py-1 text-center">
    //           <p class="edad">5 - 8 años</p>
    //           <p>Comentarios</p>
    //           <p>Fue elegido como animal salvaje del año</p>
    //         </div>
    //       </div>
    //   `);
    // });
  };

  let animalesEnLista = []; // contenedor de animales
  function imprimirListaAnimales() {
    let html = '';
    animalesEnLista.forEach((animal, i) => {
      html += htmlAnimal(animal.img, i + 1);
    });
    animalesContainer.html(html);

    console.log(animalesEnLista.length);
  }

  // Codigo de captura creacion y almacenamiento de instancias
  function registrarAnimal() {
    const datosAnimal = [
      animalInput.val(),
      edadInput.val(),
      animales.find((animal) => animalInput.val() == animal.name).imagen,
      comentariosInput.val(),
      animales.find((animal) => animalInput.val() == animal.name).sonido,
    ];
    const animal = crearAnimal(...datosAnimal);
    animalesEnLista.push(animal);
    console.log(animalesEnLista);

    imprimirListaAnimales();
    activarSonido();
  }
  btnRegistrar.on('click', registrarAnimal);

  ///////////////////ACTIVACION DE SONIDOS
  function activarSonido() {
    $('.btn-sonido').on('click', function (event) {
      const animalPosicion = $(this).attr('data-posicion');
      const animal = animalesEnLista[animalPosicion - 1];
      if (animal.nombre == 'Leon') animal.rugir();
      if (animal.nombre == 'Lobo') animal.aullar();
      if (animal.nombre == 'Oso') animal.grunir();
      if (animal.nombre == 'Serpiente') animal.sisear();
      if (animal.nombre == 'Aguila') animal.chillar();
    });
  }
})();

/////////////////////
