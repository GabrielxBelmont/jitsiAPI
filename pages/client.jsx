import {useState} from 'react'
import React from 'react';
import ReactDOM from 'react-dom';

function Client() {
    const [show, setShow] = React.useState(false)
    const [counter, setCounter] = React.useState(3)
    const [none, setNone] = React.useState("")
    function func(){
        const domain = 'meet.jit.si';
        const options = {
            roomName: 'OigenteToTestandoEssaAPI',
            width: '100%',
            height: '100%',
            parentNode: document.querySelector('#iframe')
        };
        const api = new JitsiMeetExternalAPI(domain, options);

        setShow(false);
    }
    React.useEffect(() => {
        setTimeout(() => setShow(true), 3000);
        document.addEventListener("click", function() {
            console.log("batata", this)
        })
    }, []);
    React.useEffect(() => {
    const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer)    
    
    }, [counter]);


    console.log(">>>>", counter)

    return (
        <div class="row col-12 justify-content-center">
            <div className="center">
                {
                    show ? 
                    <button onClick={func}>
                        CLIQUE AQUI PARA <br/>INICIAR SUA TELECONSULTA   
                    </button> 
                    : null
                }
            </div>
            {
                counter ? 
                <>
                <div className="center">
                <p>AGUARDE ENQUANTO A FILA É FINALIZADA. <br/>VOCÊ ESTÁ NA POSIÇÃO {counter}</p>
                </div> 
                </>
                : null
            }
            {/* close-page */}
            <button id="fj">fecha o jitsi</button>
            <div id="iframe">
                   {/* quando doc fechar a call, mata o que tem no warframe, quando o cllient fechar a call, mata o warframe */}
            </div>
        </div>
    )
}

export default Client;