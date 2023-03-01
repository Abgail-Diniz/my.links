function toggleMode(){
    const html = document.documentElement
    // Colocando a classe light
    //if(html.classList.contains('light')){
    //    html.classList.remove('light')
    //} else{
    //    html.classList.add('light')
    //}
    //Usando a função Toggle pra alterar 
    html.classList.toggle('light')

    // Substituindo a imagem de acordo com o tema e o fundo
    const imagem = document.querySelector('#profile img')
    const fundo = document.querySelector('body')

    if(html.classList.contains('light')){
        imagem.setAttribute('src', './assents/avatar-light.png')
        
        fundo.style.backgroundImage ="radial-gradient(circle, rgba(0,11,138,1) 0%, rgba(211,231,255,0.8225665266106442) 0%, rgba(232,200,255,1) 49%)";

    }else{
        imagem.setAttribute('src', './assents/avatar.png')
        fundo.style.backgroundImage =" radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(115,0,121,1) 49%, rgba(46,0,84,1) 100%)";
    }
}