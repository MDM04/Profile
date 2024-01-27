import styles from "./avatar.module.css"
const Avatar = ({ imgAvatar, title }) => {
    return (
        <img className={styles.avatar} src={imgAvatar} alt={title} />
    )
}
export default Avatar