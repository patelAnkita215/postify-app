const PaidMediaPackage = () => {
    return(
        <>
            <h2 className="accordion-header d-lg-none" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#packagespaid" aria-expanded="false" aria-controls="packagespaid">
                      My Paid Media Packages
                </button>
            </h2>
            <div id="packagespaid" className="accordion-collapse collapse d-lg-block" aria-labelledby="headingThree"
                    data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="box-container">
                        <h2 className="setting-title">My Paid Media Packages</h2>
                        <button className="package-btn">
                          Create New Package
                          <span>
                            <img src={require("../../assets/images/icons/plus.webp")} alt="" />
                          </span>
                        </button>
                        <div className="package-wrapper">
                          <div className="package-plan">
                            <div>
                              <h4 className="p-title">Hawaii Summer Collection 2021</h4>
                              <div className="d-flex">
                                <p className="pc-label">Media Count: 75</p>
                                <p className="pc-label">Price: $99</p>
                              </div>
                            </div>
                            <button className="btn share-btn" data-bs-toggle="modal" data-bs-target="#package-modal">
                              <img src={require("../../assets/images/icons/share.webp")} alt="" />
                            </button>
                          </div>
                          <div className="package-plan package-plan-orange">
                            <div>
                              <h4 className="p-title">BUZZ Party @ WhiteHouse</h4>
                              <div className="d-flex">
                                <p className="pc-label">Media Count: 119</p>
                                <p className="pc-label">Price: $149</p>
                              </div>
                            </div>
                            <button className="btn share-btn" data-bs-toggle="modal" data-bs-target="#packagemodal">
                              <img src={require("../../assets/images/icons/share.webp")} alt="" />
                            </button>
                          </div>
                          <div className="package-plan package-plan-pink">
                            <div>
                              <h4 className="p-title">Christmas 2020</h4>
                              <div className="d-flex">
                                <p className="pc-label">Media Count: 30</p>
                                <p className="pc-label">Price: $49</p>
                              </div>
                            </div>
                            <button className="btn share-btn" data-bs-toggle="modal" data-bs-target="#packagemodal">
                              <img src={require("../../assets/images/icons/share.webp")} alt="" />
                            </button>
                          </div>
                          <div className="package-plan package-plan-green">
                            <div>
                              <h4 className="p-title">Disneyland Picnic 2021</h4>
                              <div className="d-flex">
                                <p className="pc-label">Media Count: 50</p>
                                <p className="pc-label">Price: $89</p>
                              </div>
                            </div>
                            <button className="btn share-btn" data-bs-toggle="modal" data-bs-target="#packagemodal">
                              <img src={require("../../assets/images/icons/share.webp")} alt="" />
                            </button>
                          </div>
                        </div>

                        <div>
                          <h2 className="setting-title">Create New Package</h2>
                          <div className="package-form">
                            <label>
                              Add Package Title
                            </label>
                            <input type="text" className="form-control" />
                            <label>
                              Price
                            </label>
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn btn-login">Next</button>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center">
                            <button className="btn">
                              <img src={require("../../assets/images/icons/arrow-left.webp")} alt="" />
                            </button>
                            <h2 className="setting-title col my-2">Package Detail</h2>
                          </div>
                          <input type="file" hidden id="SelectMedia" />
                          <div className="select-media">
                            <label className="border d-block" for="SelectMedia">
                              Select Media 
                            </label>
                            <img src={require("../../assets/images/imgs/comment-img.webp")} alt="" className="package-img" />
  
                            <div className="audio-box">
                              <div className="audio-thumbnail audio-thumbnail-relative">
                                <img src={require("../../assets/images/imgs/audio-thumb.webp")} alt="" />
                              </div>
                            </div>
                          </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaidMediaPackage