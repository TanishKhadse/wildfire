interface InputTitleProps {
    title: string
}


const InputTitle: React.FC<InputTitleProps> = ({
    title
}) => {
    return(
        <input 
            className=" 
            w-full
            text-[25px]
            text-stone-1000
            leading-tight 
            focus:outline-none 
            "
            id="title" 
            type="text" 
            placeholder={title}
        ></input>
    )
}

export default InputTitle;