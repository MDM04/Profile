import styles from "./button.module.css"

const Button = ({ urlName, children }) => {
  return (
    <div className={styles.button}>
      <a href={urlName} target="_blank">{children}</a>
    </div>
  )
}

export default Button