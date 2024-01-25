"use client"

import Image from "next/image";
import style from "./perfil.module.css";
import {useState} from 'react';

function Perfil(){
    const[picture, setPicture]=useState("/picture.jpg");
    return(
        <div className={style["contenedor"]}>
            <div className="profile">
                <Image src={picture}/>
            </div>
        </div>
    )
}
export default Perfil;
