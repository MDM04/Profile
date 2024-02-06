import Avatar from "./components/Avatar/Avatar"
import Title from "./components/Title/Title"
import Poster from "./assets/avatar.jpg"
import Paragrapy from "./components/Paragrapy/Paragrapy"
import app from "./app.module.css"
import Button from "./components/Button/Button"
 // observe abaixo o texto como ficou com  o children e no metodo normal

 function hanleClick (ev){ // desse modo colocamos o evento de click no buton 
  console.log(ev)
  alert("Parabens voce adicionou seu primerio evento")
} // si caso  a function criada nao depender de nada criado dentro do componente abaixo ela
// nao necessariamente precisa estar dentro do componente abaixo ela pode 
// vir para fora como é o caso dessa aqui 

 const App = () => {
  return (
    <div className="app">
      <div className={app.container}>
        <Avatar imgAvatar={Poster} />
        <Title>
          MDM pro
          <button
          className={app.proButton}
          onClick={hanleClick}>
            Projetos
          </button>
          </Title>
        <Paragrapy>Full stack, JavaScript, Developer</Paragrapy>
        <Paragrapy>+55 11 999596395</Paragrapy>
        <Paragrapy>Email : mdm.pro4@gmail.com</Paragrapy>
         <div className={app.button}>
          <Button urlName="https://github.com" >GitHub</Button>
          <Button urlName="https://linkedin.com" >Linkedin</Button>
          <Button urlName="https://twitter.com" >Twiter</Button>
         </div>
        </div>
      </div>
    
  )
}

export default App