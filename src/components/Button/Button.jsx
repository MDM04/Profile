import styles from "./button.module.css"

const Button = ({ urlName, nameButton }) => {
  return (
    <div className={styles.links}>
      <a href={urlName} target="_blank">{nameButton}</a>
    </div>
  )
}

export default Button