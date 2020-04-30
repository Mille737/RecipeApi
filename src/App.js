import React, {useEffect, useState} from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from './Recipe';

const App = () => {

    const APP_ID = "d5c1fcf4";
    const APP_KEY = "d85de14a3bb029fdbb560ee3859771ce";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('pasta');

    useEffect(() => {
       getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

    return (
        <div className="App">
            <div className="container">
                <form className="search-form" onSubmit={getSearch}>
                        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                        <button className="btn btn-success search-button" type="submit">Search</button>
                </form>
                <div className="row">
                    {recipes.map(recipe =>(
                        <div className="col-md-3 col-6">
                            <Recipe
                                key={recipe.recipe.label}
                                title={recipe.recipe.label}
                                servings={recipe.recipe.yield}
                                calories={recipe.recipe.calories}
                                ingredients={recipe.recipe.ingredients}
                                image={recipe.recipe.image}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default App;
