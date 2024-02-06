import styles from "./title.module.css"

/*
utilizando o css module desse modo que fizemos o rest param conseguimos acrescentar 
classes extras no nossso componente que se chama 
observe que abaixo colocamos {...props }
isso da o direito de a clssName pegar o stilo a div pai e utlizar em cada objeto abaixo 
ou seja, suponhamos que fosse uma <div className = suhu><div/>
poderiamos utlizar o style da div para aplicar em cada item dentro como no caso do h1 entre outros

*/

const Title=(props)=>{           // utilizando as props childrem
   return(
    <h1
    {...props}
     className={`${styles.title}`}
     >{props.children}</h1>
   )
}

export default Title