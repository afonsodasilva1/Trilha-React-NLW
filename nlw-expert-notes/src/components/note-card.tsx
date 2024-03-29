export function NoteCard(){
    return (
        <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover: ring-slate-600 focus-visible:ring-2 focus-visible: ring-lime-400'>
          <span className='text-sm font-medium text-slate-300'>
            Há 2 dias
          </span>
          <p className='text-sn leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, molestiae. Blanditiis sapiente consequuntur recusandae natus tenetur quas accusantium non laborum? Voluptatem optio nobis animi quasi eveniet blanditiis doloremque ratione possimus!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, molestiae. Blanditiis sapiente consequuntur recusandae natus tenetur quas accusantium non laborum? Voluptatem optio nobis animi quasi eveniet blanditiis doloremque ratione possimus!
          </p>   
          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </button>
    )
}