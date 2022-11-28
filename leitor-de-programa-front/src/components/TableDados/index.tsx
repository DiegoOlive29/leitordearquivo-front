import { Responsepost } from "../../service/viewsApi";
import { TableList } from "./styles";

export interface ObjResponse{
    
 dados: Responsepost[] | undefined
}
const TableDado = ({dados}:ObjResponse) => {
  return (
        <TableList>
        {dados === undefined  ? ("Sem registros") :(dados?.map((dado:Responsepost)=>
         { return(
          
          <p> {dado.id}</p>
        



         ) }))}
        
        </TableList>
  );
};

export default TableDado;
