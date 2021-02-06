import React from 'react'
import Loader from '../Loader'

/*CHECK IF THERE'S A JWT TOKEN OR SESSION ON THE BROWSER => USER FOR MAIN PAGES
USER withAuthCompulsary for the ones that require the session to run, example dashboard and so on 
*/

const withAuth = (Component1, Component2) => {
    return class extends React.Component{
        state = {
            user: null
        }
        componentWillMount(){
            setTimeout(()=>{
                this.setState({ //Request the user
                    user: false
                })
            }, 100)     
        }
        render(){

            if(this.state.user)
                return <Component1 user={this.state.user}/>
            else
                return <Component2  />
        }
    }
}

export default withAuth

