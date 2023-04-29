const EditProfile = () => {
    return(
        <>
            <h2 className="accordion-header  d-lg-none" id="headingOne">
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#editProfile" aria-expanded="true" aria-controls="editProfile">Edit
                    Profile
                </button>
            </h2>
            <div id="editProfile" className="accordion-collapse collapse show  d-lg-block"
                    aria-labelledby="headingOne" data-bs-parent="#myTabContent">
                <div className="accordion-body">
                    <div className="profile-content box-container">
                        <h2 className="setting-title">Edit Profile</h2>
                        <div className="profile-bg" style={{backgroundImage: "url('../../assets/images/bg/bg-img1.webp')"}}>
                          <button className="changebtn">Change Cover Image</button>
                        </div>
                        <div className="profile-box text-center">
                          <div className="profile-logo"><img src={require("../../assets/images/imgs/user-round.png")}
                              alt="" className="img-fluid w-100" />
                          </div>
                          <a href="#" className="profile-link">Change Profile Image</a>
                          <form>
                            <div className="input-main row">
                              <div className="col-md-6 padding input-part"><input type="text" placeholder="First Name"
                                  className="form-control" />
                              </div>
                              <div className="col-md-6 input-part"><input type="text" placeholder="Last Name"
                                  className="form-control" />
                              </div>
                              <div className="col-md-6 padding input-part"><input type="text" placeholder="Username"
                                  className="form-control" />
                              </div>
                              <div className="col-md-6 input-part">
                                <select className="form-select selecttext" aria-label="Default select example">
                                  <option selected>Gender</option>
                                  <option value="1">Male</option>
                                  <option value="2">Female</option>
                                </select>
                              </div>
                              <div className="col-md-12 input-part"><input type="email" placeholder="Email Address"
                                  className="form-control" />
                              </div>
                              <div className="col-md-6 padding  input-part">
                                <select className="form-select" aria-label="Default select example">
                                  <option selected>Country</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>
                              <div className="col-md-6 input-part"><input type="date" className="form-control" />
                              </div>
                              <div className="col-md-12 input-part"><textarea placeholder="Address"
                                  className="addresstext form-control" rows="3"></textarea>
                              </div>
                              <div className="col-md-6 padding  input-part"><input type="text" placeholder="State"
                                  className="form-control" /></div>
                              <div className="col-md-6 input-part"><input type="text" placeholder="City"
                                  className="form-control" /></div>
                              <div className="col-md-6 padding  input-part"><input type="text" className="form-control"
                                  placeholder="Zip Code" />
                              </div>
                              <div className="col-md-6 input-part"><input type="tel" className="form-control"
                                  placeholder="Phone Number" />
                              </div>
                              <div className="input-group col-md-12 input-part">
                                <span className="input-group-text socialimg" id="basic-addon1"><img
                                    src={require("../.././assets/images/icons/internet.webp")} alt="" className="img-fluid" /></span>
                                <input type="text" className="form-control" placeholder="Website" aria-label="Username"
                                  aria-describedby="basic-addon1" />
                              </div>
                              <div className="input-group col-md-12 input-part">
                                <span className="input-group-text socialimg facebook" id="basic-addon1"><img
                                    src={require("../.././assets/images/icons/facebook.webp")} alt="" className="img-fluid" /></span>
                                <input type="text" className="form-control" placeholder="Paste your Facebook profile link"
                                  aria-label="Username" aria-describedby="basic-addon1" />
                              </div>
                              <div className="input-group col-md-12 input-part">
                                <span className="input-group-text socialimg insta" id="basic-addon1"><img
                                    src={require("../.././assets/images/icons/instagram.webp")} alt="" className="img-fluid" /></span>
                                <input type="text" className="form-control" placeholder="Paste your Instagram profile link"
                                  aria-label="Username" aria-describedby="basic-addon1" />
                              </div>
                              <div className="input-group col-md-12 input-part">
                                <span className="input-group-text socialimg twitter" id="basic-addon1"><img
                                    src={require("../.././assets/images/icons/twitter.webp")} alt="" className="img-fluid" /></span>
                                <input type="text" className="form-control" placeholder="Paste your Twitter profile link"
                                  aria-label="Username" aria-describedby="basic-addon1" />
                              </div>
                              <div className="input-group col-md-12 input-part">
                                <span className="input-group-text socialimg linkdin" id="basic-addon1"><img
                                    src={require("../.././assets/images/icons/linkdin.webp")} alt="" className="img-fluid" /></span>
                                <input type="text" className="form-control" placeholder="Paste your Linkedin profile link"
                                  aria-label="Username" aria-describedby="basic-addon1" />
                              </div>
                              <div className="input-group col-md-12 input-part">
                                <span className="input-group-text socialimg link" id="basic-addon1"><img
                                    src={require("../.././assets/images/icons/link.webp")} alt="" className="img-fluid" /></span>
                                <input type="text" className="form-control" placeholder="Paste your other profile link"
                                  aria-label="Username" aria-describedby="basic-addon1" />
                              </div>
                            </div>
                            <div><button className="btn save_btn">Save Changes</button></div>
                          </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile