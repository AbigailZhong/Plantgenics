import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <footer className="text-center text-lg-start text-dark">
            <div className="container p-4 pb-0">
                <section className="">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="mb-4 font-weight-bold">
                            Plantgenics
                            </h6>
                            <p>We make growing plants easy by providing only the finest quality seeds.
                                Plants make life better. We make plants easy.
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p>
                            <a className="text-white">MDBootstrap</a>
                            </p>
                            <p>
                            <a className="text-white">MDWordPress</a>
                            </p>
                            <p>
                            <a className="text-white">BrandFlow</a>
                            </p>
                            <p>
                            <a className="text-white">Bootstrap Angular</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">
                            Useful links
                            </h6>
                            <p>
                            <a className="text-white">Your Account</a>
                            </p>
                            <p>
                            <a className="text-white">Become an Affiliate</a>
                            </p>
                            <p>
                            <a className="text-white">Shipping Rates</a>
                            </p>
                            <p>
                            <a className="text-white">Help</a>
                            </p>
                        </div>

                        <hr className="w-100 clearfix d-md-none" />

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p>New York, NY 777777, US</p>
                            <p><i className="fas fa-envelope mr-3"></i> customerservice@plantgenics.com</p>
                            <p><i className="fas fa-phone mr-3"></i> +1 234 567 88</p>
                            <p><i className="fas fa-print mr-3"></i> +1 234 567 89</p>
                        </div>
                    </div>
                </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-lg-8 text-center text-md-start">
                        <div className="p-3">
                        ©2021 Created by:
                        <a className="text-white" href="https://mdbootstrap.com/">Abigail Zhong</a>
                        </div>
                    </div>

                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    <a className="btn btn-outline-light btn-floating m-1 text-white" role="button"><FontAwesomeIcon icon={ faFacebook } /></a>
                    <a className="btn btn-outline-light btn-floating m-1 text-white" role="button"><FontAwesomeIcon icon={ faInstagram } /></a>
                    <a className="btn btn-outline-light btn-floating m-1 text-white" role="button"><FontAwesomeIcon icon={ faTwitter } /></a>
                </div>
                </div>
            </section>
            </div>
        </footer>

    )
}

export default Footer;