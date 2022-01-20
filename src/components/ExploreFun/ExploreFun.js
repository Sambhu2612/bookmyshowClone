import './ExploreFun.css'

function ExploreFun(){
    return(
        <div className="OutdoorEvents">
            <div className="OutdoorEvents_Text">
                <div className="OutdoorEvents_Text_1">
                    Explore Fun Activities
                </div>
                <div className="OutdoorEvents_Text_2">
                    See All
                    <div></div>
                </div>
            </div>
            <div className="OutdoorEvents_Carousel">
                <div className="ExploreFun_Slider">
                    <div><a><div><img src="c_10_1.jpg"/></div><div>Maa Kamkhya Devi Prasad</div><div>Online</div></a></div>
                    <div><a><div><img src="c_10_2.jpg"/></div><div>Explore Hagia Sophia Mosque And Hippodrome</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_10_3.jpg"/></div><div>Walk Through The Viewpoints Of Victoria Falls</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_10_4.jpg"/></div><div>Walk In Kyoto's Traditional Gion District</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_10_5.jpg"/></div><div>Prasad from Jagannath Puri</div><div>Online</div></a></div>
                    <div><a><div><img src="c_10_6.jpg"/></div><div>Walk Through The Fair City Of Dublin</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_10_7.jpg"/></div><div>Scenic Walk To The Eye- Catching Sites Of Hamburg</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_10_8.jpg"/></div><div>Kashi Prasad of Baba Vishwanath</div><div>Online</div></a></div>
                    <div><a><div><img src="c_10_9.jpg"/></div><div>Experience Meeting Of Waters In The Amazon...</div><div>Watch on Zoom</div></a></div>
                    <div><a><div><img src="c_10_10.jpg"/></div><div>Black Thunder Amusement Park</div><div>Black Thunder Water Theme Park</div></a></div>
                </div>
            </div>
            <div className="OutdoorEvents_Navigator_Container">
                <div className="OutdoorEvents_Navigator">
                    <div className="ExploreFun_Navigator_Left">
                        <div></div>
                    </div>
                    <div className="ExploreFun_Navigator_Right">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    try {
        document.querySelector("div.ExploreFun_Navigator_Left").addEventListener("click", ()=>{
            document.querySelector("div.ExploreFun_Slider").style = "transform:translateX(0%)";
            document.querySelector("div.ExploreFun_Navigator_Left").style = "visibility:hidden";
            document.querySelector("div.ExploreFun_Navigator_Right").style = "visibility:visible";
        });
    
        document.querySelector("div.ExploreFun_Navigator_Right").addEventListener("click", ()=>{
            document.querySelector("div.ExploreFun_Slider").style = "transform:translateX(-101.5%)";
            document.querySelector("div.ExploreFun_Navigator_Right").style = "visibility:hidden";
            document.querySelector("div.ExploreFun_Navigator_Left").style = "visibility:visible";
        });
    } catch (error) {
        
    }
}, 200);

export default ExploreFun;