import { MainCenter } from "./styles";
import { postAnt, getAnt } from "../../service/viewsApi";
import { useState } from "react";
import { Responsepost } from "../..//service/viewsApi";
import TableDado from "../TableDados";

const CenterContainer = () => {
  const [dados, setDados] = useState<Responsepost[]>();

  const handleSubmitPost = async (e: any) => {
    let dadosPost = new FormData();

    dadosPost.append("file", e.files[0]);

    let dadosResult = await postAnt(dadosPost);
    let dadosGet = await getAnt();
    console.log(dadosResult);
    console.log(dadosGet);
    setDados(dadosGet);
  };
  return (
    <MainCenter>
      <form>
        <input type="file" onChange={(e) => handleSubmitPost(e.target)} />
        <button type="button">Subir arquivo</button>
      </form>
      <TableDado dados={dados} />
    </MainCenter>
  );
};

export default CenterContainer;
