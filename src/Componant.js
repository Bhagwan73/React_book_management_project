import Intro from './componant2'
import Form from './Textform'
import About from './Aboutpage'

import {BrowserRouter as Router ,Route,Link, Routes} from 'react-router-dom'

const App=()=>{
    return(
        <div>
        <Intro name="its props"/>
        <h3 >hello everyone</h3>
        <Router>
        <Link to="About">About</Link> 
        <Link to="form">Form</Link> 
<Routes>
            <Route path="About"element={<About />}/> 
            <Route path="form"element={<Form />}/>
            </Routes>
        </Router>
        </div>
    )
}
export default App

