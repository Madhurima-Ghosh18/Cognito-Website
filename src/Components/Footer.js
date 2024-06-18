const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-around p-5">
            <div className="quicklinks">
                <h5>Quick Links</h5>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="/career">Careers</a></li>
                </ul>
            </div>
            <div className="vr"></div>
            <div className="social-media">
                <h5>Follow us on</h5>
                <ul className="d-flex justify-content-around p-0">
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                </ul>
            </div>
            <div className="vr"></div>
            <div className="contact-address">
                <h5>Address</h5>
                <ul className="p-0">
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                    <li><i className="fa-solid fa-at"></i> Email : example@example.com</li>
                    <li><i className="fa-solid fa-phone"></i> Phone No. : xx-xxxx-xxxx</li>
                </ul>
            </div>
        </footer>
    );
}
 
export default Footer;