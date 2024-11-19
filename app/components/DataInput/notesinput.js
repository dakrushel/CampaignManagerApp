export default function NotesInput({showNotes}) {
    return(
    <div className="absolute w-full h-full bg-black/60 flex items-center justify-center" onClick={() => showNotes(false)}>
        <form onClick={(event) => event.stopPropagation()}
        style={{background: "#F4CE88", borderColor: "#e9bf69"}} 
        className="flex flex-col p-5 rounded-xl border-2 justify-center max-w-96">
            <input type = "text" placeholder="Title" 
            className="mb-3 text-xl rounded-lg border-1 px-2 py-1"
            style={{background:"#feddab", borderColor:"#e9bf69", color:"#193E19", placeholder:"#105b10"}}/>
            <input type = "textarea" placeholder="Epic lore stuff" 
            className="text-xl rounded-lg border-1 px-2 py-1 mb-3 max-h-96"/>
            <div>
                <button>Finish</button>
                <button>Cancel</button>
            </div>
        </form>      
    </div>
    )

}