var pos = 1;
setTimeout(() => {
    document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(255,255,255)";
}, 200);
setTimeout(() => {
    document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-32.1%)";
    document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
    document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(255,255,255)";
    document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
    pos = 2;
    setTimeout(() => {
        document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-52.15%)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(255,255,255)";
        pos = 3;
    }, 3000);
    setTimeout(() => {
        document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-12.08%)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(255,255,255)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
        pos = 1;
    }, 6000);
}, 2000);

setTimeout(() => {
    setInterval(() => {
        document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-32.1%)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(255,255,255)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
        pos = 2;
        setTimeout(() => {
            document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-52.15%)";
            document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
            document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
            document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(255,255,255)";
            pos = 3;
        }, 3000);
        setTimeout(() => {
            document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-12.08%)";
            document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(255,255,255)";
            document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
            document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
            pos = 1;
        }, 6000);
    }, 9000);
}, 2000);


// This timeout is because of the rendering time of the elements, donot try to manipulate an element before it is rendered
setTimeout(() => {
    document.querySelector("div.next").addEventListener("click", ()=>{
        switch(pos){
            case 1:
                document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-32.1%)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(255,255,255)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
                pos = 2;
                break;
            case 2:
                document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-52.15%)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(255,255,255)";
                pos = 3;
                break;
            case 3:
                document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-12.08%)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(255,255,255)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
                pos = 1;
                break;
        }
    });
    
    document.querySelector("div.prev").addEventListener("click", ()=>{
        switch(pos){
            case 1:
                document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-52.15%)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(255,255,255)";
                pos = 3;
                break;
            case 2:
                document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-12.08%)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(255,255,255)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
                pos = 1;
                break;
            case 3:
                document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-32.1%)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(255,255,255)";
                document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
                pos = 2;
                break;
        }
    });
    
    
    document.querySelector("div.pos_1").addEventListener("click",()=>{
        document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-12.08%)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(255,255,255)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
        pos = 1;
    });
    
    document.querySelector("div.pos_2").addEventListener("click",()=>{
        document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-32.1%)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(255,255,255)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(129, 133, 139)";
        pos = 2;
    });
    
    document.querySelector("div.pos_3").addEventListener("click",()=>{
        document.querySelector("section.Carousel_1 div:nth-child(1) div:nth-child(1)").style = "transform: translateX(-52.15%)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(1)").style = "background: rgb(129, 133, 139)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(2)").style = "background: rgb(129, 133, 139)";
        document.querySelector("section.Carousel_1 div:nth-child(3) div:nth-child(1) div:nth-child(3)").style = "background: rgb(255,255,255)";
        pos = 3;
    });
}, 200);