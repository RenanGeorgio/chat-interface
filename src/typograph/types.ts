import { ChartDataset } from "chart.js";

export type Obj = {
    [key: string]: any
}

export type User = {
    name: string;
    email: string;
}

export type SignInData = {
    email: string;
    password: string;
}

export type SignInResponse = {
    token: number | string;
    user: Obj;
}

export type ResponseError = {
    error:{
        message: string;
        statusCode: number;
    }
}

export type GeoLocation = {
    city: string;
    company: string;
    image?: string;
    state: string;
    lat: number;
    lng: number;
}

export type LineGraphData = {
    labels: string[];
    datasets: ChartDataset
    options: Obj;
}

export type ChartData = {
        lineChartData:{
            byProduct: LineGraphData,
            byStore: LineGraphData,
            byDate: LineGraphData
        }
    }
    
