import React,{Component} from'react'
import {Link} from 'react-router-dom'
//https://www.food2fork.com/api/get?key=YOUR_API_KEY&rId=35382
//const API_KEY="4b7f6942ce6e81eb3a5fb3a2c08d3d8c"
class Recipe extends Component{
    state={
        activerecipe:""
    }
    componentWillMount=()=>{
        localStorage.setItem("recipe",JSON.stringify(this.props.location.state.recipe));


    }
    componentDidMount=async ()=> {
        console.log(this.props.location);
        
        //const data=await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&rId=${this.props.location.state.recipe_id}`).then(response=>response.json());
        this.setState({activerecipe:this.props.location.state.recipe});
        console.log(this.state.activerecipe);
    }    
 
    render(){
        let {activerecipe} =this.state;
        return(
            
            <div className="Container">
            { this.state.activeRecipe !=="" &&
                <div className="activerecipe">
                    <img  src={activerecipe.image_url} alt="hello" className="activerecipe_img" />
                    <h2 className="activerecipe_title">
                        {activerecipe.title}
                    </h2>
                    <div className="publisher">PUBLISHER :{activerecipe.publisher}</div>
                    <p>
                        <span>WEBSITE :</span>
                        <a href={activerecipe.f2f_url}>Recipe Details</a>

                    </p>
                    
                    <button>
                        <Link to="/">
                          Home Page
                        </Link>
                    </button>

                </div>
            
            
            }
            </div>
            

        );

    }
    
}
export default Recipe;