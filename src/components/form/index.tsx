import React,{useState} from "react";
import Button from "../button";
import style from "./Form.module.scss";
import { Itaks } from "../../types/task";
import { v4 as uuidv4 } from 'uuid';

interface IFormProps {
  setNewTasksFnc: React.Dispatch<React.SetStateAction<Itaks[]>>;
}

function Form ({setNewTasksFnc}: IFormProps) {
  const [tarefa, setTarefa] = React.useState("");
  const [tempo, setTempo] = React.useState("00:00");

  const addTaks = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTasksFnc((prev) => [...prev, {task:tarefa,timeTask:tempo,selecionado:false,completado:false,id:uuidv4()}] );
    setTarefa("");
    setTempo("00:00");
  };

  return (
    <form className={style.novaTarefa} onSubmit={addTaks}>
    <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
            type="text"
            name="task"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            />
    </div>
    <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
            type="time"
            step="1"
            name="time"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
            value={tempo}
            onChange={(e) => setTempo(e.target.value )}
            />
    </div>
      <Button type="submit" text="Add +" />
    </form>
  );

}

export default Form;