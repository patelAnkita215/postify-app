const Language = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#language" aria-expanded="false" aria-controls="language">
                      Language
                </button>
            </h2>
            <div id="language" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container">
                        <div className="language">
                          <ul className="ps-0">
                            <li className="language-item px-0">
                              <a className="language-link active">
                                <p className="mb-0">
                                  <span className="d-block">English</span>
                                  <span>Quick brown fox jumps over the lazy dog.</span>
                                </p>
                                <img src={require("../.././assets/images/icons/right-blue.webp")} alt="" className="img-fluid check-sign" />
                              </a>
                            </li>
                            <li className="language-item px-0">
                              <a className="language-link">
                                <p className="mb-0">
                                  <span className="d-block">Spanish</span>
                                  <span>El zorro marrón rápido salta sobre el perro perezoso.</span>
                                </p>
                                <img src={require("../.././assets/images/icons/right-blue.webp")} alt="" className="img-fluid check-sign" />
                              </a>
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Language