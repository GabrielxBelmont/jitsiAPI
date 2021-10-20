import Client from "./client";
import Teleconsultor from "./teleconsultor";
import React from "react";
import '../styles/style.css'
import Head from 'next/head'
import Link from 'next/link'
import { GlobalProvider } from '../components/global'


function MyApp({ Component, pageProps }){
    return (<>
            <Head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <script src='https://meet.jit.si/external_api.js'></script>
            </Head>
            <div>
                <div>
                    
                    <Component {...pageProps} />
                    {console.log("Passou 1")}
                </div>
            </div>
        </>
    )
}

export default MyApp

