import type { ChatGPTMessage } from '../../components/chat/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'experimental-edge',
}

const handler = async (req: Request): Promise<Response> => {
  if(req == null) {
    return new Response(null);
  }
  console.log("PARTE 1");

  console.log(JSON.stringify(req));

  // @ts-ignore
  const body = await req?.json();
  console.log("PARTE 1.1");
  console.log(body);
  console.log("PARTE 1.2");

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: `Um aumento de 23% foi observado para os produtos do grupo: 506010. 
      Sera necessaria uma reposição com antecipação de 17% em comparação a serie historica para os produtos dos grupos:38997 e 467240. 
      Recomendamos a criação de um novo planejamento de fill-out. 
      O produto 888240 precisa ser reposto.`,
    },
  ]

   // @ts-ignore
  if(body?.messages){
    console.log("PARTE 2");
     // @ts-ignore
    const value = {...body?.messages};
    console.log(value);


    messages.push(value);
  }

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }

  if (process.env.OPENAI_API_ORG) {
    requestHeaders['OpenAI-Organization'] = process.env.OPENAI_API_ORG
  }

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: 'what did you know about supply chain optimization?'
    }],
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    // @ts-ignore
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload);
  console.log("PARTE 4");
  console.log(stream);

  return new Response(stream)
}
export default handler
