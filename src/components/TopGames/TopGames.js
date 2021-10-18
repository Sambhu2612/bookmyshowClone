import './TopGames.css'

function TopGames(){
    return(
        <div className="OutdoorEvents">
            <div className="OutdoorEvents_Text">
                <div className="OutdoorEvents_Text_1">
                    Top Games & Sport Events
                </div>
                <div className="OutdoorEvents_Text_2">
                    See All
                    <div></div>
                </div>
            </div>
            <div className="OutdoorEvents_Carousel">
                <div className="TopGames_Slider">
                    <div><a><div><img src="c_9_1.jpg"/></div><div>Travelling Clues - Online Games</div><div>Multiple Venues</div></a></div>
                    <div><a><div><img src="c_9_2.jpg"/></div><div>Enerzal Run or Ride Season 2</div><div>Online</div></a></div>
                    <div><a><div><img src="c_9_3.jpg"/></div><div>Online Game - Lost Treasure of Sunderbans</div><div>Online (Play From Home)</div></a></div>
                    <div><a><div><img src="c_9_4.jpg"/></div><div>Online Game - Flight 9032 Murder Mystery</div><div>Online (Play From Home)</div></a></div>
                    <div><a><div><img src="c_9_5.jpg"/></div><div>Call of Duty Mobile Tournament</div><div>Online (Play From Home)</div></a></div>
                    <div><a><div><img src="c_9_6.jpg"/></div><div>Free Fire Solo And Squad (Bermuda)</div><div>Online (Play From Home)</div></a></div>
                    <div><a><div><img src="c_9_7.jpg"/></div><div>BGMI Rush Tournament</div><div>Online (Play From Home)</div></a></div>
                    <div><a><div><img src="c_9_8.jpg"/></div><div>Quarter-Final 1 and 3, Marseille</div><div>Stade Velodrome</div></a></div>
                    <div><a><div><img src="c_9_9.jpg"/></div><div>POOL A* New Zealand v France</div><div>Stade de France: Saint-Denis</div></a></div>
                    <div><a><div><img src="c_9_10.jpg"/></div><div>BGMI Tournament - Everynight</div><div>Online (Play From Home)</div></a></div>
                </div>
            </div>
            <div className="OutdoorEvents_Navigator_Container">
                <div className="OutdoorEvents_Navigator">
                    <div className="TopGames_Navigator_Left">
                        <div></div>
                    </div>
                    <div className="TopGames_Navigator_Right">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    document.querySelector("div.TopGames_Navigator_Left").addEventListener("click", ()=>{
        document.querySelector("div.TopGames_Slider").style = "transform:translateX(0%)";
        document.querySelector("div.TopGames_Navigator_Left").style = "visibility:hidden";
        document.querySelector("div.TopGames_Navigator_Right").style = "visibility:visible";
    });

    document.querySelector("div.TopGames_Navigator_Right").addEventListener("click", ()=>{
        document.querySelector("div.TopGames_Slider").style = "transform:translateX(-101.5%)";
        document.querySelector("div.TopGames_Navigator_Right").style = "visibility:hidden";
        document.querySelector("div.TopGames_Navigator_Left").style = "visibility:visible";
    });
}, 200);

export default TopGames;