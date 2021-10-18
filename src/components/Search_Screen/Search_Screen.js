import './Search_Screen.css';

function Search_Screen(){
    return(
        <div className="Search_Screen">
            <div className="Search_Screen_Head">
                <div className="Search_Screen_Exit"><svg width="16" height="16" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg"><title>Left Arrow</title><path d="M5.35.958a.572.572 0 0 0 0-.747.447.447 0 0 0-.68 0L.63 4.68a.569.569 0 0 0 0 .75L4.67 9.9c.19.208.49.208.68 0a.572.572 0 0 0 0-.747L1.645 5.055 5.35.958z" fill="#999"></path></svg></div>
                <div>
                    <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                </div>
                <div className="Search_Screen_Exit"><svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><title>Close</title><g fill="#000"><path d="M13.125 0l-7.5 7.5 7.5 7.5 1.429-1.428L8.482 7.5l6.072-6.071z"></path><path d="M1.429 0l7.5 7.5-7.5 7.5-1.43-1.428L6.072 7.5 0 1.43z"></path></g></svg></div>
            </div>
            <div className="Search_Screen_Body">
                <div className="Search_Screen_Body_1">
                    <div className="Search_Screen_Body_Choices">
                        <div className="Search_Screen_Body_Choices_movies">
                            MOVIES
                        </div>
                        <div className="Search_Screen_Body_Choices_cinemas">
                            CINEMAS
                        </div>
                    </div>
                    <div className="Search_Screen_Body_Filter">
                        <div>Filter</div>
                        <div>HINDI</div>
                        <div>ENGLISH</div>
                        <div>TELUGU</div>
                        <div>ODIA</div>
                    </div>
                </div>
                <div className="Search_Screen_Body_2">
                    <div className="Search_Screen_Body_2_movies">
                        <div className="Search_Screen_Body_2_movies_cards">
                            <div>HINDI</div>
                            <div>
                                <a href="#">
                                    <div>No Time To Die (Hindi) (UA)</div>
                                    <div><svg width="10px" height="10px" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><title>28028</title><path d="M5 1.585C3.549-.644 1.867.054 1.46.297.59.824 0 1.837 0 3c0 .333.05.653.14.952C.624 6.332 5 9.333 5 9.333s4.375-3.001 4.86-5.381c.09-.3.14-.62.14-.952C10 1.837 9.41.825 8.54.297 8.134.054 6.09-.643 5 1.585z" fill="#E7364D"></path></svg></div>
                                    <div>82%</div>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <div>Venom: Let There Be Carnage (3D Hindi) (UA)</div>
                                    <div>NEW<svg width="10px" height="10px" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><title>28028</title><path d="M5 1.585C3.549-.644 1.867.054 1.46.297.59.824 0 1.837 0 3c0 .333.05.653.14.952C.624 6.332 5 9.333 5 9.333s4.375-3.001 4.86-5.381c.09-.3.14-.62.14-.952C10 1.837 9.41.825 8.54.297 8.134.054 6.09-.643 5 1.585z" fill="#E7364D"></path></svg></div>
                                    <div>83%</div>
                                </a>
                            </div>
                        </div>
                        <div className="Search_Screen_Body_2_movies_cards">
                            <div>ENGLISH</div>
                            <div>
                                <a href="#">
                                    <div>Venom: Let There Be Carnage (3D) (UA)</div>
                                    <div>NEW<svg width="10px" height="10px" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><title>28028</title><path d="M5 1.585C3.549-.644 1.867.054 1.46.297.59.824 0 1.837 0 3c0 .333.05.653.14.952C.624 6.332 5 9.333 5 9.333s4.375-3.001 4.86-5.381c.09-.3.14-.62.14-.952C10 1.837 9.41.825 8.54.297 8.134.054 6.09-.643 5 1.585z" fill="#E7364D"></path></svg></div>
                                    <div>83%</div>
                                </a>
                            </div>
                        </div>
                        <div className="Search_Screen_Body_2_movies_cards">
                            <div>TELUGU</div>
                            <div>
                                <a href="#">
                                    <div>Pelli SandaD (U)</div>
                                    <div>NEW<svg width="10px" height="10px" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><title>28028</title><path d="M5 1.585C3.549-.644 1.867.054 1.46.297.59.824 0 1.837 0 3c0 .333.05.653.14.952C.624 6.332 5 9.333 5 9.333s4.375-3.001 4.86-5.381c.09-.3.14-.62.14-.952C10 1.837 9.41.825 8.54.297 8.134.054 6.09-.643 5 1.585z" fill="#E7364D"></path></svg></div>
                                    <div>72%</div>
                                </a>
                            </div>
                        </div>
                        <div className="Search_Screen_Body_2_movies_cards">
                            <div>ODIA</div>
                            <div>
                                <a href="#">
                                    <div>Gaon Ra Na Galuapur (U)</div>
                                    <div>NEW</div>
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <div>Mana Mo Neigalu Re (U)</div>
                                    <div>NEW</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Search_Screen_Body_2_cinemas">
                        <ul>
                            <li><a href="#">Brundaban Talkies: Cuttack</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">INOX: Cuttack SGBL Square Mall</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Sangam Cineplex: Cuttack</a></li>
                        </ul>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    document.querySelector("div.Search_Box").addEventListener("click",()=>{
        document.querySelector("div.Search_Screen").style = "display:flex;";
        document.querySelector("body").style = "overflow-y:hidden";
    });

    document.querySelectorAll("div.Search_Screen_Exit").forEach((i)=>{
        i.addEventListener("click",()=>{
            document.querySelector("div.Search_Screen").style = "display:none;";
            document.querySelector("body").style = "overflow-y:scroll";
        });
    });

    document.querySelector("div.Search_Screen_Body_Choices_movies").addEventListener("click",()=>{
        document.querySelector("div.Search_Screen_Body_Choices_movies").style = "background:rgb(255,255,255);";
        document.querySelector("div.Search_Screen_Body_Choices_cinemas").style = "background: rgb(242, 242, 242);";
        document.querySelector("div.Search_Screen_Body_2_cinemas").style = "display:none";
        document.querySelector("div.Search_Screen_Body_2_movies").style = "display:flex";
        document.querySelector("div.Search_Screen_Body_Filter").style = "visibility:visible";
    });

    document.querySelector("div.Search_Screen_Body_Choices_cinemas").addEventListener("click",()=>{
        document.querySelector("div.Search_Screen_Body_Choices_cinemas").style = "background:rgb(255,255,255);";
        document.querySelector("div.Search_Screen_Body_Choices_movies").style = "background: rgb(242, 242, 242);";
        document.querySelector("div.Search_Screen_Body_2_cinemas").style = "display:flex";
        document.querySelector("div.Search_Screen_Body_2_movies").style = "display:none";
        document.querySelector("div.Search_Screen_Body_Filter").style = "visibility:hidden";
    });

    document.querySelector("div.Search_Screen_Body_Choices_movies").click();
}, 200);

export default Search_Screen;