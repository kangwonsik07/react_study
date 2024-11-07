import { Provider } from 'react-redux'
// import Counter from './NonToolkit/Counter'
// import store from './NonToolkit/store'
import Counter from './UseToolkit/Counter'
import storeUseToolkit from './UseToolkit/store'
import User from './UseToolkit/User'

function App() {
   //    return (
   //       <Provider store={store}>
   //          <div>
   //             <Counter />
   //          </div>
   //       </Provider>
   //    )
   // }
   return (
      <Provider store={storeUseToolkit}>
         <Counter />
         <User />
      </Provider>
   )
}

export default App
