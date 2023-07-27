import { useEffect, useState } from "react";

export default function useDebounce(value, delay=200){

    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {

        const timeOut = setTimeout(() => {
            setDebouncedValue(value) 
        }, delay
        )


    }, [value]
    )

}