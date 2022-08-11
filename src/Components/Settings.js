import React, {useEffect, useState} from "react";

function Settings() {

    //useState hook
    const[options, setOptions] = useState(null);

    const [category, setCategory] = useState("");

    const [loading, setLoading] = useState(false);

    //useEffect hook
    useEffect(() => {

        setLoading(true);

        async function fetchCategories() {
            const apiUrl = 'https://opentdb.com/api_category.php';
            let response = await fetch(apiUrl);
            let categories = await response.json();
            return categories;
        }

        fetchCategories().then((categories) => {
            setLoading(false);
            setOptions(categories.trivia_categories);
        });

    }, [setOptions]);

    const handleCategory = event => {
        setCategory(event.target.value)
    }

    if(!loading){

        return (
            <div>
                <div>
                    <h2>Select a category:</h2>
                    <select value={category} onChange={handleCategory}>
                        <option>Discover them here</option>
                        {options && options.map((option) => (
                            <option value={option.id} key={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );

    } else {
        <p>LOADING...</p>
    }

}

export default Settings;