import Buttons from './buttons/buttons';
import Logo from './logo/Logo';
import style from './styleHeader.module.css';
export default function Header() {
  return (
    <div className={style.wrapper}>
      <Logo/>
      <Buttons/>
    </div>
  )
}
