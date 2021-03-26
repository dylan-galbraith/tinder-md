import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Chat.scss";

function Chat() {
  return (
    <>
      <div className="header">
        <h2 className="header__title">Dr. Kathryn J. Atkinson</h2>
      </div>
      <div className="chat">
        <div className="chat__intro">
          <p className="chat__intro--text">You matched with Dr. Kathryn J. Atkinson on 2021-03-11.</p>
          <p className="chat__intro--text">
            You have now entered a conversation with Dr. Atkinson's
            receptionist.
          </p>
        </div>
        <div className="chat__sender">
          <img className="chat__sender--avatar" src="http://placehold.it/60x60" alt="doctor avatar" />
          <p className="chat__sender--msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="chat__receiver">
          <p className="chat__receiver--msg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="chat__sender">
          <img className="chat__sender--avatar" src="http://placehold.it/60x60" alt="doctor avatar" />
          <p className="chat__sender--msg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="chat__receiver">
          <p className="chat__receiver--msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="chat__sender">
          <img className="chat__sender--avatar" src="http://placehold.it/60x60" alt="doctor avatar" />
          <p className="chat__sender--msg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default Chat;
