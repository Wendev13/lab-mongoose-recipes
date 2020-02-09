const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model'); // Import of the model Recipe from './models/Recipe.model.js'
const data = require('./data.js'); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipe-app-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


  const newRecipe = { title: 'Chocolate cake', level: 'Easy Peasy', ingredients: [ 'Flour', 'Sugar', 'Eggs', 'Chocolate', 'Butter' ], cuisine: true, dishType: 'Dessert', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.davidlebovitz.com%2Ffrench-chocolate-cake-recipe%2F&psig=AOvVaw2pYvO8FjaDEcg_zwHQf2MR&ust=1580400854020000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj46pGaqecCFQAAAAAdAAAAABAE', duration: 30, creator: 'Wendy' };


  Recipe.create(newRecipe, (error, user) => {
  if (error) {
    console.log('An error happened:', error);
    return;
  }
  console.log('The new recipe has been successfully added', user);
});

  Recipe.findByIdAndUpdate('5e31b0fe76c87b65aa65d132', { duration: 100 } )
  .then(console.log("Recipe updated"))
  .catch(console.log("Recipe has not been updated"));

  Recipe.deleteOne({ title: 'Carrot Cake' })
  .then(console.log("Recipe removed"))
  .catch(console.log("couldn't removed the recipe"));

  //mongoose.connection.close()