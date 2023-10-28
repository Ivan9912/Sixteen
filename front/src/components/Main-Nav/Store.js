import { useReducer,createContext, Component } from 'react';

export const Store = createContext();

//el estado inicial de la app o variable de estado global.
const initialState = {
    cart:{
        cartItems:[]
    },
}

//funcion reductora donde crea la lógica funcional.
const reducer = (state, action) => {

}

//funcion para crear el store y envolver a los componentes hijos.
export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value} />
}

// Ejemplo de implementación.
//function MyApp({ Component, pageProps}) {
    //return (
        //<StoreProvider>
            //<Component {... pageProps} />
        //</StoreProvider>
    //)
//}
// export default MyApp