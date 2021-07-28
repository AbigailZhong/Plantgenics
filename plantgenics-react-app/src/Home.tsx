import logo from './plant-logo.png';
import './Custom.css';

function Home() {
    return (
        <div className="landing-page">
           <div className="hero">
               <div className="content">
                    <section className="site-title text-center">
                        <img className="home_brand animate__animated animate__fadeInUp" src={logo} alt='logo' />
                        <h1 id="site-name" className="animate__animated animate__fadeInUp animate__delay-1s animate__slow">PLANTGENICS</h1>
                    </section>
                    <div className="landing-imgs d-flex flex-row">
                        {/* <img className="img-fluid animate__animated animate__fadeIn animate__slow" src="https://b.kisscc0.com/20181016/yle/kisscc0-floral-design-cut-flowers-visual-arts-leaf-plant-s-floral-line-art-5bc5d454cc0535.0037719515396916048357.png" /> */}
                    </div>
               </div>

           </div>
        </div>
    );
}

export default Home;