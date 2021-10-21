
function Teleconsultor() {
    function func(){
        const domain = 'meet.jit.si';
        const options = {
            roomName: 'OigenteToTestandoEssaAPI',
            width: '100%',
            height: '100%',
            parentNode: document.querySelector('#iframe')
        };
        const api = new JitsiMeetExternalAPI(domain, options);
        let cliente1 = document.querySelector('.fila:last-child');
        cliente1.parentNode.removeChild(cliente1);
    }
    return (
        <div className="row col-12 justify-content-center">
            <div id="iframe">
            </div>
            <div className="fila">
                <div id='c1' className="card">cliente 1</div>
                <div id='c2' className="card">liente 2</div>
                <button onClick={func} >Iniciar consulta</button>
            </div>
        </div>
    )
}

export default Teleconsultor;