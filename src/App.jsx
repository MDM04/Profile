import Avatar from "./components/Avatar/Avatar"
import Title from "./components/Title/Title"
import Poster from "./assets/avatar.jpg"
import Paragrapy from "./components/Paragrapy/Paragrapy"
import app from "./app.module.css"
import Button from "./components/Button/Button"

const App = () => {
  return (
    <div className="app">
      <div className={app.container}>
        <Avatar imgAvatar={Poster} />
        
          <Title title="MDM pro" />
          <Paragrapy dados="full-stack, JavaScript, developer" />
          <Paragrapy dados="+55 11 9 99596395 " />
          <Paragrapy dados="mdm.pro4@gmail.com" />
         <div className={app.button}>
         <Button nameButton="GitHub" urlName="https://github.com" />
          <Button nameButton="Linkdin" urlName="https://linkedin.com" />
          <Button nameButton="Twiter" urlName="https://twitter.com" />
         </div>
        </div>
      </div>
    
  )
}

export default App