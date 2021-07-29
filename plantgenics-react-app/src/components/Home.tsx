import logo from '../resources/plant-logo.png';

function Home() {
    return (
        <div className="full-page">
           <div className="hero container-fluid">
               <div className="content">
                    <section className="site-title text-center">
                        <img className="home_brand animate__animated animate__fadeInUp" src={logo} alt='logo' />
                        <h1 id="site-name" className="animate__animated animate__fadeInUp animate__delay-1s animate__slow">PLANTGENICS</h1>
                        <h5 className="animate__animated animate__fadeIn animate__delay-1s animate__slower">Everyone should live with a little more Green</h5>
                    </section>
                    <div className="landing-imgs d-flex flex-row">
                    </div>
               </div>

           </div>
        </div>
    );
}

export default Home;