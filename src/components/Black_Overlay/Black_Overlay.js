import './Black_Overlay.css';

function Black_Overlay(){
    return(
        <div className="Black_Overlay">

        </div>
    );
}

setTimeout(() => {
    document.querySelector("div.nav_location_txt_container").addEventListener("click",(event)=>{
        event.stopPropagation();
        document.querySelector("div.Black_Overlay").style = "display:block";
        document.querySelector("body").style = "overflow-y:hidden";
        setTimeout(() => {
            document.querySelector("div.City_Selector").style = "top:6%;opacity:1;z-index: 4;";
        }, 100);
        document.querySelector("div.City_Selector").style = "z-index: 4;transition:0s ease;";
    });

    document.querySelector("body").addEventListener("click",()=>{
        setTimeout(() => {
            document.querySelector("div.City_Selector").style = "top:0%;opacity:0;z-index: -4;";
            document.querySelector("div.login_section").style = "z-index:-4;top:12%;opacity:0";
        }, 500);
        document.querySelector("div.City_Selector").style = "top:0%;opacity:0;z-index: 4;";
        document.querySelector("div.login_section").style = "z-index:4;top:12%;opacity:0";
        document.querySelector("div.Slide_Bar").style = "z-index:4;left:360px";
        setTimeout(() => {
            document.querySelector("div.Slide_Bar").style = "z-index:-4;left:360px;display:none";
            document.querySelector("div.Registration_Section_container").style = "";
            document.querySelector("div.Black_Overlay").style = "display:none";
        }, 250);
        document.querySelector("div.Registration_Section_container").style = "z-index:4;display:flex;";
        document.querySelector("body").style = "overflow-y:scroll";
    });

    document.querySelector("div.City_Selector_Sub_Section").addEventListener("click",(event)=>{
        event.stopPropagation();
    });

    document.querySelector("div.sign_in_button").addEventListener("click", (event)=>{
        event.stopPropagation();
        document.querySelector("div.Black_Overlay").style = "display:block";
        document.querySelector("body").style = "overflow-y:hidden";
        document.querySelector("div.login_section").style = "z-index:4;transition:0s;";
        setTimeout(() => {
            document.querySelector("div.login_section").style = "z-index:4;top:23%;opacity:1";
        }, 100);
    });

    document.querySelector("div.login_subsection").addEventListener("click",(event)=>{
        event.stopPropagation();
    });

    document.querySelector("div.login_subsection_1_cross").addEventListener("click",()=>{
        document.querySelector("div.Black_Overlay").style = "display:none";
        setTimeout(() => {
            document.querySelector("div.login_section").style = "z-index:-4;top:12%;opacity:0";
        }, 500);
        document.querySelector("div.login_section").style = "z-index:4;top:12%;opacity:0";
        document.querySelector("body").style = "overflow-y:scroll";
    });

    document.querySelector("div.sliding_nav_bar").addEventListener("click", (event)=>{
        event.stopPropagation();
        document.querySelector("div.Black_Overlay").style = "display:block";
        document.querySelector("body").style = "overflow-y:hidden";
        document.querySelector("div.Slide_Bar").style = "z-index:4;display:flex;transition:0s;";
        setTimeout(() => {
            document.querySelector("div.Slide_Bar").style = "z-index:4;left:0%;display:flex";
        }, 100);
    });

    document.querySelector("div.Slide_Bar_subsection").addEventListener("click",(event)=>{
        event.stopPropagation();
    });

    document.querySelector("div.Slide_Bar_close").addEventListener("click",()=>{
        setTimeout(() => {
            document.querySelector("div.Slide_Bar").style = "z-index:-4;left:360px;display:none";
            document.querySelector("div.Black_Overlay").style = "display:none";
        }, 250);
        document.querySelector("div.Slide_Bar").style = "z-index:4;left:360px";
        document.querySelector("body").style = "overflow-y:scroll";
    });


    document.querySelector("div.Slide_Bar_register").addEventListener("click",()=>{
        document.querySelector("div.Black_Overlay").style = "display:block";
        document.querySelector("div.Slide_Bar").style = "z-index:4;left:360px";
        setTimeout(() => {
            document.querySelector("div.Slide_Bar").style = "z-index:-4;left:360px;display:none";
        }, 250);
        document.querySelector("div.Registration_Section_container").style = "z-index:4;display:flex;transition:0s;";
        setTimeout(() => {
            document.querySelector("div.Registration_Section_container").style = "z-index:4;display:flex;transition:.5s ease;top:0%;opacity:1;";
        }, 20);
        document.querySelector("body").style = "overflow-y:hidden";
    });
}, 200);

export default Black_Overlay;