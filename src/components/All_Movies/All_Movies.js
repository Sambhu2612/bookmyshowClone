import './All_Movies.css'
import { useState,useEffect } from 'react';
import axios from "axios";

function All_Movies(){
    const [data, setData] = useState([]); // using empty array to initialise data in array format
    useEffect(async ()=>{
        try {
            const res = await axios.get('http://localhost:5000/movies');
            setData(res.data);
        } catch (error) {
            
        }
    },[]);
    return(
        <div className="All_Movies_container">
            <div className="All_Movies">
                <div className="All_Movies_left_subsection">
                    <div className="All_Movies_left_subsection_heading">
                        Filters
                    </div>
                    <div className="All_Movies_left_subsection_languages_container">
                        <div className="All_Movies_left_subsection_languages">
                            <div className="All_Movies_left_subsection_languages_label_container">
                                <div className="All_Movies_left_subsection_languages_label_img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>
                                </div>
                                Languages
                            </div>
                            <div className="All_Movies_left_subsection_languages_clear">
                                Clear
                            </div>
                        </div>
                        <div className="All_Movies_left_subsection_hidden_section">
                            <div className="options">English</div>
                            <div className="options">Tamil</div>
                            <div className="options">Telugu</div>
                            <div className="options">Hindi</div>
                            <div className="options">Kannada</div>
                            <div className="options">Malayalam</div>
                        </div>
                    </div>
                    <div className="All_Movies_left_subsection_genres_container">
                        <div className="All_Movies_left_subsection_genres">
                            <div className="All_Movies_left_subsection_genres_label_container">
                                <div className="All_Movies_left_subsection_genres_label_img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>
                                </div>
                                Genres
                            </div>
                            <div className="All_Movies_left_subsection_genres_clear">
                                Clear
                            </div>
                        </div>
                        <div className="All_Movies_left_subsection_hidden_section">
                            <div className="options">Action</div>
                            <div className="options">Drama</div>
                            <div className="options">Thriller</div>
                            <div className="options">Romantic</div>
                            <div className="options">Comedy</div>
                            <div className="options">Adventure</div>
                            <div className="options">Crime</div>
                            <div className="options">Horror</div>
                            <div className="options">Fantasy</div>
                            <div className="options">Mystery</div>
                            <div className="options">Sci-Fi</div>
                            <div className="options">Animation</div>
                            <div className="options">Family</div>
                        </div>
                    </div>
                    <div className="All_Movies_left_subsection_format_container">
                        <div className="All_Movies_left_subsection_format">
                            <div className="All_Movies_left_subsection_format_label_container">
                                <div className="All_Movies_left_subsection_format_label_img">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10"><path fill="none" stroke="#666666" stroke-width="1.5" d="M335 3L342 9.5 335 16" transform="rotate(90 175.5 -158.5)"></path></svg>
                                </div>
                                Format
                            </div>
                            <div className="All_Movies_left_subsection_format_clear">
                                Clear
                            </div>
                        </div>
                        <div className="All_Movies_left_subsection_hidden_section">
                            <div className="options">2D</div>
                            <div className="options">3D</div>
                            <div className="options">IMAX 2D</div>
                            <div className="options">4DX 3D</div>
                            <div className="options">IMAX 3D</div>
                            <div className="options">MAX4D 3D</div>
                            <div className="options">4DX</div>
                        </div>
                    </div>
                    <div className="All_Movies_left_subsection_browse">
                        Browse by Cinemas
                    </div>
                </div>
                <div className="All_Movies_right_subsection">
                    <div className="All_Movies_right_subsection_heading">
                        Movies In Cuttack
                    </div>
                    <div className="All_Movies_right_subsection_language_section">
                        <div className="All_Movies_right_subsection_language_section_options">English</div>
                        <div className="All_Movies_right_subsection_language_section_options">Tamil</div>
                        <div className="All_Movies_right_subsection_language_section_options">Hindi</div>
                        <div className="All_Movies_right_subsection_language_section_options">Odia</div>
                        <div className="All_Movies_right_subsection_language_section_options">Telugu</div>
                        <div className="All_Movies_right_subsection_language_section_options">Bengali</div>
                    </div>
                    <div className="All_Movies_right_subsection_cs_img">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/coming-soon-web-collection-202012090733.png" alt="" width="100%" height="100%" />
                    </div>
                    <div className="All_Movies_right_subsection_card_section">
                        {data.map((card)=>{
                            return(
                                <div className="All_Movies_right_subsection_cards" onClick={()=>{window.location.href="/Movies/"+card._id}}>
                                    <div className="All_Movies_right_subsection_cards_img">
                                        <img src={card.image} alt="Annaatthe" width="100%" height="100%" />
                                    </div>
                                    <div className="All_Movies_right_subsection_cards_text">{card.text_1}</div>
                                    <div className="All_Movies_right_subsection_cards_text">{card.text_2}</div>
                                    <div className="All_Movies_right_subsection_cards_text">{card.text_3}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

setTimeout(() => {
    let pos_1 = 0,pos_2 = 0, pos_3 = 0;
    try {
        document.querySelector("div.All_Movies_left_subsection_languages_container").addEventListener("click",(event)=>{
            event.stopPropagation();
            console.log("clicked");
            if(pos_1 === 0){
                document.querySelector("div.All_Movies_left_subsection_languages_container div.All_Movies_left_subsection_hidden_section").style = "display:flex";
                document.querySelector("div.All_Movies_left_subsection_languages_label_container").style = "color: rgb(220, 53, 88);";
                document.querySelector("div.All_Movies_left_subsection_languages_label_img").style = "transform:rotateZ(180deg)";
                pos_1 = 1;
            }else{
                document.querySelector("div.All_Movies_left_subsection_languages_container div.All_Movies_left_subsection_hidden_section").style = "";
                document.querySelector("div.All_Movies_left_subsection_languages_label_container").style = "";
                document.querySelector("div.All_Movies_left_subsection_languages_label_img").style = "";
                pos_1 = 0;
            }
        });
        document.querySelector("div.All_Movies_left_subsection_format_container").addEventListener("click",(event)=>{
            event.stopPropagation();
            if(pos_2 === 0){
                document.querySelector("div.All_Movies_left_subsection_format_container div.All_Movies_left_subsection_hidden_section").style = "display:flex";
                document.querySelector("div.All_Movies_left_subsection_format_label_container").style = "color: rgb(220, 53, 88);";
                document.querySelector("div.All_Movies_left_subsection_format_label_img").style = "transform:rotateZ(180deg)";
                pos_2 = 1;
            }else{
                document.querySelector("div.All_Movies_left_subsection_format_container div.All_Movies_left_subsection_hidden_section").style = "";
                document.querySelector("div.All_Movies_left_subsection_format_label_container").style = "";
                document.querySelector("div.All_Movies_left_subsection_format_label_img").style = "";
                pos_2 = 0;
            }
        });
        document.querySelector("div.All_Movies_left_subsection_genres_container").addEventListener("click",(event)=>{
            event.stopPropagation();
            if(pos_3 === 0){
                document.querySelector("div.All_Movies_left_subsection_genres_container div.All_Movies_left_subsection_hidden_section").style = "display:flex";
                document.querySelector("div.All_Movies_left_subsection_genres_label_container").style = "color: rgb(220, 53, 88);";
                document.querySelector("div.All_Movies_left_subsection_genres_label_img").style = "transform:rotateZ(180deg)";
                pos_3 = 1;
            }else{
                document.querySelector("div.All_Movies_left_subsection_genres_container div.All_Movies_left_subsection_hidden_section").style = "";
                document.querySelector("div.All_Movies_left_subsection_genres_label_container").style = "";
                document.querySelector("div.All_Movies_left_subsection_genres_label_img").style = "";
                pos_3 = 0;
            }
        });
    
        document.querySelectorAll("div.All_Movies_left_subsection_hidden_section").forEach((i)=>{
            i.addEventListener("click",(event)=>{
                event.stopPropagation();
            });
        });
    } catch (error) {
        
    }
}, 20);

export default All_Movies;