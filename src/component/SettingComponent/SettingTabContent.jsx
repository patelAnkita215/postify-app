import Blacklist from "./BlackList"
import ChangePassword from "./ChangePsw"
import EditProfile from "./EditProfile"
import MyPlans from "./MyPlans"
import MyWallet from "./MyWallet"
import PaidMediaPackage from "./PaidMediaPackage"
import Subscriptions from "./Subscriptions"
import VerifyProfile from "./VerifyProfile"
import Payout from "./Payout"
import Language from "./Language"
import ReferralCode from "./ReferralCode"

const SettingTabContent = () => {
    return(
        <>
            <div className="settings-tab-content">
              <div className="tab-content accordion" id="myTabContent">
                <div className="tab-pane fade accordion-item" id="editProfile" role="tabpanel"
                  aria-labelledby="editProfile-tab" tabindex="0">
                    <EditProfile />
                </div>
                <div className="tab-pane fade accordion-item" id="blacklist-tab-pane" role="tabpanel"
                  aria-labelledby="blacklist-tab" tabindex="0">
                    <Blacklist />
                </div>
                <div className="tab-pane fade accordion-item" id="verify-tab-pane" role="tabpanel"
                  aria-labelledby="verify-tab" tabindex="0">
                    <VerifyProfile />
                </div>
                <div className="tab-pane fade accordion-item" id="changepsw-tab-pane" role="tabpanel"
                  aria-labelledby="changepsw-tab" tabindex="0">
                    <ChangePassword />
                </div>
                <div className="tab-pane fade accordion-item   show active" id="subscriptions-tab-pane" role="tabpanel"
                  aria-labelledby="subscriptions-tab" tabindex="0">
                    <Subscriptions />
                </div>
                <div className="tab-pane fade accordion-item" id="mysubscribers-tab-pane" role="tabpanel"
                  aria-labelledby="mysubscribers-tab" tabindex="0">
                    <Subscriptions />
                </div>
                <div className="tab-pane fade accordion-item" id="wallet-tab-pane" role="tabpanel"
                  aria-labelledby="wallet-tab" tabindex="0">
                    <MyWallet />
                </div>
                <div className="tab-pane fade accordion-item" id="myplans-tab-pane" role="tabpanel"
                  aria-labelledby="myplans-tab" tabindex="0">
                    <MyPlans />
                </div>
                <div className="tab-pane fade accordion-item" id="packagespaid-tab-pane" role="tabpanel"
                  aria-labelledby="packagespaid-tab" tabindex="0">
                    <PaidMediaPackage />
                </div>
                <div className="tab-pane fade accordion-item" id="payout-tab-pane" role="tabpanel"
                  aria-labelledby="payout-tab" tabindex="0">
                    <Payout />
                </div>
                <div className="tab-pane fade accordion-item" id="language-tab-pane" role="tabpanel"
                  aria-labelledby="language-tab" tabindex="0">
                    <Language />
                </div>
                <div className="tab-pane fade accordion-item" id="referralcode-tab-pane" role="tabpanel"
                  aria-labelledby="referralcode-tab" tabindex="0">
                    <ReferralCode />
                </div>
              </div>
            </div>
        </>
    )
}

export default SettingTabContent