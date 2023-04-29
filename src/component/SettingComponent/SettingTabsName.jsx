const SettingTabsName = () => {
    return(
        <>
            <div className="setting-tabs">
              <ul className="nav nav-tabs d-none d-lg-block" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="editProfile-tab" data-bs-toggle="tab"
                    data-bs-target="#editProfile" type="button" role="tab" aria-controls="editProfile"
                    aria-selected="true">Edit Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="blacklist-tab" data-bs-toggle="tab" data-bs-target="#blacklist-tab-pane"
                    type="button" role="tab" aria-controls="blacklist-tab-pane" aria-selected="false">Blacklist</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="verify-tab" data-bs-toggle="tab" data-bs-target="#verify-tab-pane"
                    type="button" role="tab" aria-controls="verify-tab-pane" aria-selected="false">Verify
                    Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="changepsw-tab" data-bs-toggle="tab" data-bs-target="#changepsw-tab-pane"
                    type="button" role="tab" aria-controls="changepsw-tab-pane" aria-selected="true">Change
                    Password</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="subscriptions-tab" data-bs-toggle="tab"
                    data-bs-target="#subscriptions-tab-pane" type="button" role="tab"
                    aria-controls="subscriptions-tab-pane" aria-selected="false">Subscriptions</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="mysubscribers-tab" data-bs-toggle="tab"
                    data-bs-target="#mysubscribers-tab-pane" type="button" role="tab"
                    aria-controls="mysubscribers-tab-pane" aria-selected="false">My Subscribers</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="wallet-tab" data-bs-toggle="tab" data-bs-target="#wallet-tab-pane"
                    type="button" role="tab" aria-controls="wallet-tab-pane" aria-selected="true">My Wallet</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="myplans-tab" data-bs-toggle="tab" data-bs-target="#myplans-tab-pane"
                    type="button" role="tab" aria-controls="myplans-tab-pane" aria-selected="false">My Plans</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="packagespaid-tab" data-bs-toggle="tab"
                    data-bs-target="#packagespaid-tab-pane" type="button" role="tab"
                    aria-controls="packagespaid-tab-pane" aria-selected="false">My Paid Media Packages</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="payout-tab" data-bs-toggle="tab" data-bs-target="#payout-tab-pane"
                    type="button" role="tab" aria-controls="payout-tab-pane" aria-selected="true">Payout</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="paymentmethod-tab" data-bs-toggle="tab"
                    data-bs-target="#paymentmethod-tab-pane" type="button" role="tab"
                    aria-controls="paymentmethod-tab-pane" aria-selected="false">Payment Methods</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="language-tab" data-bs-toggle="tab" data-bs-target="#language-tab-pane"
                    type="button" role="tab" aria-controls="language-tab-pane" aria-selected="false">Language</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="referralcode-tab" data-bs-toggle="tab"
                    data-bs-target="#referralcode-tab-pane" type="button" role="tab"
                    aria-controls="referralcode-tab-pane" aria-selected="false">My Referral Code</button>
                </li>
              </ul>
            </div>
        </>
    )
}

export default SettingTabsName