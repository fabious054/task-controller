import React,{useState} from 'react';
import Form from '../components/form';
import List from '../components/lista';
import Style  from './App.module.scss';
import  Timer  from '../components/timer';
import { Itaks } from "../types/task";

function App() {
  const [tasks, settask] = useState<Itaks[]>([]);
  const [selected, setSelected] = useState<Itaks>();

  function selecionaTask(selectedTask: Itaks) {
    setSelected(selectedTask);
      settask((anteriores) => anteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === selectedTask.id ? true : false,
      })
    ));
  }

  function finalizaTask() {
    if(selected){
      setSelected(undefined);
      settask((anteriores) => anteriores.map(tarefa => {
        if(tarefa.id == selected.id){
          return {
            ...tarefa,
            selecionado: false,
            completado: true,
          }
        }
        return tarefa;

      }))
    }
  };

  return (
    <div className={Style.AppStyle}>
      <Form setNewTasksFnc={settask} />
      <List selecionaTask={selecionaTask} tasks={tasks} />
      <Timer finalizaTask={finalizaTask} selecionado={selected} />
    </div>
  );
}

export default App;
