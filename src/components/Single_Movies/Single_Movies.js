import './Single_Movies.css';
import { useState,useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router";

function Single_Movies() {
    const { movid } = useParams();
    const [data, setData] = useState([]); // using empty array to initialise data in array format
    useEffect(async ()=>{
        try {
            const res = await axios.get(`http://localhost:5000/movies/${movid}`);
            setData(res.data);
        } catch (error) {
            
        }
    },[]);
    return(
        <div className="Single_Movies">
            <div className="All_Movies_right_subsection_cards">
                <div className="All_Movies_right_subsection_cards_img">
                    <img src={data.image} alt="Annaatthe" width="100%" height="100%" />
                </div>
                <div className="All_Movies_right_subsection_cards_text">{data.text_1}</div>
                <div className="All_Movies_right_subsection_cards_text">{data.text_2}</div>
                <div className="All_Movies_right_subsection_cards_text">{data.text_3}</div>
            </div>
        </div>
    );
}

export default Single_Movies;