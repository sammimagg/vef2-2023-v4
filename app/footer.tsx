import styles from './page.module.css'

export default function Footer(){
    return( 
        <footer className={`${styles.rows} ${styles.blue_background} ${styles.center}`}>
            <div className={`${styles.columns} ${styles.center}`}>
                <h2 className={styles.font_white}>Háskóli íslands</h2>
                <p className={styles.font_white}>Sæmundargötu 2 </p>
                <p className={styles.font_white}>  102 Reykjavík</p>
                <p className={styles.font_white}> Kt. 600169-2039</p>
            </div>
            <div className={`${styles.columns} ${styles.center}`}>
                <h2 className={styles.font_white}>Hafðu samband</h2>
                <p className={styles.font_white}>Sími: +354 525 4000</p>
                <p className={styles.font_white}>Fax: +354 525 5802</p>
                <p className={styles.font_white}>Hafa samband : hi@hi.is</p>
            </div>
            <div className={`${styles.columns} ${styles.center}`}>
                <h2 className={styles.font_white}>Opnunartímar</h2>
                <p className={styles.font_white}>Aðalbygging 07:30-18:00</p>
                <p className={styles.font_white}>Háskólatorg 07:30-19:00</p>
                <p className={styles.font_white}>Allir opnunartímar</p>
            </div>
        </footer>
    )
}