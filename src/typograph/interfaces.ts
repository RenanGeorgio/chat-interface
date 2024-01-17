import { User, SignInData, ResponseError, Obj, LineGraphData, ChartData } from './types';

export interface AuthContextType {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void | ResponseError>
    dataSet: (data: Obj) => void;
    dataGet: ChartData;
}