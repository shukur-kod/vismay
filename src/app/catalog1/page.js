"use client"
import styles from "./catalog1.module.css"

export default function CompanyPage() {
    return (
        <div className={styles.companyContainer}>
            <h1 className={styles.companyTitle}>Kompaniya haqida</h1>
            <div className={styles.companyGrid}>
                <div className={styles.companyCard}>
                    <h2>Kompaniya tarixi</h2>
                    <p>Biz bilgandik biz kutgandik shunday kunlar kelishini. kompaniya 2030-yilda global isish tufayli 
                        dengiz sathining ko'tarilishi natijasida yuzaga keladigan suv toshqinlarini to'xtatish maqsadida
                        ko'payib borayotgan dengiz suvlarini tuzsizlantirib cho'l hududlariga yo'naltirish harakatlariga 
                        borib taqaladi. O'shanda markaziy osiyo cho'llari bo'ylab ko'plab ulkan kanallar qazilgan ushbu qazilgan 
                        kanallar uchrashadigan joy esa orol dengizi hududi bo'ldi natijada orol qaytadan to'lib avvalgiga
                        nisbatan kattaroq ham bo'ldi. Shundan so'ng lagistik maqsadlarda orol dengizidan Turkmaniston va Eron
                        orqali Eronning chabahar portiga chiquvchi yana bir katta kanal qazildi. Shu zaylda UzGidroTransga tegishli
                        Orol porti vujudga keldi.
                    </p>
                </div>
                <div className={styles.companyCard}>
                    <h2>Kompaniya maqsadi</h2>
                    <p>UzGidroTrans hozirda butun Markaziy Osiyo hamda Xitoy tovarlarini tashish bo'yicha eng katta ulushga 
                        egalik qiladi.Kompaniya shuningdek o'z oldiga yuk tashish lagistikasi bo'yich butun dunyoda yetakchi 
                        bo'lish va shu bilan birga o'zing ishlab chiqarish tarmoqlariga ham ega bo'lish uchun katta ishlar olib
                        bormoqda. Ushbu ishlab chiqarish tarmoqlariga kemasozlik, mashinasozlik, elektrotexnika va matllurgiyaning
                        ko'pkina sohalari kiradi. BUndan tashqari kompaniya xizmat ko'rsatish sohasida ham jadal ilgarilamoqda.
                        Jhonning mashhur ekspertlari ushbu aytilganlarning barchsi 150000 yildan so'ng sodir bo'lishiga 
                        kafolat berishmoqda </p>
                </div>
            </div>
        </div>
    )
}