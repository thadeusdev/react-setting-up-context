import {createContext} from 'react'

// create the context object
const PauseContext = createContext()

// create the context provider
function PauseProvider({children}){
    return (
        <PauseContext.Provider value={true}>
            {children}
        </PauseContext.Provider>
    )
}

// export
export {PauseContext, PauseProvider}