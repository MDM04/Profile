import styles from "./paragrapy.module.css"

const Paragrapy =({name})=>{
    return(
       <div>
         <p className={styles.p}>{name}</p>
       </div>
    )
}

export default Paragrapy