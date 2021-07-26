import logo from './plant-logo.png';
import './Custom.css';

function Home() {
    return (
        <div className="landing-page">
           <div className="hero">
               <div className="content">
                    <section className="site-title animate__animated animate__fadeInUp">
                        <img className="brand" src={logo} alt='logo' />
                        <h1 id="site-name">PLANTGENICS</h1>
                    </section>
                    <div className="landing-imgs d-flex flex-row">
                        {/* <img className="img-fluid" src="https://media0.giphy.com/media/ZZTklXupTzGtbf9kYq/giphy.gif" />
                        <img className="img-fluid" src="https://ap-southeast-2.cdn.h5p.com/orgs/1290995642715141899/organization/content/1291037575122926919/images/file-5fa26bdce63f3.gif" /> */}
                    </div>
               </div>

           </div>
        </div>
    );
}

export default Home;