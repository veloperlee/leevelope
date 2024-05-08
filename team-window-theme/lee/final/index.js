
    let runner = document.querySelectorAll(".runner");
    let bg = document.querySelector(".wrap");

    let walk = 0;
    let walk2 = 0;
    let walk3 = 0;

    function run(){
        walk++;
        runner[0].style.left = `${walk}px`;
    }

    function run2(){
        walk2 += 10;
        runner[1].style.left = `${walk2}px`;
    }
    function run3(){
        walk3 += 20;
        runner[2].style.left = `${walk3}px`;
    }

    bg.addEventListener("click", run);
    bg.addEventListener("click", run2);
    bg.addEventListener("click", run3);
