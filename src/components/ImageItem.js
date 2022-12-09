import IterativeCSS from '../pages/IterativeDesign.module.css';

export function ImageItem({item}){
    return (
        <img src={item.image} className={IterativeCSS.image}/>
    );
}