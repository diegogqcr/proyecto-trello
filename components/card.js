import Image from "next/image"

export function Card({ text, id, setDragged, list }) {
  function handleDragStart() {
    setDragged({
      data:{
        text, id
      },
      list: event.target.closest('[data-list]').dataset.list
      })
  }

  return (
    <div draggable onDragStart={handleDragStart} className="flex flex-col gap-4 p-3 rounded-md bg-slate-100 text-slate-900 hover:cursor-move">
      <div className="flex justify-between ">
        {/* <div className="flex flex-col gap-2"> */}
          <p className="font-bold">{text}</p>
          {/* <p className="font-medium">{id}</p> */}
        {/* </div> */}
        <Image src="/static/icons/edit.svg" alt="edit" width={20} height={20} />
      </div>
      <div className="flex justify-between ">
        <Image width={37} height={40} src="/static/images/avatar.svg" alt="avatar" />
        <Image width={20} height={20} src="/static/icons/square.svg" alt="square" />
      </div>
    </div>
  )
}
