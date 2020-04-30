import React, {useEffect} from 'react';
import Card from "react-bootstrap/Card";
import './recipe.css';

const Recipe = ({title, calories, image, ingredients, servings}) => {
    return(
        <Card className="recipe">
                <Card.Img src={image} alt="" />
                <Card.Body className="recipe-body">
                    <Card.Title className="recipe-title">{title}</Card.Title>
                    <Card.Subtitle className="recipe-subtitle">Servings: {servings}</Card.Subtitle>
                    <Card.Subtitle className="recipe-subtitle">Calories: {calories.toFixed(2)}</Card.Subtitle>
                    <Card.Text>
                        <ul className="recipe-ingredients">
                            {ingredients.map(ingredient => (
                                <li>{ingredient.text}</li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
        </Card>
    );
};

export default Recipe;