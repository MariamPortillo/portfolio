"use client"
import Link from "next/link";
import Image from "next/image";
import style from "./perfil.module.css";
import { useState } from 'react';

function Perfil() {
    const [picture, setPicture] = useState("/picture.jpg");
    const[iconGit, setIconGit]=useState("/github.svg")
    const[iconFace, setIconFace]=useState("/facebook.svg")
    const[iconInsta, setIconInsta]=useState("/instagram.svg")
    const[iconTwit, setIconTwit]=useState("/twitter.svg")
    const[download, setDownload]=useState("/download.svg")
    const mensaje=()=>{
            alert("Descargando documento")
    }
    return (
        <div className={style["contenedor"]}>
            <div className="profile">
                <div className="profile-img">
                    <Image src={picture} width={192} height={192} />
                </div>
                <div className="profile-info">
                    <h1>Mariam Portillo</h1>
                    <p>Front end Developer</p>
                </div>
                <div className="profile-social">
                    <p>
                        <Link href="https://github.com/MariamPortillo">
                            <Image src={iconGit} width={36} height={36}/>
                        </Link>
                        <Link href="https://www.facebook.com/mariam.portillo.1/">
                            <Image src={iconFace} width={36} height={36}/>
                        </Link>
                        <Link href="https://www.instagram.com/portillo.mariam/">
                            <Image src={iconInsta} width={36} height={36}/>
                        </Link>
                        <Link href="https://twitter.com/MariamNaylea">
                            <Image src={iconTwit} width={36} height={36}/>
                        </Link>
                    </p>
                </div>
            </div>
            <div className="facts">
                    <div className="fact-item">
                        <h2>7</h2>
                        <p>Years of work experience</p>
                    </div>
                    <div className="fact-item">
                        <h2>50+</h2>
                        <p>Completed projects</p>
                    </div>
                    <div className="fact-item">
                        <h2>20+</h2>
                        <p>Satisfied customers</p>
                    </div>
            </div>
            <div className="buttons">
                <button className="btn-primary" onClick={mensaje}>
                    <div className="btn-content">
                        <p>Download CV</p>
                        <Image src={download} width={26.979} height={24}/> 
                    </div>
                </button>
                <a className="btn-secondary" href="mailto:mariamnaylea32@gmail.com">
                    <div className="btn-content">
                        <p>Contact me</p>
                    </div>
                </a>
            </div>
            <div className="tabs">
                <button className="tabs-background-item active">
                    <p className="tabs-background-item-text">Portfolio</p>
                </button>
                <button className="tabs-background-item">
                    <p className="tabs-background-item-text">Skills</p>
                </button>
            </div>
            <div class="project-container">
                <div class="content-card-img">
                    <Image src="assets/images/Hero_2.png" />
                    <div class="content-card-img-overlay"></div>
                    <div class="content-card-img-detail">
                        <p class="title">SmarterTrading411</p>
                        <p class="detail">Landing page of SmarterTrading411 created using WordPress</p>
                        <button class="btn">
                            <Image src="assets/icons/link.svg" alt="link"/>
                        </button>
                    </div>
                </div>
                <div class="content-card-img">
                    <img class="image" src="assets/images/bussiness_man.png" />
                    <div class="content-card-img-overlay"></div>
                </div>
                <div class="content-card-img">
                    <img class="image grayscale" src="assets/images/pictures_wall.jpeg" />
                    <div class="content-card-img-overlay"></div>
                </div>
                <div class="content-card-img">
                    <img class="image" src="assets/images/kitchen.jpeg" />
                    <div class="content-card-img-overlay"></div>
                </div>
                <div class="content-card-img">
                    <img class="image" src="assets/images/mobile_app.png" />
                    <div class="content-card-img-overlay"></div>
                </div>
                <div class="content-card-img">
                    <img class="image grayscale" src="assets/images/issima_page.png" />
                    <div class="content-card-img-overlay"></div>
                </div>
            </div>


        </div>
    )
}
export default Perfil;
