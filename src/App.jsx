import Avatar from "./components/Avatar/Avatar"
import Title from "./components/Title/Title"
import Poster from "./assets/avatar.jpg"
import Paragrapy from "./components/Paragrapy/Paragrapy"
import app from "./app.module.css"
import Button from "./components/Button/Button"
import { useState } from "react"
// observe abaixo o texto como ficou com  o children e no metodo normal


/*
si caso  a function criada nao depender de nada criado dentro do componente abaixo ela
nao necessariamente precisa estar dentro do componente abaixo ela pode 
vir para fora como é o caso dessa aqui 

quando voce utilizar o rest Parm ele te ajuda a poder usar um atributo de outro arquivo 
como por exemplo acontece no button eu utilizei uma propriedade do app.button para centralizar e
dar gap entre os buttons que estao no perfil principal 
*/
const App = () => {
  //function modificadora
const [folowText, setFollowText] = useState("Follow") /// retorna uma function que muda esse valors
function hanleClick(ev) { // desse modo colocamos o evento de click no buton 
  setFollowText("Following")
}

  return (
    <div className="app">
      <div className={app.container}>
        <Avatar imgAvatar={Poster} />
        <Title name={"MDM"}>
          <button
            className={app.proButton}
            onClick={hanleClick}>
           {folowText}
          </button>
        </Title>
        <Paragrapy name="Full stack, JavaScript, Developer" /> {/* pode ser uma boa pratica usar assim*/}
        <Paragrapy name={"+55 11 999596395"} />
        <Paragrapy name={"Email : mdm.pro4@gmail.com"} />
        <div className={app.button}>
          <Button urlName="https://github.com" name={"GitHub"} ></Button>
          <Button urlName="https://linkedin.com" name={"Linkedin"} ></Button>
          <Button urlName="https://twitter.com" name={"GitHub"}></Button>
        </div>
      </div>
    </div>

  )
}

export default App