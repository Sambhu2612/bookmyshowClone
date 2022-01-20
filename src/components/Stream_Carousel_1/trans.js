let interval;
let timeout;
let pos = 1;
let timeouts = [];
let intervals = [];

let last = 0;
setInterval(() => {
    if(pos !== last){
        last = pos;
        document.querySelectorAll("div.Stream_Carousel_1_indicators").forEach((i)=>{
            i.style = "background-color: rgba(255, 255, 255, 0.5);";
        });
        document.querySelectorAll("div.Stream_Carousel_1_indicators div").forEach((i)=>{
            i.style = "transition:0s;width:0%";
        });
        document.querySelectorAll(`div.Stream_Carousel_1_indicators:nth-child(${pos})`).forEach((i)=>{
            i.style = "background-color: rgb(196, 197, 198);";
        });
        document.querySelectorAll(`div.Stream_Carousel_1_indicators:nth-child(${pos}) div`).forEach((i)=>{
            i.style = "width:100%";
        });
    }
}, 100);

function f1(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
            pos = 2;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
            pos = 2;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

f1();

function f2(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
            pos = 3;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
            pos = 3;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f3(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
            pos = 4;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
            pos = 4;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f4(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
            pos = 5;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
            pos = 5;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f5(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
            pos = 6;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
            pos = 6;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f6(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
            pos = 7;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
            pos = 7;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f7(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
            pos = 8;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
            pos = 8;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f8(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
            pos = 9;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
            pos = 9;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f9(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
            pos = 10;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
            pos = 10;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f10(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
            pos = 11;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
            pos = 11;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f11(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
            pos = 12;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
            pos = 12;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f12(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
            pos = 13;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
            pos = 13;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f13(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
            pos = 14;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
            pos = 14;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f14(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
            pos = 15;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
            pos = 15;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f15(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
            pos = 16;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
            pos = 16;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f16(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
            pos = 17;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
            pos = 17;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f17(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
            pos = 18;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
            pos = 18;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f18(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
            pos = 19;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
            pos = 19;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f19(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
            pos = 20;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
            pos = 20;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                pos = 1;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

function f20(){
    timeouts.push(setTimeout(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
            pos = 1;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 123500));
        } catch (error) {
            
        }
    }, 5000));
    
    interval = setInterval(() => {
        try {
            document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
            pos = 1;
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                pos = 2;
            }, 6500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                pos = 3;
            }, 13000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                pos = 4;
            }, 19500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                pos = 5;
            }, 26000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                pos = 6;
            }, 32500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                pos = 7;
            }, 39000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                pos = 8;
            }, 45500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                pos = 9;
            }, 52000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                pos = 10;
            }, 58500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                pos = 11;
            }, 65000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                pos = 12;
            }, 71500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                pos = 13;
            }, 78000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                pos = 14;
            }, 84500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                pos = 15;
            }, 91000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                pos = 16;
            }, 97500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                pos = 17;
            }, 104000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                pos = 18;
            }, 110500));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                pos = 19;
            }, 117000));
            timeouts.push(setTimeout(() => {
                document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                pos = 20;
            }, 123500));
        } catch (error) {
            
        }
    }, 135000);
}

setTimeout(() => {
    try {
        document.querySelector("div.Stream_Carousel_1_Navigator_Left").addEventListener("click",(event)=>{
            event.stopPropagation();
            switch(pos){
                case 1:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                    pos = 20;
                    setTimeout(() => {
                        f20();
                    }, 2);
                    break;
                case 2:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                    pos = 1;
                    setTimeout(() => {
                        f1();
                    }, 2);
                    break;
                case 3:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                    pos = 2;
                    setTimeout(() => {
                        f2();
                    }, 2);
                    break;
                case 4:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                    pos = 3;
                    setTimeout(() => {
                        f3();
                    }, 2);
                    break;
                case 5:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                    pos = 4;
                    setTimeout(() => {
                        f4();
                    }, 2);
                    break;
                case 6:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                    pos = 5;
                    setTimeout(() => {
                        f5();
                    }, 2);
                    break;
                case 7:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                    pos = 6;
                    setTimeout(() => {
                        f6();
                    }, 2);
                    break;
                case 8:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                    pos = 7;
                    setTimeout(() => {
                        f7();
                    }, 2);
                    break;
                case 9:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                    pos = 8;
                    setTimeout(() => {
                        f8();
                    }, 2);
                    break;
                case 10:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                    pos = 9;
                    setTimeout(() => {
                        f9();
                    }, 2);
                    break;
                case 11:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                    pos = 10;
                    setTimeout(() => {
                        f10();
                    }, 2);
                    break;
                case 12:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                    pos = 11;
                    setTimeout(() => {
                        f11();
                    }, 2);
                    break;
                case 13:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                    pos = 12;
                    setTimeout(() => {
                        f12();
                    }, 2);
                    break;
                case 14:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                    pos = 13;
                    setTimeout(() => {
                        f13();
                    }, 2);
                    break;
                case 15:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                    pos = 14;
                    setTimeout(() => {
                        f14();
                    }, 2);
                    break;
                case 16:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                    pos = 15;
                    setTimeout(() => {
                        f15();
                    }, 2);
                    break;
                case 17:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                    pos = 16;
                    setTimeout(() => {
                        f16();
                    }, 2);
                    break;
                case 18:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                    pos = 17;
                    setTimeout(() => {
                        f17();
                    }, 2);
                    break;
                case 19:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                    pos = 18;
                    setTimeout(() => {
                        f18();
                    }, 2);
                    break;
                case 20:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                    pos = 19;
                    setTimeout(() => {
                        f19();
                    }, 2);
                    break;
            }
        });
        document.querySelector("div.Stream_Carousel_1_Navigator_Right").addEventListener("click",(event)=>{
            event.stopPropagation();
            switch(pos){
                case 1:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-100vw);";
                    pos = 2;
                    setTimeout(() => {
                        f2();
                    }, 2);
                    break;
                case 2:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-200vw);";
                    pos = 3;
                    setTimeout(() => {
                        f3();
                    }, 2);
                    break;
                case 3:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-300vw);";
                    pos = 4;
                    setTimeout(() => {
                        f4();
                    }, 2);
                    break;
                case 4:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-400vw);";
                    pos = 5;
                    setTimeout(() => {
                        f5();
                    }, 2);
                    break;
                case 5:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-500vw);";
                    pos = 6;
                    setTimeout(() => {
                        f6();
                    }, 2);
                    break;
                case 6:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-600vw);";
                    pos = 7;
                    setTimeout(() => {
                        f7();
                    }, 2);
                    break;
                case 7:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-700vw);";
                    pos = 8;
                    setTimeout(() => {
                        f8();
                    }, 2);
                    break;
                case 8:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-800vw);";
                    pos = 9;
                    setTimeout(() => {
                        f9();
                    }, 2);
                    break;
                case 9:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-900vw);";
                    pos = 10;
                    setTimeout(() => {
                        f10();
                    }, 2);
                    break;
                case 10:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1000vw);";
                    pos = 11;
                    setTimeout(() => {
                        f11();
                    }, 2);
                    break;
                case 11:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1100vw);";
                    pos = 12;
                    setTimeout(() => {
                        f12();
                    }, 2);
                    break;
                case 12:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1200vw);";
                    pos = 13;
                    setTimeout(() => {
                        f13();
                    }, 2);
                    break;
                case 13:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1300vw);";
                    pos = 14;
                    setTimeout(() => {
                        f14();
                    }, 2);
                    break;
                case 14:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1400vw);";
                    pos = 15;
                    setTimeout(() => {
                        f15();
                    }, 2);
                    break;
                case 15:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1500vw);";
                    pos = 16;
                    setTimeout(() => {
                        f16();
                    }, 2);
                    break;
                case 16:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1600vw);";
                    pos = 17;
                    setTimeout(() => {
                        f17();
                    }, 2);
                    break;
                case 17:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1700vw);";
                    pos = 18;
                    setTimeout(() => {
                        f18();
                    }, 2);
                    break;
                case 18:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1800vw);";
                    pos = 19;
                    setTimeout(() => {
                        f19();
                    }, 2);
                    break;
                case 19:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(-1900vw);";
                    pos = 20;
                    setTimeout(() => {
                        f20();
                    }, 2);
                    break;
                case 20:
                    clrAllTimeouts();
                    clearInterval(interval);
                    document.querySelector("div.Stream_Carousel_1_slider").style = "transform: translateX(0);";
                    pos = 1;
                    setTimeout(() => {
                        f1();
                    }, 2);
                    break;
            }
        });
    } catch (error) {
        
    }
}, 200);

function clrAllTimeouts(){
    timeouts.forEach((i)=>{
        clearTimeout(i);
    });
    timeouts = [];
}

// setInterval(() => {
//     console.log(timeouts);
// }, 5000);