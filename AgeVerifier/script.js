function verificar()
    {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value)> ano || Number(fano.value) < 1897){
     window.alert('Verifique os dados e tente novamente.')   
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <=3)
            {
                //bebê
                img.setAttribute('src', 'narutobebe.png')
            }else if(idade <13)
            {
                //criança
                img.setAttribute('src', 'narutocrianca.png')
            }else if(idade <16)
                {
                //adolescente
                img.setAttribute('src', 'narutoadolescente.png')
            }else if(idade <22){
                //jovem
                img.setAttribute('src', 'narutojovem.png')
            }
            else if(idade <50)
            {
                //adulto
                img.setAttribute('src', 'narutoadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'narutoidoso.png')
            }

        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade <=3){
                //bebê
                img.setAttribute('src', 'hinatabebe.png')
            }else if(idade <13){
                //criança
                img.setAttribute('src', 'hinatacrianca.png')
            }else if(idade <18){
                //adolescente
                img.setAttribute('src', 'hinataadolescente.png')
            }else if(idade <50){
                //adulto
                img.setAttribute('src', 'hinataadulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'hinatavelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        }
}