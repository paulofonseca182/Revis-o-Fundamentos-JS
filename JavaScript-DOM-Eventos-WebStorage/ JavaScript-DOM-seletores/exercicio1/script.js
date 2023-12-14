document.getElementById('page-title').innerText = 'Planeta dos Macacos: O Reinado'

document.getElementById('first-paragraph').innerText = `Muitos anos após o reinado de César, um jovem macaco embarca em uma jornada que o levará a questionar tudo o que lhe foi ensinado sobre o passado e a fazer escolhas que definirão o futuro tanto para os macacos quanto para os humanos.`

document.getElementById('subtitle').innerText = 'Principais informações:'


const paragraph = document.getElementsByClassName('paragraph-style');

paragraph[0].style.fontStyle = 'italic';

document.getElementById('second-paragraph').innerText = `
Direção: Wes Ball 
Roteiristas: Patrick AisonJosh FriedmanRick Jaffa
Artistas: Freya AllanKevin DurandDichen Lachman`

const subtitle = document.getElementsByTagName('h2');

subtitle[0].style.color = 'blue';