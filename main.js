let igrac = document.querySelector('.izbor_1')
let komp = document.querySelector('.izbor_2')
let koDobija = document.querySelector('.obavestenje')

let rezIgrac = document.querySelector('.ig-sc');
let rezKomp = document.querySelector('.km-sc');

let btns = document.querySelectorAll('.btn')
let btn = Array.from(btns)


let igr = ''
let kmp = ''


let scoreI = 0;
let scoreK = 0;

btn.forEach(bt=>{
    bt.addEventListener('click', e=>{
        igrac.innerHTML= `Igrac je odabrao: ${e.target.alt}`
        igr = e.target.alt
        kompovOdabir()
        
    })
})

function kompovOdabir(){
    let broj = btn[Math.floor(Math.random()*3)].alt
    komp.innerHTML = `Komp je odabrao: ${broj}`
    kmp = broj
    pobednik()
}


function pobednik(){
    let winna;
    
    if(igr === 'Papir' && kmp === 'Papir' || igr === 'Kamen' && kmp === 'Kamen' || igr === 'Makaze' && kmp === 'Makaze'){
        winna = 'Nereseno'
    }else if( igr === 'Papir' && kmp === 'Kamen'){
        winna = 'Papir prekriva Kamen'
        scoreI++
    }else if( igr === 'Papir' && kmp === 'Makaze'){
        winna = 'Makaze seku Papir'
        scoreK++
    }else if( igr === 'Kamen' && kmp === 'Makaze'){
        winna = 'Kamen razbija Makaze'
        scoreI++
    }else if( igr === 'Kamen' && kmp === 'Papir'){
        winna = 'Papir prekriva Kamen'
        scoreK++
    }else if( igr === 'Makaze' && kmp === 'Papir'){
        winna = 'Makaze seku Papir'
        scoreI++
    }else if( igr === 'Makaze' && kmp === 'Kamen'){
        winna = 'Kamen razbija Makaze'
        scoreK++
    }

   
    rezIgrac.innerHTML = scoreI;
    rezKomp.innerHTML = scoreK;
    koDobija.innerHTML = winna;
}