import './PopularEvents.css'

function PopularEvents(){
    return(
        <div className="OutdoorEvents">
            <div className="OutdoorEvents_Text">
                <div className="OutdoorEvents_Text_1">
                    Popular Events
                </div>
                <div className="OutdoorEvents_Text_2">
                    See All
                    <div></div>
                </div>
            </div>
            <div className="OutdoorEvents_Carousel">
                <div className="PopularEvents_Slider">
                    <div><a><div><img src="c_8_1.jpg"/></div><div>Back Pain Relief Program</div><div>Watch On Zoom</div></a></div>
                    <div><a><div><img src="c_8_2.jpg"/></div><div>Re-Discover Culture</div><div>Watch On Zoom</div></a></div>
                    <div><a><div><img src="c_8_3.jpg"/></div><div>Fitness Mindset to Lose 3 Kgs in 30 Days</div><div>Online Streaming</div></a></div>
                    <div><a><div><img src="c_8_4.jpg"/></div><div>Improve Your Mental Health</div><div>Online Streaming</div></a></div>
                    <div><a><div><img src="c_8_5.jpg"/></div><div>Diabetes Is Curable?</div><div>Watch On Zoom</div></a></div>
                    <div><a><div><img src="c_8_6.jpg"/></div><div>Styling: Dress to impress by EMPLIHI</div><div>Watch On Zoom</div></a></div>
                    <div><a><div><img src="c_8_7.jpg"/></div><div>Learn Android App Development - Expert</div><div>Online Streaming</div></a></div>
                    <div><a><div><img src="c_8_8.jpg"/></div><div>Portrait Sketching- Hobbystation</div><div>Watch On Zoom</div></a></div>
                    <div><a><div><img src="c_8_9.jpg"/></div><div>Yoga Classes Online - Attakkalari Connect</div><div>Online Streaming</div></a></div>
                    <div><a><div><img src="c_8_10.jpg"/></div><div>IQ & EQ by EMPLIHI</div><div>Watch On Zoom</div></a></div>
                </div>
            </div>
            <div className="OutdoorEvents_Navigator_Container">
                <div className="OutdoorEvents_Navigator">
                    <div className="PopularEvents_Navigator_Left">
                        <div></div>
                    </div>
                    <div className="PopularEvents_Navigator_Right">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    try {
        document.querySelector("div.PopularEvents_Navigator_Left").addEventListener("click", ()=>{
            document.querySelector("div.PopularEvents_Slider").style = "transform:translateX(0%)";
            document.querySelector("div.PopularEvents_Navigator_Left").style = "visibility:hidden";
            document.querySelector("div.PopularEvents_Navigator_Right").style = "visibility:visible";
        });
    
        document.querySelector("div.PopularEvents_Navigator_Right").addEventListener("click", ()=>{
            document.querySelector("div.PopularEvents_Slider").style = "transform:translateX(-101.5%)";
            document.querySelector("div.PopularEvents_Navigator_Right").style = "visibility:hidden";
            document.querySelector("div.PopularEvents_Navigator_Left").style = "visibility:visible";
        });
    } catch (error) {
        
    }
}, 200);

export default PopularEvents;