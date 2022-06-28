import {useState} from 'react';
function Tab({children,activeTab}) {

    const[active,setActive] = useState(activeTab)
  return (
    <div>
        <nav>
            {children.map((item,index)=> (
            <button 
            onClick={()=> setActive(index)}
            className={active === index ? 'bg-orange-700': 'bg-gray-100'} 
             key={index}
             >
            {item.props.title}</button>))}
            </nav>
        {children[active]} {/*children da benim active tabım hangisi ise  */}
    </div>
  )
}



Tab.Panel = function({children,title}){

    return(
        <div>{children}</div>
    )
};

export default Tab;