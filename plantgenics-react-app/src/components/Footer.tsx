import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <footer className="text-center text-lg-start text-dark mt-5">
            <div className="container p-4 pb-0">
                <section className="">
                    <div className="row justify-content-between">
                        <div className="col-4 mx-auto">
                            <h6 className="mb-4 font-weight-bold">
                            Plantgenics
                            </h6>
                            <p>We make growing plants easy by providing only the finest quality seeds.
                                Plants make life better. We make plants easy.
                            </p>
                        </div>

                        <div className="col-1 mx-auto">
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-4 mx-auto">
                            <h6 className="mb-2 font-weight-bold">Contact</h6>
                            <p>New York, NY 777777, US</p>
                            <p><i className="fas fa-envelope mr-3"></i> customerservice@plantgenics.com</p>
                            <p><i className="fas fa-phone mr-3"></i> +1 234 567 88</p>
                        </div>
                    </div>
                </section>

            <hr className="my-3" />

            <section className="pb-1 pt-0">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8 text-center text-md-start">
                        <div className="p-3">
                        ©2021 Created by Abigail Z.
                        </div>
                    </div>

                    <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end text-dark">
                        <a className="btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon icon={ faFacebook } /></a>
                        <a className="btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon icon={ faInstagram } /></a>
                        <a className="btn-outline-light btn-floating m-1" role="button"><FontAwesomeIcon icon={ faTwitter } /></a>
                    </div>
                </div>
            </section>
            </div>
        </footer>

    )
}

export default Footer;