import './Carousel_3.css'

function Carousel_3(){
    return(
        <div className="Carousel_3">
            <div className="Carousel_3_heading">
                The Best of Entertainment
            </div>
            <div className="Carousel_3_slider_container">
                <div className="Carousel_3_slider">
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_1.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_2.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_3.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_4.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_5.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_6.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_7.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_8.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_9.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_10.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_11.jpg"/></div></a></div>
                    <div className="Carousel_3_cards"><a href="#"><div className="Carousel_3_cards_img_container"><img src="c_3_12.jpg"/></div></a></div>
                </div>
            </div>
            <div className="Carousel_3_navigators_container">
                <div className="Carousel_3_navigators">
                    <div className="Carousel_3_navigators_left"><div></div></div>
                    <div className="Carousel_3_navigators_right"><div></div></div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    var pos = 1;

    document.querySelector("div.Carousel_3_navigators_left").addEventListener("click",()=>{
        switch(pos){
            case 2:
                document.querySelector("div.Carousel_3_navigators_left").style = "visibility: hidden;";
                document.querySelector("div.Carousel_3_navigators_right").style = "visibility: visible;";
                document.querySelector("div.Carousel_3_slider").style = "transform:translateX(0)";
                pos=1;
                break;
            case 3:
                document.querySelector("div.Carousel_3_navigators_left").style = "visibility: visible;";
                document.querySelector("div.Carousel_3_navigators_right").style = "visibility: visible;";
                document.querySelector("div.Carousel_3_slider").style = "transform:translateX(-102%)";
                pos=2;
                break;
        }
    });

    document.querySelector("div.Carousel_3_navigators_right").addEventListener("click",()=>{
        switch(pos){
            case 1:
                document.querySelector("div.Carousel_3_navigators_left").style = "visibility: visible;";
                document.querySelector("div.Carousel_3_navigators_right").style = "visibility: visible;";
                document.querySelector("div.Carousel_3_slider").style = "transform:translateX(-102%)";
                pos=2;
                break;
            case 2:
                document.querySelector("div.Carousel_3_navigators_left").style = "visibility: visible;";
                document.querySelector("div.Carousel_3_navigators_right").style = "visibility: hidden;";
                document.querySelector("div.Carousel_3_slider").style = "transform:translateX(-143%)";
                pos=3;
                break;
        }
    });
}, 200);

export default Carousel_3;