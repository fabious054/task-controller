import { useState } from "react";
import React from "react";
import style from "./List.module.scss";

import ItemList from "./item/";
import { Itaks } from "../../types/task";

interface IListProps {
    tasks: Itaks[];
    selecionaTask: (task: Itaks) => void;
}

export default function List({tasks, selecionaTask}: IListProps){
    return (
       <aside className={style.listaTarefas}>
        <h2> Estudos do dia</h2>
        <ul>
            {tasks && tasks.map((task, index) => (
                <ItemList selecionaTask={selecionaTask} selecionado={task.selecionado} completado={task.completado} id={task.id} task={task.task} timeTask={task.timeTask}/>
            ))}
        </ul>
       </aside>
    );
}

