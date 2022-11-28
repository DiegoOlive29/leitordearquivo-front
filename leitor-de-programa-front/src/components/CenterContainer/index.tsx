import { MainCenter } from "./styles";
import { useForm } from "react-hook-form";
import { postAnt, getAnt } from "../../service/viewsApi";

const CenterContainer = () => {
    

    const { register, handleSubmit} = useForm();
    const  handleSubmitPost = async (data:any)=> {
      let dadosGet = await getAnt()
      console.log(dadosGet)
      
        
    }
    return (
        <MainCenter>
        <form  onSubmit={handleSubmit(handleSubmitPost)}>
            
            <input type="file"  {...register("file")}/>
            <button>Subir arquivo</button>
        </form>
      
        </MainCenter>
    );
};

export default CenterContainer;
