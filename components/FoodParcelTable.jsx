import clients from '@/pages/clients';
import { useState, useEffect} from 'react'
import moment from 'moment';




export default function FoodParcelTable({data}) {

   const [dates, setDates] = useState({
    thursday: "",
    tuesday: ""
   })

   useEffect(()=>{
    setDates(getDatesForTueThur())
   }, [])
    
    return (
        <div>
            <table className='table-fixed w-full border'>
                <thead>
                    <tr>
                        <th>Name: </th>
                        <th>Tuesday: {dates.tuesday} </th>
                        <th>Thursday: {dates.thursday}</th>
                    </tr>
                </thead>
                <tbody>
                  {data.map(client => <tr>
                    <td>{client.name}</td>
                    <td className='text-center'>
                      <form>
                      <input
                      type='checkbox'
                      id='FoodParcelTues'
                      >
                      </input>
                      </form>
                    </td>
                    <td className='text-center'>
                      <form>
                      <input
                      type='checkbox'
                      id='FoodParcelThurs'>
                      </input>
                      </form>
                    </td>
                  </tr>) }
                </tbody>
            </table>
        
        </div>
  )
}

let dateformat = "DD/MM/YYYY"
function getDatesForTueThur() {
  let tuesday = moment().startOf("week").add(2, "day").format(dateformat)
  let thursday = moment().startOf("week").add(4, "day").format(dateformat)
  
  return {
    tuesday, thursday
  }
  
}
