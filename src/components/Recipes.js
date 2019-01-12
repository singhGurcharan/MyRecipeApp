import React ,{Component} from 'react'
import styles from '../App.css'
import {Link} from 'react-router-dom'


const Recipes =props=>(
   
    <div className="container">
    <div className="row">
    { props.recipes!==undefined && props.recipes.map( recipe =>{
         return(
            <div className="col-md-4" key={recipe.title} style={{marginBottom:"2rem"}} >
                <div className="recipebox" >
                <img src={recipe.image_url} alt={recipe.title} className="recipebox_img" />
                <div className="imgtitle" style={{textEmphasisStyle:"bold"}}>
                    {recipe.title.length<20 ?`${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                </div>
                
                <button>
                    <Link to={{ 
                        pathname: `/recipe/${recipe.recipe_id}`,
                        state: { recipe: recipe}
                        }}>View Recipe
                    </Link>
                   

                </button>
                </div>
            </div>
    
        );

    })}
    
    </div>
                
    </div>


);

  

    
    

 

export default Recipes;