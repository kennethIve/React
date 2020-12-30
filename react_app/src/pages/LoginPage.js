
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LoginPage(data){
    console.log(data.data.islogin);
    const loginFormStyle = {background:"white",borderRadius:'25px',padding:"60px 50px 60px 50px",width:"350px",margin:"auto"};
    const labelStyle = {fontFamily:"Poppins-Regular",fontSize:"1vm",lineHeight:"1.5"};
    const inputStyle = {fontFamily:'Poppins-Medium',fontSize:'1.6vm',lineHeight:"1.2",border:""};
    const aTagStyle = {fontFamily:'Poppins-Medium',fontSize:'14px',lineHeight:"1.2",color:"grey"};
    const subBtnStyle = {fontFamily:'',width:"100%",fontSize:'2vm',lineHeight:"1.2",color:"white",background:"transparent",border:"none",borderRadius:"25px"};

    function socialLogin(){

    }

    function doLogin(){
        var form = document.getElementById("loginForm");
        console.log(form);
    }
    return (        
        <div className="position-relative ml-auto mr-auto" style={loginFormStyle}>                                
                <h1 className="" style={{textAlign:"center",fontWeight:"bold"}}>Login</h1>            
            <div className="mt-4" >
                <form className="" id="loginForm">
                    <div className="row mb-4 ">
                        <label className="form-label" style={labelStyle}>Username</label>
                        <div className="input-group">
                            <span className="input-group-text"><FontAwesomeIcon icon="user"/></span>
                            <input className="form-control" type="text" name="username" style={inputStyle} placeholder="Type your username"></input>
                        </div>                        
                    </div>
                    <div className="row mb-4">
                        <label className="form-label" style={labelStyle}>Password</label>
                        <div className="input-group">
                            <span className="input-group-text"><FontAwesomeIcon icon="lock"/></span>
                            <input className="form-control" type="password" name="password" style={inputStyle} placeholder="Type your password"></input>
                        </div>                        
                    </div>
                    <div className="row mb-4" style={{height:"20px"}}>
                        <a className="float-end"style={aTagStyle} href="#">Forgot password?</a>
                    </div>
                    <div className="mt-2"style={{borderRadius:"25px",background:"linear-gradient(to right,#00dbde,#fc00ff)",textAlign:"center"}} >
                        <button className="btn btn-outline-success" style={subBtnStyle} onClick={doLogin}>
                            Login
                        </button>
                    </div>
                    <div className="mt-3" style={{textAlign:"center",fontWeight:"bold"}}>
                        <div>
                            <a style={aTagStyle}>or Sign Up Using</a>                            
                        </div>
                        <div>
                        <div className="" style={{fontSize:"40px"}}>
                            <a href="#" className="col-2">
                                <FontAwesomeIcon icon={['fab','facebook']} color="#3b5998" onClick/>                                                        
                            </a>
                            <a href="#" className="col-2">
                                <FontAwesomeIcon icon={['fab','twitter']} />     
                            </a>
                            <a href="#" className="col-2">
                                <FontAwesomeIcon icon={['fab','google']} color="red"/>     
                            </a>
                        </div>
                        </div>
                        
                    </div>
                    <div className="mt-5"style={{textAlign:"center"}}>
                        <div>
                            <a style={aTagStyle}>or Sign Up Using</a>
                        </div>
                        <div>
                            <a style={aTagStyle} href="#">SIGN UP</a>
                        </div>
                    </div>
                </form>
            </div>            
        </div>
    );
}


export default LoginPage;