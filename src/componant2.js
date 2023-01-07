
// import {propTypes} from 'prop-types'



const Intro=(props)=>{
    return(
        <div>
        <h1>hello i am intro</h1>
        
        <h2 > {props.name} </h2>
        {/* conditional rendering */}
        {/* {typeof Name=="string" ?<h2 > {Name} </h2> :<h2>its not a string</h2>} */}
        </div>
    )
}
export default Intro

//validation for props
// Intro.propTypes={
//     name:propTypes.object.isRequired //its type should be string & its required
// }
//  Intro.defaultProps={
//     name:{Name:"bhagwna--"}
//  }
