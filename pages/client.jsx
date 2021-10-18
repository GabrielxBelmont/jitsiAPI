
function Client() {
    
    function func(){
        const domain = 'meet.jit.si';
        const options = {
            roomName: 'OigenteToTestandoEssaAPI',
            width: '100%',
            height: '100%',
            parentNode: document.querySelector('#iframe')
        };
        const api = new JitsiMeetExternalAPI(domain, options);
    }

    return (
        <div class="row col-12 justify-content-center">
            <script src='https://meet.jit.si/external_api.js'></script>
            <div id="iframe">
                <button onClick={func}>
                CLIQUE AQUI
                </button>    
            </div>
        </div>
    )
}

export default Client;
