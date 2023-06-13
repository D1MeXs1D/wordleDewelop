import IconQuestion from './Vector.svg';
import style from './styleButton.module.css'

export default function Buttons() {
  return (
    <>
      <img className={style.icon} src={IconQuestion} alt='question'/>
    </>
  )
}
