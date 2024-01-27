import styles from "./paragrapy.module.css"

const Paragrapy =({dados})=>{
    return(
       <div>
         <p className={styles.p}>{dados}</p>
       </div>
    )
}

export default Paragrapy