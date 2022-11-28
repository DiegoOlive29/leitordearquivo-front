import styled  from "styled-components";

export const TableList = styled.div`  
    background-color: var(--white);
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : flex-start;
    width           : 95%;
    margin-bottom   : 10px;
    max-height      : 400px;
    overflow-y      : scroll;
    min-height      : 600px;
    padding-top     : 10px;
    gap             : 5px;
    border          : 2px solid var(--greytext);
    border-radius   : 10px ;
    
`
export const TableItem = styled.div`
    display         : flex;
    flex-direction  : row;
    align-items     : center;
    justify-content : space-between;
    width           : 95%;
    border-bottom   : 1px solid;
    font-size       : 12px;
    p{
        width           : 25%;
        
        text-align      : start
    }
    
    span{
        width           : 25%;
        text-align      : end;
    }
    div{
        width           : 25%;

    }
`
    


