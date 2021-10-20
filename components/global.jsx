import * as React from 'react';

var events = {
    ESC:null
}


const Context = React.createContext({})



export function GlobalProvider({children}){

    const [teste, setTeste] = React.useState(false);
    const [fila, setFila] = React.useState(null);
    
    return <Context.Provider
        value={{
            teste, setTeste
        }}
        >
    </Context.Provider>


}


const useGlobal = () => React.useContext(Context);



export default useGlobal;