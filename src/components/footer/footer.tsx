import ChatWrapper from '@components/chat/chat-wrapper';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="footer w-full h-12  -z-50 d-flex">
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
  );
}

export default Footer