import React from "react"
import ChatWrapper from "@components/chat/chat-wrapper"

const Footer = () => {

    return (
      <footer className="footer w-full h-10  z-50 d-flex">
        <div style={{display:'flex'}}>
        {/* <div className="footer__social">
         <button className="btn-primary">Aperta aqui</button>
        </div> */}
        <div></div>
        <div style={{ justifyContent:'end', float:'right',marginLeft:'95%'}}>
            <ChatWrapper/>
        </div>
        
        </div>
      </footer>
    )
  }
  export default Footer