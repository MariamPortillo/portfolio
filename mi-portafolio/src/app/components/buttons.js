"use client"

import Image from "next/image";
import style from "./buttons.module.css";
import { useState } from 'react';

function Buttons (){
    const[download, setDownload]=useState('download.svg');
    const mensaje=()=>{
        alert('Descargando documento')
    }
    return(
        <div className={style["contenedor"]}>
            <div className={style["buttons"]}>
                <button className={style["btn-primary"]} onClick={mensaje}>
                    <div className={style["btn-content"]}>
                        <p className={style["btn-primary-content-p"]}>Download CV</p> 
                        <Image className={style["btn-primary-img"]} src={download} width={26.979} height={24}/> 
                    </div>
                </button>
                <a className={style["btn-secondary"]}  href="mailto:mariamnaylea32@gmail.com">
                    <div className={style["btn-content"]}>
                        <p className={style["btn-secondary-content-p"]}>Contact me</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default Buttons;