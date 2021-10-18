import "./Main.css";

function Main() {
  return (
    <main>
      <section className="Recommended">
        <div>
          <div>
            <div>Recommended Movies</div>
            <div>
              See All<div></div>
            </div>
          </div>
          <div>
            <div className="Carosel_2">
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_1.jpg" />
                  </div>
                  <div>Venom: Let There Be Carnage</div>
                  <div>Action/Horror/Sci-Fi/Thriller</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_2.jpg" />
                  </div>
                  <div>Aranmanai 3</div>
                  <div>Comedy/Horror</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_3.jpg" />
                  </div>
                  <div>Malignant</div>
                  <div>Horror/Thriller</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_4.jpg" />
                  </div>
                  <div>Doctor</div>
                  <div>Action/Comedy/Thriller</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_5.jpg" />
                  </div>
                  <div>Most Eligible Bachelor</div>
                  <div>Comedy/Romantic</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_6.jpg" />
                  </div>
                  <div>Maha Samudram</div>
                  <div>Action/Drama/Romantic</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_7.jpg" />
                  </div>
                  <div>Pelli SandaD</div>
                  <div>Drama/Family</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_8.jpg" />
                  </div>
                  <div>No Time To Die</div>
                  <div>Action/Adventure/Thriller</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_9.jpg" />
                  </div>
                  <div>A Quiet Place - Part 2</div>
                  <div>Horror/Thriller</div>
                </a>
              </div>
              <div>
                <a href="#">
                  <div>
                    <img src="c_2_10.jpg" />
                  </div>
                  <div>The Boss Baby: Family Business</div>
                  <div>Adventure/Animation/Comedy</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Navigators">
          <div>
            <div className="left"><div></div></div>
            <div className="right"><div></div></div>
          </div>
        </div>
      </section>
      <div className="Streams">
          <a href="#"><div><img src="c_2_11.jpg"/></div></a>
      </div>
    </main>
  );
}

setTimeout(() => {
  document.querySelector("div.Navigators div.left").addEventListener("click",()=>{
    document.querySelector("div.Navigators div.left").style = "visibility:hidden";
    document.querySelector("div.Navigators div.right").style = "visibility:visible";
    document.querySelector("div.Carosel_2").style = "transform: translateX(0);";
  });
  
  document.querySelector("div.Navigators div.right").addEventListener("click",()=>{
    document.querySelector("div.Navigators div.right").style = "visibility:hidden";
    document.querySelector("div.Navigators div.left").style = "visibility:visible";
    document.querySelector("div.Carosel_2").style = "transform: translateX(-101.7%);";
  });
}, 200);

export default Main;
