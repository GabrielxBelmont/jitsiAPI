import Client from "./client";
import Teleconsultor from "./teleconsultor";
import React from "react";
import { render } from "react-dom";
import Link from 'next/link'

export default function Home() {

    return (
        <div>
            <script src='https://meet.jit.si/external_api.js'></script>
            <div>
                <Link class="btn" href="/client">
                    ACESSO CLIENTE
                </Link>
            </div>
            
            <div>
                <Link class="btn" href="/teleconsultor">
                    ACESSO TELECONSULTOR
                </Link>
            </div>
        </div>
    )
}