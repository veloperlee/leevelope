// const job = document.querySelector("#job");
        
        // document.addEventListener("scroll", function(){
        //     const home = document.querySelector("#home");
        //     console.log(window.scrollY);
        //     if(window.scrollY <= 0){
        //         home.style.position = "fixed";
        //     }
        // });
        
        // document.addEventListener("scroll", function(){
        //     const about = document.querySelector("#about");
        //     console.log(window.scrollY);
        //     if(window.scrollY >= 800){
        //         about.classList.add('fixed');
        //         about.style.top = "150px";
        //     }else if(window.scrollY <= 800){
        //         about.classList.remove('fixed');
        //         // about.style.top = "150px";
        //     }
        // });



    // document.addEventListener("scroll", function(){
    //         console.log(window.scrollY);
    //     });

    const buttonTab = document.querySelectorAll(".button");
    for (const button of buttonTab) {
    // for(let i=0; i<buttonTab.length; i++){
        // const button = document.querySelector(".button");
        button.addEventListener("click", function(){
            const scrollTarget = parseInt(this.getAttribute('data-scroll-target'));
            window.scrollTo({
                top: scrollTarget,
                behavior: 'smooth'
            });
        });
    }

    // 같은 스크립트 코드 for 문으로 돌렸을 때
    // const buttonTab = document.querySelectorAll(".button");
    
    //  for(let i=0; i<buttonTab.length; i++){
    //     buttonTab[i].addEventListener("click", function(){
    //         const scrollTarget = parseInt(this.getAttribute('data-scroll-target'));
    //         window.scrollTo({
    //             top: scrollTarget,
    //             behavior: 'smooth'
    //         });
    //     });
    // }
