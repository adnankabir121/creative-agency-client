import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-top-content">
                                <h1>Let us handle your <br /> project, professionally.</h1>
                                <p>With well written codes, we build amazing apps for all <br />
                             platforms, mobile and web apps in general.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="footer-form">
                                <form>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email address" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Your name/ comapny's name" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" class="btn-brand">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="footer-bottom text-center">
                <p>Copyright Orange labs 2020</p>
            </div>

        </div>


    );
};

export default Footer;