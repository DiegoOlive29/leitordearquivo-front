import { MainCenter } from "./styles";
import { useForm } from "react-hook-form";

const CenterContainer = () => {

    const { register, handleSubmit} = useForm();
    const  handleSubmitPost = async (data:any)=> {
      console.log(data)

        
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
