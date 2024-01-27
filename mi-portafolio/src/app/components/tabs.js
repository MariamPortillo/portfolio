"use client"

import Image from 'next/image';
import style from './tabs.module.css';
import {useState} from 'react';

function Tabs(){
    const[hero, setHero]=useState('/Hero_2.jpg');
    const[link, setLink]=useState('/link.svg');
    const[man, setMan]=useState('/bussiness_man.png');
    const[wall, setWall]=useState('/pictures_wall.jpeg');
    const[kitchen, setKitchen]=useState('/kitchen.jpeg');
    const[mobile, setMobile]=useState('/mobile_app.png');
    const[issima, setIssima]=useState('/issima_page.png');
    return(
        <div className={style["contenedor"]}>
            <div className={style["tabs"]}>
                <button className={style["tabs-background-item-active"]}>
                    <p className={style["tabs-background-item-active-p"]}>Portfolio</p>
                </button>
                <button className={style["tabs-background-item"]}>
                    <p className={style["tabs-background-item-p"]}>Skills</p>
                </button>

            </div>
            <div className={style["project-container"]}>
                <div className={style["content-card-img"]}>
                    <Image className={style["content-card-img-image"]} src={hero} width={362} height={226}/>
                    <div className={style["content-card-img-overlay"]}></div>
                    <div className={style["content-card-img-detail"]}>
                        <p className={style["title"]}>SmarterTrading411</p>
                        <p className={style["detail"]}>Landing page of SmarterTrading411 created using WordPress</p>
                        <button className={style["btn"]}>
                            <Image className={style["btn-image"]} src={link} width={20} height={20}alt="link"/>
                        </button>
                    </div>
                </div>
                <div className={style["content-card-img"]}>
                    <Image className={style["content-card-img-image"]} src={man} width={362} height={226} />
                    <div className={style["content-card-img-overlay"]}></div>
                </div>
                <div className={style["content-card-img"]}>
                    <Image className={style["image-grayscale"]} src={wall} width={362} height={226}/>
                    <div className={style["content-card-img-overlay"]}></div>
                </div>
                <div className={style["content-card-img"]}>
                    <Image className={style["content-card-img-image"]} src={kitchen} width={362} height={226}/> 
                    <div className={style["content-card-img-overlay"]}></div>
                </div>
                <div className={style["content-card-img"]}>
                    <Image className={style["content-card-img-image"]} src={mobile} width={362} height={226}/>
                    <div className={style["content-card-img-overlay"]}></div>
                </div>
                <div className={style["content-card-img"]}>
                    <Image className={style["image-grayscale"]} src={issima} width={362} height={226}/>
                    <div className={style["content-card-img-overlay"]}></div>
                </div>
            </div>
        </div>
    )
}
export default Tabs;