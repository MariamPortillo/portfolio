import Image from "next/image";
import style from "./page.module.css";
import Perfil from "./components/perfil.js"
import Tabs from "./components/tabs.js"
import Facts from "./components/facts.js"
import Buttons from "./components/buttons.js"

 function Home() {
  return (
    <div className={style["main"]}>
      <Perfil/>
      <Facts/>
      <Buttons/>
      <Tabs/>
    </div>
    


  );
}
export default Home;
