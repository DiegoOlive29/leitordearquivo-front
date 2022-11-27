import styled  from "styled-components";

export const MainCenter = styled.main`  
    background-color: var(--greytextmin);
    display         : flex;
    flex-direction  : column;
    align-items     : center;
    justify-content : flex-start;
    width           : 800px;
    min-height      : 600px;
    padding-top     : 10px;
    gap             : 25px;
    border-radius   : 10px;
    border          : 2px solid var(--greytext);
    form{
        width       :95%;
        height      :40px;
        background-color: var(--white);
        border-radius   : 10px;
        display         : flex;
        flex-direction  : row;
        align-items     : center;
        justify-content : space-between;
        padding-left    : 10px;
        

    }
    form:hover{
        border          : 2px solid var(--greenHover);

    }
    input{
        background-color: var(--white);
        height          : 30px;
        padding-top     : 3px;
        

    }

    button{
        background-color: var(--greenHover);
        color           : var(--white);
        padding         : 10px;
        height          : 38px;
        border          : none;
        border-radius   : 0 10px 10px 0 ;
        
    }
    button:hover{
        background-color: var(--greenButton);
        
    }

`



