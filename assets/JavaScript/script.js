function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar tag da img
  const img = document.querySelector('#profile img')

  // Substituir a img

  if (html.classList.contains('light')) {
    // Se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/Profile/light-pic.jpg')
    img.setAttribute(
      'alt',
      'Foto em preto e branco de Joao Vitor segurando seu celular e sorrindo, usando uma camisa social em frente ao espelho'
    )
  } else {
    // Se tiver sem light mode, manter imagem normal
    img.setAttribute('src', './assets/Profile/picture.jpg')
    img.setAttribute(
      'alt',
      'Foto de Joao Vitor segurando seu celular e sorrindo, usando uma blusa azul em frente ao espelho'
    )
  }
}
