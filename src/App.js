import React, { Component } from 'react';
import './App.css';
import Beers from './beers'
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
  state ={
    beers: [],
    likedBeers: [],
  }

  componentDidMount(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(beers=> this.setState({beers: beers})
    );
  }

  likeButton = (index)=>{
      const likedBeer = this.state.beers[index];
      let currLikedBeers = this.state.likedBeers;
      currLikedBeers = [...currLikedBeers, likedBeer];
      this.setState({likedBeers: currLikedBeers});
  }

  unlikeButton = (index) =>{
    
    let currLikedBeers = this.state.likedBeers;
    currLikedBeers.splice(index, 1);
    this.setState({likedBeers: currLikedBeers});
  }

  render(){
    return (
      <div>
        <h1>Favorite Beers</h1>
        <div className="App">
          {this.state.likedBeers.map((beer, index) =>(
            <Beers
              name = {beer.name}
              abv = {beer.abv}
              tagline = {beer.tagline}
              image = {beer.image_url}
              index = {index}
              key = {index}
              likeButton = {this.unlikeButton}
              buttonText = "unlike"
            />
          ))}
        </div>
        <h1>Beers</h1>
        <div className="App">
          {this.state.beers.map((beer, index) =>(
            <Beers
              name = {beer.name}
              abv = {beer.abv}
              tagline = {beer.tagline}
              image = {beer.image_url}
              index = {index}
              key = {index}
              likeButton = {this.likeButton}
              buttonText = "like"
            />
          ))}
        </div>
        
      </div>
    );
  }
}

export default App;
