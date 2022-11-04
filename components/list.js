
//recibe las props o los items por medio de children {...item} y se utiliza como {Children}
export function List({ children, name, handleDrop, id }){
   
    function handleDragOver(event){
        event.preventDefault()
        console.log(event )
    }
    
    return(
        // hacer que los hijos sean flex-1 y el padre flex los hace responsive incrementales
    <div data-list={id} onDragOver={handleDragOver} onDrop={handleDrop} className="flex-1 p-4 bg-gray-400 rounded-md"> 
        <h2 className="p-5 mb-3 font-bold text-gray-800">{name}</h2>
        <div className="flex flex-col gap-4">
            {children}
        </div>
    </div>
    )
}

