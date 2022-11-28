import { Responsepost } from "../../service/viewsApi";
import { TableItem, TableList } from "./styles";

export interface ObjResponse{
    
 dados: Responsepost[] | undefined
}
const TableDado = ({dados}:ObjResponse) => {
  return (
        <TableList>
           <TableItem>
          <p>Tipo op</p>
          <span>Nome da Loja</span>
          <span>Valor:</span>
          </TableItem>
        {dados === undefined  ? ("Sem registros") :(dados?.map((dado:Responsepost)=>
         { return(
          <TableItem>
          <p> {dado.typeOp}</p>
          <div>{dado.store_name}</div>
          <span>R${dado.value},00</span>
          </TableItem>



         ) }))}
        
        </TableList>
  );
};

export default TableDado;
