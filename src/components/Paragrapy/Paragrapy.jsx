import styles from "./paragrapy.module.css"

const Paragrapy =({children})=>{
    return(
       <div>
         <p className={styles.p}>{children}</p>
       </div>
    )
}

export default Paragrapy