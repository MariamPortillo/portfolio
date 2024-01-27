"use client"
import Link from "next/link";
import Image from "next/image";
import style from "./perfil.module.css";
import { useState } from 'react';

function Perfil() {
    const [picture, setPicture] = useState("/picture.jpg");
    const[iconGit, setIconGit]=useState("/github.svg");
    const[iconFace, setIconFace]=useState("/facebook.svg");
    const[iconInsta, setIconInsta]=useState("/instagram.svg");
    const[iconTwit, setIconTwit]=useState("/twitter.svg");
    return (
        <div className={style["contenedor"]}>
            <div className={style["profile"]}>
                <div className={style["profile-img"]}>
                    <Image className={style["profile-img-img"]} src={picture} width={205} height={205} />
                </div>
                <div className={style["profile-info"]}>
                        <h1 className={style["profile-h1"]}>Mariam Portillo</h1>
                        <p className={style["profile-p"]}>Front end Developer</p>
                    <div className={style["profile-social"]}>
                        <div>
                            <Link href="https://github.com/MariamPortillo">
                                <Image src={iconGit} width={36} height={36}/>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.facebook.com/mariam.portillo.1/">
                                <Image src={iconFace} width={36} height={36}/>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.instagram.com/portillo.mariam/">
                                <Image src={iconInsta} width={36} height={36}/>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://twitter.com/MariamNaylea">
                                <Image src={iconTwit} width={36} height={36}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Perfil;
