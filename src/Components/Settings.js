import React, {useEffect, useState} from "react";

function Settings() {
    //useState hook
    const[options, setOptions] = useState(null);

    //useEffect hook
    useEffect(() => {
        //declare the async data fetching function
        const fetchData = async () => {
            function sleep(ms){
                return new Promise(resolve => setTimeout(resolve, ms));
            }

            //waits for 10000ms
            await sleep(1000);
            return 'Hello World';
        };

        const result = fetchData()
        //make sure to catch any error
            .catch(console.error);

        console.log(result)
    }, [setOptions])
}

export default Settings;