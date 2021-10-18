import './LaughterTherapy.css'

function LaughterTherapy(){
    return(
        <div className="OutdoorEvents">
            <div className="OutdoorEvents_Text">
                <div className="OutdoorEvents_Text_1">
                    Laughter Therapy
                </div>
                <div className="OutdoorEvents_Text_2">
                    See All
                    <div></div>
                </div>
            </div>
            <div className="OutdoorEvents_Carousel">
                <div className="LaughterTherapy_Slider">
                    <div><a><div><img src="c_7_1.jpg"/></div><div>Kadaisi Naal - A Tamil Talk Show</div><div>Alliance Francaise of Madras: Chennai</div></a></div>
                    <div><a><div><img src="c_7_2.jpg"/></div><div>Punchliners Comedy Show ft Daniel Fernandes</div><div>Novotel Chennai OMR</div></a></div>
                    <div><a><div><img src="c_7_3.jpg"/></div><div>Vinay Sharma Live on Zoom</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_7_4.jpg"/></div><div>In Conversation with Jeeya</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_7_5.jpg"/></div><div>DiGi Open Mic-Stand Up Comedy</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_7_6.jpg"/></div><div>Knotty Conversations - Manish Tyagi Live</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_7_7.jpg"/></div><div>Rabhinder Kannan Live</div><div>Backyard: Chennai</div></a></div>
                    <div><a><div><img src="c_7_8.jpg"/></div><div>On The Spot - Improv Comedy Show</div><div>Backyard: Chennai</div></a></div>
                    <div><a><div><img src="c_7_9.jpg"/></div><div>A Bad Good Girl ft. Ankita Shrivastav</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_7_10.jpg"/></div><div>Vivek Muralidharan Live</div><div>The Board Room: Chennai</div></a></div>
                </div>
            </div>
            <div className="OutdoorEvents_Navigator_Container">
                <div className="OutdoorEvents_Navigator">
                    <div className="LaughterTherapy_Navigator_Left">
                        <div></div>
                    </div>
                    <div className="LaughterTherapy_Navigator_Right">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    document.querySelector("div.LaughterTherapy_Navigator_Left").addEventListener("click", ()=>{
        document.querySelector("div.LaughterTherapy_Slider").style = "transform:translateX(0%)";
        document.querySelector("div.LaughterTherapy_Navigator_Left").style = "visibility:hidden";
        document.querySelector("div.LaughterTherapy_Navigator_Right").style = "visibility:visible";
    });

    document.querySelector("div.LaughterTherapy_Navigator_Right").addEventListener("click", ()=>{
        document.querySelector("div.LaughterTherapy_Slider").style = "transform:translateX(-101.5%)";
        document.querySelector("div.LaughterTherapy_Navigator_Right").style = "visibility:hidden";
        document.querySelector("div.LaughterTherapy_Navigator_Left").style = "visibility:visible";
    });
}, 200);

export default LaughterTherapy;