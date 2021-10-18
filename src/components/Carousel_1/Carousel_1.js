import './Carousel_1.css'
import './trans'

function Carousel_1(){
    return(
        <section className="Carousel_1">
            <div>
                <div>
                    <a href="#"><div></div></a>
                    <a href="#"><div></div></a>
                    <a href="#"><div></div></a>
                    <a href="#"><div></div></a>
                    <a href="#"><div></div></a>
                </div>
            </div>
            <div>
                <div className="prev">
                    <div></div>
                </div>
                <div className="next">
                    <div></div>
                </div>
            </div>
            <div>
                <div>
                    <div className="pos_1"></div>
                    <div className="pos_2"></div>
                    <div className="pos_3"></div>
                </div>
            </div>
        </section>
    );
}

export default Carousel_1;