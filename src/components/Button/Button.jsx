import styles from "./button.module.css"

const Button = ({urlName, name,  ...rest}) => {
  return (
    <div
     className={`${styles.button}`}
     {...rest}
    >
      <a href={urlName} target="_blank">{name}</a>
    </div>
  )
}

export default Button