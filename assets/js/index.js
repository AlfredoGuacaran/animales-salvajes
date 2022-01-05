import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from './animales.js';
(async function () {
  // SELECCION DE ELEMENTOS DEL DOM

  const animalesJSON = await fetch('animales.json');
  const { animales } = await animalesJSON.json();

  console.log(animales);

  const animalInput = $('#animal');
  const edadInput = $('#edad');
  const comentariosInput = $('#comentarios');
  const btnRegistrar = $('#btnRegistrar');
  const preview = $('#preview');

  animalInput.on('change', function () {});

  btnRegistrar.on('click', function () {
    let animal;
  });
})();
