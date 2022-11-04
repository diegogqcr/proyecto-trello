import { List } from "../components/list"
import { Card } from "../components/card"
import { useState, useEffect } from "react"//para manejar los estados de las list

const todoList = [
  {
    text: 'Implementar inicio de sesion',
    id: 'todoList-task-1',
  },
  {
    text: 'Otra tarea por hacer',
    id: 'todoList-task-2',
  },
]

const inProgressList = [
    {
      text: 'Implementar inicio de sesion',
      id: 'inProgressList-task-1',
    }
  ]
 
const doneList = [
    {
      text: 'Implementar inicio de sesion',
      id: 'doneList-task-2',
    }
  ]
    
export default function Board() {
    const [dragged, setDragged]= useState(null)
  
    //se define el estado de las listas
    const[listOfLists, setListOfLists] = useState({
        todoList,
        inProgressList,
        doneList,
    })

    
    //1:28'
    //por accion de algo se activa el useEfect
    //Se hace una copia de ListOfList con el structuredClone 
  //Se reemplaza el useEffect y se le pasa a la function handleDrop
    // useEffect(() => {
    //     setTimeout(() =>{
    //         const listOfListsClone = structuredClone(listOfLists) //se hace el clone aca es de JS
    //         //Se crea un push con los cambios a la list inProgressList y luego se asigna a la nueva lista en setListOfList
    //         listOfListsClone.inProgressList.push({
    //             text: 'ola ke ase estupido',
    //             id: crypto.randomUUID(), //crea id's unicos en cada elemento
    //         })
    //         setListOfLists(listOfListsClone)  
    //     }, 5000)
    // },[])

    function handleDrop(event){
      event.preventDefault()
      const list = event.currentTarget.dataset.list
      const listOfListsClone = structuredClone(listOfLists) //se hace el clone aca es de JS
      const newList = listOfListsClone[dragged.list].filter(item => item.id !== dragged.data.id)
      listOfListsClone[dragged.list]= newList
      listOfListsClone[list].push(dragged.data)
              setListOfLists(listOfListsClone) 
      // console.log(event )
    }
    
    return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold underline">
        Developmet
      </h1>
      <main className="flex justify-between gap-4">
      
      <List
      name='TODO'
      handleDrop={handleDrop}
      id="todoList" 
      >
        { 
          listOfLists.todoList.map((item, index) => (  //ya que cardList es un array lo puedo iterar con el map
            <Card setDragged={setDragged} {...item} key={item.id} /> //utilizando el operador spread  paso los valores de las props a las card
            //se envian los datos al componenente list como children {...item} 
          ))//todo lo que esta aqui adentro para list es un children asi que pasamos las props
        } 
      </List>

      <List
      name='In Progress List'
      handleDrop={handleDrop}
      id="inProgressList"
      >
        { 
          listOfLists.inProgressList.map((item, index) => (  //ya que cardList es un array lo puedo iterar con el map
            <Card  setDragged={setDragged} {...item} key={item.id} /> //utilizando el operador spread  paso los valores de las props a las card
            //se envian los datos al componenente list como children {...item} 
          ))//todo lo que esta aqui adentro para list es un children asi que pasamos las props
        } 
      </List>

      <List
      name='Done List'
      handleDrop={handleDrop}
      id="doneList" 
      >
        { 
          listOfLists.doneList.map((item, index) => (  //ya que cardList es un array lo puedo iterar con el map
            <Card setDragged={setDragged} {...item} key={item.id} /> //utilizando el operador spread  paso los valores de las props a las card
            //se envian los datos al componenente list como children {...item} 
          ))//todo lo que esta aqui adentro para list es un children asi que pasamos las props
        } 
      </List>
      </main>
          
    </div>
  );
}


// setDragged={setDragged} sirve para que pueda asignar el elemento que se esta arrastrando