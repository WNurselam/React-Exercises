import classNames from 'classnames'

function Button ({text,variant="default"}){
    return(
        <button className={classNames({
            "p-4 h-10 flex items-center rounded":true,
            "bg-gray-500"  :variant === "default",
            "bg-green-600" :variant === "danger",
            "bg-red-900"   :variant === "warning"
            

        })}>
           {text}
        </button>
    )
}

export default Button;