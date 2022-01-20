import './OutdoorEvents.css'

function OutdoorEvents(){
    return(
        <div className="OutdoorEvents">
            <div className="OutdoorEvents_Text">
                <div className="OutdoorEvents_Text_1">
                    Outdoor Events
                    <div>NEW</div>
                </div>
                <div className="OutdoorEvents_Text_2">
                    See All
                    <div></div>
                </div>
            </div>
            <div className="OutdoorEvents_Carousel">
                <div className="OutdoorEvents_Slider">
                    <div><a><div><img src="c_6_1.jpg"/></div><div>Snow Kingdom Chennai</div><div>Snow Kingdom: Chennai</div></a></div>
                    <div><a><div><img src="c_6_2.jpg"/></div><div>Coffee</div><div>Alliance Francaise of Madras:Chennai</div></a></div>
                    <div><a><div><img src="c_6_3.jpg"/></div><div>Amarar Kalki-in Ponniyin Selvan Play</div><div>Sir Pitty Thyagaraya Hall: Chennai</div></a></div>
                    <div><a><div><img src="c_6_4.jpg"/></div><div>Queen Of Concerts</div><div>Shri Thiyaga Brahma Hall: Chennai</div></a></div>
                    <div><a><div><img src="c_6_5.jpg"/></div><div>Jagan Krishnan - A Stand Up Tester Show</div><div>Offbeat Music Ventures: Chennai</div></a></div>
                    <div><a><div><img src="c_6_6.jpg"/></div><div>Lockdown Waale Frustrations: Ahmed...</div><div>Offbeat Music Ventures: Chennai</div></a></div>
                    <div><a><div><img src="c_6_7.jpg"/></div><div>Movie Screening In Private Mini Theater</div><div>Marlen cinemas 3D Theatre: Chennai</div></a></div>
                    <div><a><div><img src="c_6_8.jpg"/></div><div>Comedy Express - YouTube Recording</div><div>Offbeat Music Ventures: Chennai</div></a></div>
                    <div><a><div><img src="c_6_9.jpg"/></div><div>AB HAI APKI BARI - INDER SAHANI - INDIA TOUR</div><div>Soul Garden Bistro,Kilpauk: Chennai</div></a></div>
                    <div><a><div><img src="c_6_10.jpg"/></div><div>Nadhiye Nadhiye</div><div>Vani Mahal: Chennai</div></a></div>
                </div>
            </div>
            <div className="OutdoorEvents_Navigator_Container">
                <div className="OutdoorEvents_Navigator">
                    <div className="OutdoorEvents_Navigator_Left">
                        <div></div>
                    </div>
                    <div className="OutdoorEvents_Navigator_Right">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    try {
        document.querySelector("div.OutdoorEvents_Navigator_Left").addEventListener("click", ()=>{
            document.querySelector("div.OutdoorEvents_Slider").style = "transform:translateX(0%)";
            document.querySelector("div.OutdoorEvents_Navigator_Left").style = "visibility:hidden";
            document.querySelector("div.OutdoorEvents_Navigator_Right").style = "visibility:visible";
        });
    
        document.querySelector("div.OutdoorEvents_Navigator_Right").addEventListener("click", ()=>{
            document.querySelector("div.OutdoorEvents_Slider").style = "transform:translateX(-101.5%)";
            document.querySelector("div.OutdoorEvents_Navigator_Right").style = "visibility:hidden";
            document.querySelector("div.OutdoorEvents_Navigator_Left").style = "visibility:visible";
        });
    } catch (error) {
        
    }
}, 200);

export default OutdoorEvents;