import logo from './plant-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function Login() {
    return (
        <div className="full-page">
            <div id="login-wrapper" className="hero">
                <div className="login-container fadeInDown d-flex animate__animated animate__fadeInDown">
                    <div id="formContent" className="shadow">

                        <div className="card-header fadeIn first">
                            <FontAwesomeIcon icon={faSignInAlt} class="login-icon" />
                        </div>

                        <p>Admin, login to add items.</p>

                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                            <input type="submit" className="btn login text-light" value="Log In" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;