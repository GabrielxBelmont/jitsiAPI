import * as React from 'react';

var events = {
    ESC:null
}


const Context = React.createContext({})



export function GlobalProvider({children}){

    // const [acesso, setAcesso] = React.useState("");
        

    return <Context.Provider
        value={{
            // acesso, setAcesso
        }}
        >
    </Context.Provider>


}


const useGlobal = () => React.useContext(Context);



export default useGlobal;