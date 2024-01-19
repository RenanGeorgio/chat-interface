import { useEffect, useState } from 'react'
import { Button } from '../components/chat/Button'
import { ChatLine, LoadingChatLine } from '../components/chat/ChatLine';
import type { ChatGPTMessage } from '../components/chat/ChatLine'
import { useCookies } from 'react-cookie'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdOutlineArrowDownward, MdOutlineArrowUpward } from 'react-icons/md';
import Typography from '@mui/material/Typography';

const COOKIE_NAME = 'nextjs-example-ai-chat-gpt3'

// mensagem de inicialização
export const initialMessages: ChatGPTMessage[] = [
  {
    role: 'assistant',
    content: 'Otimização de Supply Chain',
  },
]

const InputMessage = ({ input, setInput, sendMessage }: any) => (

  <div className=" flex clear-both">
   
    <input
      type="text"
      aria-label="chat input"
      required
      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
      value={input}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          sendMessage(input)
          setInput('')
        }
      }}
      onChange={(e) => {
        setInput(e.target.value)
      }}
    />
    <Button
      type="submit"
      className="ml-4 flex-none"
      onClick={() => {
        sendMessage(input)
        setInput('')
      }}
    >
      Converse
    </Button>
  </div>
)

function Chat() {
  const [messages, setMessages] = useState<ChatGPTMessage[] | any>(initialMessages);
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [cookie, setCookie] = useCookies([COOKIE_NAME])

  useEffect(() => {
    if (!cookie[COOKIE_NAME]) {
      const randomId = Math.random().toString(36).substring(7)
      setCookie(COOKIE_NAME, randomId)
    }
  }, [cookie, setCookie])

  const sendMessage = async (message: string) => { // envia mensagem para API /api/chat endpoint
    setLoading(true);
    const newMessages: any = [
      ...messages,
      { role: 'user', content: message } as ChatGPTMessage,
    ]
    setMessages(newMessages)
  
    const last10messages = newMessages.slice(-10); // memoria para 10 mensagens
    console.log("PARTE 5");
    console.log(last10messages);

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: last10messages,
        user: cookie[COOKIE_NAME],
      }),
    })
    console.log(response);
    console.log('Edge function returned.');


    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let lastMessage = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)

      lastMessage = lastMessage + chunkValue

      setMessages([
        ...newMessages,
        { role: 'assistant', content: lastMessage } as ChatGPTMessage,
      ])

      setLoading(false)
    }
  }

  //useEffect(() => {
  //  setMessages(initialMessages);
  //}, [])
//   const button =document.querySelector("button")

//  const handleClose(){

//  }
const [expanded, setExpanded] = React.useState<string | false>('panel1');
const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div style={{ borderRadius: '5px',zIndex:999999, marginBottom:'2rem',maxWidth:300 }}>
      <Accordion
        sx={{ borderRadius: '5px'}}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        disableGutters={true}>
        <AccordionSummary
          style={{ borderRadius: '5px',  }}
          expandIcon={<MdOutlineArrowUpward />}
          aria-controls="panel1d-content" id="panel1d-header"
          >
            <Typography>Supply Pharma</Typography>
          </AccordionSummary>
      
        <div
          style={{
            height: '300px',
            background: '#f5f1f0',
            padding: '3px',
            borderRadius: '1px',
            marginBottom: '3px'
          }}>
          <AccordionDetails >

            <div  className="rounded-2xl border-zinc-100  lg:border lg:p-6 border-r-2 h-60 overflow-scroll">
              <div style={{overflowY:'scroll',height:'240px'}}>
              {messages?.length > 0 ? <>
                {messages?.map(({ content, role }: any, index: any) => (
                  
                    <ChatLine key={index} role={role} content={content} />
                  
                ))}
              </>
                : <></>}
              {loading && <LoadingChatLine />}
              </div>

              <div 
              style={{ marginTop:'5px', paddingBottom:'25px', }}
              >
                <InputMessage
                  input={input}
                  setInput={setInput}
                  sendMessage={sendMessage}
                  // style={{ marginTop: '75px' }}
                />
              </div>

            </div>
          </AccordionDetails>
        </div>
      </Accordion>
    </div>
  );
}

export default Chat;