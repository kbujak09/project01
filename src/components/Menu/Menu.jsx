import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <button type='button' className={styles.menu}>
      <span className={`material-symbols-outlined ${styles.icon}`}>menu</span>
    </button>
  )
}

export default Menu;