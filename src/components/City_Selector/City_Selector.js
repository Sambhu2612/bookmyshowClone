import './City_Selector.css';

function City_Selector(){
    return(
        <div className="City_Selector">
            <div className="City_Selector_Sub_Section">
                <div className="City_Selector_Sub_Section_1">
                    <div><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><title>Search</title><path d="M11.8 10.864L8.859 7.918a4.912 4.912 0 0 0-.444-6.47A4.888 4.888 0 0 0 4.928 0a4.888 4.888 0 0 0-3.485 1.449 4.942 4.942 0 0 0 0 6.979 4.888 4.888 0 0 0 3.485 1.449c1.052 0 2.105-.33 2.976-1.005l2.96 2.93a.658.658 0 0 0 .476.198.686.686 0 0 0 .477-.198.672.672 0 0 0-.016-.938zm-6.855-2.32c-.97 0-1.858-.38-2.549-1.054C1 6.09 1 3.802 2.396 2.387a3.578 3.578 0 0 1 2.549-1.054c.97 0 1.858.379 2.548 1.054s1.052 1.58 1.052 2.551c0 .971-.378 1.86-1.052 2.552a3.539 3.539 0 0 1-2.548 1.053z" fill="#777"></path></svg></div>
                    <input type="text" placeholder="Search for your city"/>
                </div>
                <div className="City_Selector_Sub_Section_2">
                    <div className="City_Selector_Sub_Section_2_1">Popular Cities</div>
                    <div className="City_Selector_Sub_Section_2_2">
                        <div><a><div><img src="mumbai.jpg"/></div><div>Mumbai</div></a></div>
                        <div><a><div><img src="ncr.jpg"/></div><div>NCR</div></a></div>
                        <div><a><div><img src="bang.jpg"/></div><div>Bengaluru</div></a></div>
                        <div><a><div><img src="hyd.jpg"/></div><div>Hyderabad</div></a></div>
                        <div><a><div><img src="ahd.jpg"/></div><div>Ahmedabad</div></a></div>
                        <div><a><div><img src="chd.jpg"/></div><div>Chandigarh</div></a></div>
                        <div><a><div><img src="chen.jpg"/></div><div>Chennai</div></a></div>
                        <div><a><div><img src="pune.jpg"/></div><div>Pune</div></a></div>
                        <div><a><div><img src="kolk.jpg"/></div><div>Kolkata</div></a></div>
                        <div><a><div><img src="koch.jpg"/></div><div>Kochi</div></a></div>
                    </div>
                </div>
                <div className="City_Selector_Sub_Section_3">View All Cities</div>
            </div>
        </div>
    );
}

// event listners are defined in the blackoverlay.js

export default City_Selector;