import style from "./Clock.module.scss";

interface Props{
    time:number | undefined;
}
export default function Clock({time = 0 }:Props){
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutoDezena, minutoUnidade] = String(minutes).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String(seconds).padStart(2, '0');


    return(
        <>
        <span className={style.relogioNumero}>{minutoDezena}</span>
        <span className={style.relogioNumero}>{minutoUnidade}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundoDezena}</span>
        <span className={style.relogioNumero}>{segundoUnidade}</span>
      </>
    )
}