import React from "react";
import SettingTabContent from "../SettingComponent/SettingTabContent"
import SettingTabsName from "../SettingComponent/SettingTabsName"
import LeftSideComponent from "../Container/LeftSideComponent";

const SettingComponent = () => {
    return(
        <>
        <main>
                <div className="container-md">
                    <div className="main-box two-columns-grid">
                        <LeftSideComponent />
                        <div className="setting-container">
                            <div className="setting-grid-box box-container settings-main">
                                <SettingTabsName />
                                <SettingTabContent />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SettingComponent