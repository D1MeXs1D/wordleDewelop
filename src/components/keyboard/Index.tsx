import styles from './stylesKeyBoard.module.css'

const leterValue = ["Ё","Й","Ц","У","К","Е","Н",
"Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р",
"О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю"]

export default function Letters() {
  return (
    <div className={styles.wrapper}>
        <>{leterValue.map(item => {return (
            <div className={styles.buttonKeyboard}>{item}</div>
        )})}</>
    </div>
  )
}
