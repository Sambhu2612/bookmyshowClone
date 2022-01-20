import './Registration_Section.css';
import axios from 'axios';

function Registration_Section(){

    return(
        <div className="Registration_Section_container">
            <div className="Registration_Section">
                <div className="Registration_Section_heading">
                    <div>Get Registered</div>
                    <div>
                        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg"><title>Close</title><g fill="#666"><path d="M13.125 0l-7.5 7.5 7.5 7.5 1.429-1.428L8.482 7.5l6.072-6.071z"></path><path d="M1.429 0l7.5 7.5-7.5 7.5-1.43-1.428L6.072 7.5 0 1.43z"></path></g></svg>
                    </div>
                </div>
                <div className="Registration_Section_input_container">
                    <input className="username"  type="text"/>
                    <span className="Registration_Section_input_label">Username</span>
                </div>
                <div className="Registration_Section_input_container">
                    <input className="email"  type="email"/>
                    <span className="Registration_Section_input_label">Email</span>
                </div>
                <div className="Registration_Section_input_container">
                    <input className="password"  type="password"/>
                    <span className="Registration_Section_input_label">Password</span>
                </div>
                <button>
                    Submit
                </button>
            </div>
        </div>
    );
}

setTimeout(() => {
    document.querySelectorAll('div.Registration_Section_input_container input').forEach((i)=>{
        i.addEventListener('focusin',(e)=>{
            e.target.parentElement.children[1].style = "color: rgb(248, 68, 100);top: -23%;";
            e.target.style = "border:1px solid rgb(248, 68, 100);";
        });
        i.addEventListener('focusout',(e)=>{
            if(e.target.value === "") {
                e.target.parentElement.children[1].style = "";
                e.target.style = "";
            }
            else {
                e.target.parentElement.children[1].style = "color: rgb(0, 0, 0);top: -23%;";
                e.target.style = "";
            }
        });
    });

    document.querySelectorAll('span.Registration_Section_input_label').forEach((i)=>{
        i.addEventListener('click',(e)=>{
            e.target.parentElement.children[0].focus();
        });
    });

    document.querySelector('div.Registration_Section').addEventListener('click',(e)=>{
        e.stopPropagation();
    });

    document.querySelector('div.Registration_Section button').addEventListener('click',async (e)=>{
        let user = document.querySelector("div.Registration_Section_input_container input.username").value;
        let email = document.querySelector("div.Registration_Section_input_container input.email").value;
        let pass = document.querySelector("div.Registration_Section_input_container input.password").value;
        let userdetails = {
            user:user,
            email:email,
            pass:pass
        }

        let res = await axios.post("http://localhost:5000/users",userdetails);
        alert(JSON.stringify(res.data)+"\n\n"+res.statusText);
        if(res.status === 201){
            document.querySelector("div.Registration_Section_input_container input.username").value = "";
            document.querySelector("div.Registration_Section_input_container input.email").value = "";
            document.querySelector("div.Registration_Section_input_container input.password").value = "";
        }
    });

    document.querySelector('div.Registration_Section button').addEventListener('mousedown',(e)=>{
        e.target.style="transform: scale(.9);";
    });
    document.querySelector('div.Registration_Section button').addEventListener('mouseup',(e)=>{
        e.target.style="";
    });
}, 100);

export default Registration_Section;