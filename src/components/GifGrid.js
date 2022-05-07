import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const { data: images , loading} = useFetchGifs(category);

    return (
        <>
        <h3>{ category }</h3>
            { loading ? <div className="loader-container">
                <span className="loader"></span>
            </div> : ''}
            <div className='card-grid'>
                {
                    images.map( img => {
                        return <GifGridItem key={img.id} {...img}/>
                    })
                }
            </div>
        </>
    )
}