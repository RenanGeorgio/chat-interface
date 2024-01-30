import { User, SignInData, ResponseError, Obj, ChatGPTAgent } from './types';

export interface AuthContextType {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void | ResponseError>
    dataSet: (data: Obj) => void;
    dataGet: any;
}

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}