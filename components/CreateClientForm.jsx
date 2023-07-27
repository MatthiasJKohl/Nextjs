import {useState, useRef} from "react"

export default function createClientForm() {
    const form = useRef(null)

    const [errorBag, setErrorBag] = useState({
        name: ""
    })

    const [successMessage, setSuccessMessage] = useState("")

    function resetErrorBag(){
        setErrorBag({
            name: ""
        })
        setSuccessMessage("")
    }

    function handleSubmit(e){
        e.preventDefault()
    
   
        
        const formData = new FormData(form.current)
        const data = Object.fromEntries(formData)
        console.log("data",data)
        const baseUrl = process.env.NEXT_PUBLIC_API_URL
        let suffix = '/clientCreation/createClient'
        const endPoint = baseUrl + suffix 
        resetErrorBag()


        fetch(endPoint, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            const detail = data?.detail
            console.log(detail)
            // console.log(data, "data")
            if(detail && typeof detail != "string")
            {
                let firstError = detail[0]
                let loc = firstError.loc[1]
                setErrorBag(prev => ({...prev, [loc]: firstError.msg}))
                return
            }
            else if(detail && typeof detail == "string"){
                setErrorBag(prev =>  ({...prev, name: detail}))
                return
            }
            setSuccessMessage("Submitted!")
            form.current.name.value = ""
            form.current.querySelectorAll("input[type='radio']").forEach(
                el => {
                    el.checked = false
                }
            )
           
           

        }).catch(err => {
            console.log("error happened ", err)
        })
    };

    return (
    
        <form className="grid grid-rows-auto place-items-center bg-white w-full h-full" ref={form} onSubmit={handleSubmit}>
               <div className="h-auto">
                <label className="inline-block text-gray-700 font-bold mb-2 p-2" htmlFor='name'>Name:</label>
                <input className="inline-block px-4 py-2 border rounded mb-4 p-2"
                    type='text'
                    id='name'
                    name="name"
                    placeholder="Enter name"
                />
                <br></br>
                </div>
            
            <div>
                <label className="inline-block text-gray-700 font-bold mb-2" htmlFor='gender'>Gender:</label>
                <label className="inline-flex items-center p-2"> 
                <input 
                    className="inline-block form-radio text-blue-500"
                    type='radio'
                    id='male'
                    value="male"
                    name='gender'
                />
                <span className="ml-2">Male</span>
                </label>
                
                <label className="inline-flex items-center p-2">
                <input
                    className="form-radio text-blue-500" 
                    type='radio'
                    id='female'
                    value="female"
                    name='gender'
                />
                <span className="ml-2">Female</span>
                </label>

                <label className="inline-flex items-center p-2">
                <input
                    className="form-radio text-blue-500" 
                    type='radio'
                    id='other'
                    value="other"
                    name='gender'
                />
                <span className="ml-2">Other</span>
                </label>
            </div>
        

        
            <div>
                <label className="inline-block text-gray-700 font-bold mb-2 p-2" htmlFor='age'>Age:</label>
                <label className="inline-flex items-center">
                <input 
                    className="inline-block form-radio text-blue-500"
                    type='radio'
                    id='0-18'
                    value="0-18"
                    name='age'
        
                />
                <span className="ml-2">0-18</span>
                </label>
                
                <label className="inline-flex items-center p-2">
                <input 
                    className="form-radio text-blue-500"
                    type='radio'
                    id='18-25'
                    value="18-25"
                    name='age'
                />
                <span className="ml-2">18-25</span>
                </label>

                <label className="inline-flex items-center p-2">
                <input 
                    className="form-radio text-blue-500"
                    type='radio'
                    id='25-50'
                    value="25-50"
                    name='age'
                />
                <span className="ml-2">25-50</span>
                </label>

                <label className="inline-flex items-center">
                <input
                    className="form-radio text-blue-500" 
                    type='radio'
                    id='50+'
                    value="50+"
                    name='age'
                />
                <span className="ml-2">50+</span>
                </label>
                </div>
                <div>
                    <label className="inline-flex items-center p-2">
                    <button className="px-5 py-2 rounded bg-blue-500 text-gray-50">Submit</button>
                    </label>
                    <span className="text-green-500">{successMessage}</span>
                </div>

                <div>
                <span className="text-red-500 inline-flex items-center">{errorBag.name}</span>
                </div>
    
            
            </form>
                 

       
  );
};

    
    
