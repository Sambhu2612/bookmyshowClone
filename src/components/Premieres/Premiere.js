import "./Premiere.css"

function Premiere(){
    return(
        <div className="Premiere">
            <div className="Premiere_Upper_Section">
                <div>
                    <img src="Premiere.jpg"/>
                </div>
            </div>
            <div className="Premiere_text">
                <div className="Premiere_text_1">
                    Premieres
                    <div>See All<div></div></div>
                </div>
                <div className="Premiere_text_2">
                    Brand new releases every Friday
                </div>
            </div>
            <div className="Premiere_carousel">
                <div className="Premiere_carousel_slider">
                    <div>
                        <a>
                            <div><img src="c_4_1.jpg"/></div>
                            <div>Jeevnane Natka Samy</div>
                            <div>Kannada</div>
                        </a>
                    </div>
                    <div><a href="#"><div><img src="c_4_2.jpg"/></div><div>The Conjuring:The Devil Made Me Do It</div><div>English</div></a></div>
                    <div><a href="#"><div><img src="c_4_3.jpg"/></div><div>The Suicide Squad</div><div>English</div></a></div>
                    <div><a href="#"><div><img src="c_4_4.jpg"/></div><div>Rewind</div><div>Kannada</div></a></div>
                    <div><a href="#"><div><img src="c_4_5.jpg"/></div><div>Zack Snyder's Justice League</div><div>English</div></a></div>
                    <div><a href="#"><div><img src="c_4_6.jpg"/></div><div>Kabullywood</div><div>Farsi</div></a></div>
                    <div><a href="#"><div><img src="c_4_7.jpg"/></div><div>Clementine</div><div>English</div></a></div>
                    <div><a href="#"><div><img src="c_4_8.jpg"/></div><div>Tailgate</div><div>English</div></a></div>
                    <div><a href="#"><div><img src="c_4_9.jpg"/></div><div>Justice Society: World War II</div><div>English</div></a></div>
                    <div><a href="#"><div><img src="c_4_10.jpg"/></div><div>Ammonite</div><div>English</div></a></div>
                </div>
            </div>
            <div className="Premiere_carousel_navigator_container">
                <div className="Premiere_carousel_navigator">
                    <div className="Premiere_carousel_navigator_left"><div></div></div>
                    <div className="Premiere_carousel_navigator_right"><div></div></div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    try {
        document.querySelector("div.Premiere_carousel_navigator_left").addEventListener("click", ()=>{
            document.querySelector("div.Premiere_carousel_slider").style = "transform:translateX(0%)";
            document.querySelector("div.Premiere_carousel_navigator_left").style = "visibility:hidden";
            document.querySelector("div.Premiere_carousel_navigator_right").style = "visibility:visible";
        });
        document.querySelector("div.Premiere_carousel_navigator_right").addEventListener("click", ()=>{
            document.querySelector("div.Premiere_carousel_slider").style = "transform:translateX(-102%)";
            document.querySelector("div.Premiere_carousel_navigator_right").style = "visibility:hidden";
            document.querySelector("div.Premiere_carousel_navigator_left").style = "visibility:visible";
        });
    } catch (error) {
        
    }
}, 200);

export default Premiere;