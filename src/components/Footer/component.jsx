import React from 'react';
import { Link } from 'react-router-dom';

const FooterProptypes = {};
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footercontainer">
          <span className="text">© All rights belongs to ConsenSys</span>
          <span className="spacer">·</span>
          <Link className="link" to="/" data-test-id="footer__home">
            Home
          </Link>
          <span className="spacer">·</span>
          <Link className="link" to="/admin" data-test-id="footer__admin">
            Admin
          </Link>
          <span className="spacer">·</span>
          <Link className="link" to="/privacy" data-test-id="footer__privacy">
            Privacy
          </Link>
        </div>
      </div>
    );
  }
}

Footer.propTypes = FooterProptypes;

export default Footer;
