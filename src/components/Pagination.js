import React,{useEffect,useState} from 'react'


const Pagination = ({showPerPage,onPaginationChange,total}) =>{
{/*Counter will start from 1*/}

    const [counter,setCounter]=useState(1);
    const [numberOfbuttons, setNumberOfButtons] = useState(5);
    

     useEffect(() =>{
         const value = showPerPage *counter;
         console.log("start value",value-showPerPage);
         console.log("end value",value);
         onPaginationChange(value-showPerPage,value)
     },
     )
 {/*If click on prev button and counter=1 ,it sets to 1 only,it won't go back to negative values
else decrement counter it will go to prev page
If click on next and it reach to last page that should be equal to that counter value
else increment counter value it will go to next page
*/}
    const onButtonClick =(type)=>{
    if(type === 'prev')                   

    {
        if(counter === 1)                  

        {
            setCounter(1)
        }
        else                
        {
            setCounter(counter-1)    
        }
    }
    else if(type === 'next')
    {
        if(Math.ceil(total/showPerPage)=== counter)
        {
            setCounter(counter)
        }
        else
        {
            setCounter(counter+1)
        }
    }
        }
        

     return(
    <>
    <div className="pagebuttons">

        <button className="btn " onClick={()=>onButtonClick('prev')}>Prev</button>

        { new Array(numberOfbuttons).fill("").map((element,index) => (
            <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
              <a
                class="page-link"
                href="!#"
                onClick={() => setCounter(index + 1)}
              >
                {index + 1}
              </a>
            </li>       
        ))}
        
        <button className="btn " onClick={()=>onButtonClick('next')}>Next</button>
    </div>
    </>
)
}
export default Pagination;