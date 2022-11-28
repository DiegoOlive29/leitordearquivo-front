
import { api } from "../utils/urls";


interface DataPost{
    FormData : FormData
}
export interface Responsepost{
    
		id: number | undefined;
		typeOp: string  | undefined;
		date: string  | undefined;
		value: number  | undefined;
		cpf: string  | undefined;
		card: string  | undefined;
		hour: string  | undefined;
		sale: number | undefined;
		store_owner: string  | undefined;
		store_name: string  | undefined;
	
}



export async function postAnt(dataAnt:any): Promise<Responsepost> {

    
    const {data} = await api.post('dados/',dataAnt)
    

    return data

}   
export async function getAnt(): Promise<Responsepost[]> {

    
    const {data} = await api.get(`dados/list/`)
    

    return data
}   