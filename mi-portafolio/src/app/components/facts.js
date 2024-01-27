"use client"

import Image from "next/image";
import style from "./facts.module.css";
import { useState } from 'react';

function Facts(){
    return(
        <div className={style["contenedor"]}>
            <div className={style["facts"]}>
                    <div className={style["fact-item"]}>
                        <h2 className={style["fact-item-h2"]}>7</h2>
                        <p className={style["fact-item-p"]}>Years of work experience</p>
                    </div>
                    <div className={style["fact-item"]}>
                        <h2 className={style["fact-item-h2"]}>50+</h2>
                        <p className={style["fact-item-p"]}>Completed projects</p>
                    </div>
                    <div className={style["fact-item"]}>
                        <h2  className={style["fact-item-h2"]}>20+</h2>
                        <p className={style["fact-item-p"]}>Satisfied customers</p>
                    </div>
            </div>
        </div>
    )
}
export default Facts;