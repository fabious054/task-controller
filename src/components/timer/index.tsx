import Button from "../button";
import Clock  from "./clock";
import style from "./Timer.module.scss";
import { timeToSecond } from "../../common/utils/time";
import { Itaks } from "../../types/task";
import { useEffect, useState } from "react";

interface Iprops{
    selecionado: Itaks | undefined;
    finalizaTask: () => void;
}

export default function Timer({selecionado,finalizaTask}:Iprops){
    const [time, setTime] = useState<number>(timeToSecond(String(selecionado?.timeTask)));

    useEffect(() => {
        if (selecionado?.timeTask) {
            setTime(timeToSecond(String(selecionado.timeTask)));
        }
    }, [selecionado]);

    function regressiva(time:number = 0 ){
        // if (time > 0) {
        //     let interval = setInterval(() => {
        //         setTime(time => time - 1);
        //     }, 1000);
        //     setTimeout(() => {
        //         clearInterval(interval);
        //     }, time * 1000);
        // }

        setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
                return regressiva(time - 1);
            }
            finalizaTask();
        },1000);
    }
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie um cronômetro</p>
            <div className={style.relogioWrapper}>
                <div>
                    <Clock time={time} />
                </div>
            </div>
                <Button text="Iniciar" onClick={() => regressiva(time)} />
        </div>
    )
}