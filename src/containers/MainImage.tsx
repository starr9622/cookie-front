import * as React from "react";
import { Image } from "../components";
import { IStoreState } from "../types";
import { useSelector } from 'react-redux';

export default function MainImage(){
    const mainImage = useSelector((state:IStoreState) => state.mainImage)
    
    return (
        <div className="mainImgWrap">
            <Image path={mainImage.path} alt={mainImage.alt} />
        </div>
    )
}