import React , { useContext } from 'react';
import CardInfo from '../components/CardInfo';
import StarIcon from '../components/StarIcon';
import { ListContext } from '../components/Layout';

export default function LikedPage(props) {
    const {list} = useContext(ListContext);
    const activeClass = list ? 'cards-list' : 'cards';
    return (
        <div className={activeClass}>
            {JSON.parse(localStorage.getItem('likedItems'))?.map((product) => (
                <CardInfo 
                    product={product} 
                    class="card"
                    key={product.articul}
                    button={
                        <StarIcon 
                            fillLiked={"yellow"}
                            product={product}
                            remove="true"
                        />
                    }
                />
            ))}
        </div>
    );
}