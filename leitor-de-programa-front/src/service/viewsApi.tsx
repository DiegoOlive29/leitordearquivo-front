
import { api } from "../utils/urls";


interface DataPost{
    file : File
}
interface Responsepost{
    
		id: number;
		typeOp: string;
		date: string;
		value: number;
		cpf: string;
		card: string;
		hour: string;
		store_owner: string;
		store_name: string;
	
}



export async function postAnt(dataAnt:DataPost): Promise<Responsepost> {

    
    const {data} = await api.post('dados/',dataAnt)
    

    return data

}   
export async function getAnt(): Promise<Responsepost> {

    
    const {data} = await api.get(`dados/list/`)
    

    return data
}   