import './Custom.css';
import logo from './plant-logo.png';

function Login() {
    return (
        <div className="wrapper fadeInDown d-flex">
            <div id="formContent" className="shadow">

                <div className="fadeIn first">
                    <img src={logo} className="brand" id="icon" alt="User Icon" />
                </div>

                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="btn login text-light" value="Log In" />
                </form>
            </div>
        </div>
    );
}

export default Login;