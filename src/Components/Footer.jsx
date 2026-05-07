const Footer = () => {
    return (
        <div className="App">
            <div className="">
                <div className="">
                    <img src="/Logo.png" alt="" />
                    <p>Copyright © 2020 Landify UI Kit.</p>
                    <p>All rights reserved</p>

                    <nav>
                        <i class='bx bxl-instagram'></i>
                        <i class='bx bxl-github' ></i>
                        <i class='bx bxl-twitter' ></i>
                        <i class='bx bxl-youtube' ></i>
                    </nav>
                </div>
                <div className="">
                    <h1>Company</h1>
                    <nav>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contack us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </nav>
                </div>
                <div className="">
                    <h1>Support</h1>
                    <nav>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy police</p>
                        <p>Status</p>
                    </nav>
                </div>
                <div className="">
                    <h1>Stay up to date</h1>
                    <nav>
                        <input type="text" />
                        <i class='bx bx-send'></i>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Footer;