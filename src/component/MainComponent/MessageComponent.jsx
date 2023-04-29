import React from "react";
import ChatMessage from "../ChatMessage";
import ChatUserList from "../ChatUserList";
import LeftSideComponent from "../Container/LeftSideComponent";

const MessageComponent = () => {
    return (
        <>
            <main>
                <div className="container-md">
                    <div className="main-box two-columns-grid">
                        <LeftSideComponent />
                        <div className="setting-container">
                            <div className="setting-grid-box box-container messages-container">
                                <ChatUserList />
                                <ChatMessage />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MessageComponent