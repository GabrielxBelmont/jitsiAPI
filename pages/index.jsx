import Client from "./client";
import Teleconsultor from "./teleconsultor";
import React from "react";
import { render } from "react-dom";
import Link from 'next/link'
import useGlobal from "../components/global";


export default function Home() {

    //const [teste, setTeste] = useGlobal();

    // if(!teste){
    //     console.log("é false")
    // } else{
    //    console.log("é true")
    // }

    return (
        <div>
            {console.log("Passou 2")}
            <div>
                <div>
                    <a href="/client">
                        CLIQUE AQUI CLIENT
                    </a>
                </div>
                <div>
                    <a href="/teleconsultor">
                        CLIQUE AQUI DOCTOR
                    </a>
                </div>
            </div>
        </div>
    )
}