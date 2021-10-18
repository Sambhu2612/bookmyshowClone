import "./OnlineStreamingEvents.css";

function OnlineStreamingEvents(){
    return(
        <div className="Online_Streaming_Events">
            <div className="Online_Streaming_Events_Text">Online Streaming Events<div>See All<div></div></div></div>
            <div className="Online_Streaming_Events_Carousel">
                <div className="Online_Streaming_Events_Slider">
                    <div>
                        <a href="#">
                            <div><img src="c_5_1.jpg"/></div>
                            <div>Data Science</div>
                            <div>Online Streaming</div>
                        </a>
                    </div>
                    <div><a href="#"><div><img src="c_5_2.jpg"/></div><div>FrontRow Open Mics</div><div>Watch on Zoom</div></a></div>
                    <div><a href="#"><div><img src="c_5_3.jpg"/></div><div>WEIGHT LOSS WEBINAR</div><div>Watch on Zoom</div></a></div>
                    <div><a href="#"><div><img src="c_5_4.jpg"/></div><div>Digital Marketing & Communication</div><div>Online Streaming</div></a></div>
                    <div><a href="#"><div><img src="c_5_5.jpg"/></div><div>Executive PG Programme in Machine Learning & AI</div><div>Online Streaming</div></a></div>
                    <div><a href="#"><div><img src="c_5_6.jpg"/></div><div>Introduction to Found Poetry- A One Page...</div><div>Online Streaming</div></a></div>
                    <div><a href="#"><div><img src="c_5_7.jpg"/></div><div>Art and Craft Online Workshop</div><div>Watch on Zoom</div></a></div>
                    <div><a href="#"><div><img src="c_5_8.jpg"/></div><div>Smartphone Photography - Unleash the Pro Mode</div><div>Watch on Zoom</div></a></div>
                    <div><a href="#"><div><img src="c_5_9.jpg"/></div><div>Pencil Sketching, Shading for Adults - Hobbystation</div><div>Watch on Zoom</div></a></div>
                    <div><a href="#"><div><img src="c_5_10.jpg"/></div><div>Sudoku by EMPLIHI</div><div>Watch on Zoom</div></a></div>
                </div>
            </div>
            <div className="Online_Streaming_Events_Carousel_navigators_container">
                <div className="Online_Streaming_Events_Carousel_navigators">
                    <div className="Online_Streaming_Events_Carousel_navigators_left"><div></div></div>
                    <div className="Online_Streaming_Events_Carousel_navigators_right"><div></div></div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    document.querySelector("div.Online_Streaming_Events_Carousel_navigators_left").addEventListener("click", ()=>{
        document.querySelector("div.Online_Streaming_Events_Slider").style = "transform:translateX(0%)";
        document.querySelector("div.Online_Streaming_Events_Carousel_navigators_left").style = "visibility:hidden";
        document.querySelector("div.Online_Streaming_Events_Carousel_navigators_right").style = "visibility:visible";
    });

    document.querySelector("div.Online_Streaming_Events_Carousel_navigators_right").addEventListener("click", ()=>{
        document.querySelector("div.Online_Streaming_Events_Slider").style = "transform:translateX(-101.5%)";
        document.querySelector("div.Online_Streaming_Events_Carousel_navigators_right").style = "visibility:hidden";
        document.querySelector("div.Online_Streaming_Events_Carousel_navigators_left").style = "visibility:visible";
    });
}, 200);

export default OnlineStreamingEvents;