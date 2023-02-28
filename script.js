function toggleMode(){
    const html = document.documentElement

    //if(html.classList.contains('light')){
    //    html.classList.remove('light')
    //} else{
    //    html.classList.add('light')
    //}
    html.classList.toggle('light')

    // Substituindo a imagem de acordo com o tema
    const imagem = document.querySelector('#profile img')
    if(html.classList.contains('light')){
        imagem.setAttribute('src', './assents/avatar-light.png')
    }else{
        imagem.setAttribute('src', './assents/avatar.png')
    }
}