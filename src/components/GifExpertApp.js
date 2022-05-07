import { useState } from "react";
import { AddCategory } from "./AddCategory";
import {GifGrid} from "./GifGrid";

const GiftExpertApp = () => {

    // const categories = ['One punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One punch']);

    return (
        <>
         <h2>GiftExpertApp</h2>
         <AddCategory setCategories={ setCategories }/>
         <hr/>

         <ol>
            {
                categories.map((category,i) => <GifGrid key={category} category={ category }/>)
            }
        </ol>
        </>
    )
}

export default GiftExpertApp;