// useSelector para acessar um dado , o mesmo deve trocar de componente

import { useSelector } from "react-redux" 

// definimos os nosso Userredux , e posteriormente a rota do objeto com o rootReducer
// exemplo : /produtos/reducer

//logo apos , o objeto/dado a ser modificado (cartReducer)

const { products} = useSelector(rootReducer => rootReducer.cartReducer )


// para o objeto iremos associa-lo ao componente que devemos mudar o estado 
// ultilizaremos a função map , para cada item adcionado 


{ products.map (product => <component id={product})}
