import React from "react";
import style  from "./Item.module.scss";
import { Itaks } from "../../../types/task";

interface IListProps extends Itaks{
    selecionaTask: (task: Itaks) => void;
}

export default function ItemList({id, task, timeTask,selecionado,completado ,selecionaTask}: IListProps){
    return (
        <li key={id} className={`${style.item} ${selecionado ? style.itemSelecionado : '' } ${completado ? style.itemCompletado : '' }`} onClick={()=>{ !completado && selecionaTask({
            id: id,
            task: task,
            timeTask: timeTask,
            completado: false,
            selecionado: true
        })}}>
            <h3>{task}</h3>
            <span>{timeTask}</span>
            {completado && <span className={style.concluido} aria-label="tarefa concluida" ></span>}
        </li>
    );
}
