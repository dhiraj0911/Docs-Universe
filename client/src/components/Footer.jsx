import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="w-100 py-4 flex-shrink-0 bg-warning">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-dark">Docs Universe</h5>
              <p className="small text-muted">
                Dhiraj Bari- VIIT, Pune. Implementation of Blockchain and
                Peer-to-Peer Network for Digital Document Management.
              </p>
              <p className="small text-muted mb-0">
                &copy; All rights reserved- Dhiraj Bari.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="h1 text-dark">Quick links</h5>
              <ul className="small text-muted">
                <h6>
                  <li className="small text-muted">
                    <a
                      href="https://github.com/dhiraj0911"
                      className="link-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <br></br>
                  <li className="small text-muted">
                    <a
                      href="https://twitter.com/dhiru9bari"
                      className="link-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <br></br>
                  <li className="small text-muted">
                    <a
                      href="https://www.linkedin.com/in/dhiraj-bari-a37b8120a/"
                      className="link-dark"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                </h6>
              </ul>
            </div>
            <div className="col-lg-5 col-md-6">
              <h5 className="h1 text-dark">Newsletter</h5>
              <p className="small text-muted">
                Sign up to receive updates, news and informations from us!
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's email"
                    aria-label="Recipient's email"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
