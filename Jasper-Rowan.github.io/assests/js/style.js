
let i = 0;
let text = "HELLO, MY NAME IS JASPER ROWAN THANK YOU FOR";
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let speed = 150;
function animate() {
    if (i < 18) {
        span1.innerHTML += text.charAt(i);
        i += 1;
        setTimeout(animate, speed);
    } else if (i < 30) {
        span2.innerHTML += text.charAt(i);
        i += 1;
        setTimeout(animate, speed);
    } else if (i < 44) {
        span3.innerHTML += text.charAt(i);
        i += 1;
        setTimeout(animate, speed);
    }
    else {
        let v = document.getElementById('visitingText');
        let n = document.getElementsByClassName('hidden');
        v.classList.add('fadeIn');
        n[0].classList.add('fadeIn');
        n[1].classList.add('fadeIn');
        n[2].classList.add('fadeIn');
        n[3].classList.add('fadeIn');
    }
}
animate();