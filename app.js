console.log("App.js loadded");

function random() {
    switch(Math.floor(Math.random() * 3)+1) {
        case 1:
            return(['✊', 'Rock']);
        case 2:
            return(['✋', 'Paper']);
        case 3:
            return(['✌️', 'Scissors']);
        default:
            return('ERROR');
    }    
}

function icon(){
    var icon = document.querySelector('link')
    switch(Math.floor(Math.random() * 3)+1) {
        case 1:
            icon.setAttribute('href', "assets/rock.png");
            break;
        case 2:
            icon.setAttribute('href', 'assets/paper.png');
            break;
        case 3:
            icon.setAttribute('href', 'assets/scissors.png');
            break;
        default:
            icon.setAttribute('href', "assets/rock.png");
            break;
    }
}


function display() {
    let sign = document.getElementById('sign');
    let sign_text = document.getElementById('sign_text');

    sign.innerHTML = ('3')
    sign_text.innerHTML = (' ');
    setTimeout(function(){ 
        sign.innerHTML = ('2')
        sign_text.innerHTML = (' ');
        console.log('2');
    }, 1000);

    setTimeout(function(){ 
        sign.innerHTML = ('1')
        sign_text.innerHTML = (' ');
        console.log('1');
    }, 2000);

    setTimeout(function(){
        var rep = random()
        sign.innerHTML = (rep[0])
        sign_text.innerHTML = (rep[1]);
        console.log(rep);
    }, 3000);  

}