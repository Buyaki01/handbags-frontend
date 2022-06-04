const Footer = () => (
  <div className="row">
    <div className="col-xl-2 col-lg-3 col-md-3 col-3">
      <button type="button" className="btn feedback-btn w-100">
        <span className="pl-0 pr-5"> Subscribe </span>
        <i className="fas fa-envelope pr-0" />
      </button>
    </div>

    <div className="col-xl-2 col-lg-3 col-md-3 col-3">
      <div> +254 722554294 </div>
      <div> rittahbuyaki@gmail.com </div>
    </div>

    <div className="col-xl-3 col-lg-3 col-md-3 col-3">
      <p> Mocha Plaza, Opposite Tuskys Echiro </p>
      <p> Ground Floor, room 1</p>
      <p>P.O Box 2358-40200 Kisii</p>
    </div>

    <div className="col-xl-5 col-lg-3 col-md-3 col-3">
      <div className="fcopyright">
        {/* <a href="#"> Terms and conditions apply </a> */}
        <p> © 1996-2020, handbagscollections.com, Inc. </p>
      </div>
      <div className="footer-logos">
        <i className="fab fa-cc-mastercard" />
        <i className="fab fa-cc-visa" />
        <i className="fab fa-paypal" />
        <i className="fab fa-amazon-pay" />
      </div>
    </div>
  </div>
);

export default Footer;
