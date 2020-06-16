// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const CardContainer = document.querySelector('div.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then((response) => {
    //  console.log(response.data.articles)
     const arrayValues = Object.values(response.data.articles);  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
    //  console.log(arrayValues)
     arrayValues.forEach((semiFinal)=> {
      //  console.log(semiFinal)
       semiFinal.forEach((final)=>{
        //  console.log(final)
        CardContainer.appendChild(cardComponent(final))
       })
        

        
     })
})

.catch((err) => {
   console.log(err)
})

function cardComponent(obj){
  // Creating element
  const cardComponent = document.createElement('div');
  const headLine = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  // Adding class to style
  cardComponent.classList.add('card');
  headLine.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // Programmatically adding content
  headLine.textContent = obj.headline;
  img.src = obj.authorPhoto;
  span.textContent = obj.authorName;

  // Appending
  cardComponent.appendChild(headLine);
  cardComponent.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(span);
  imgContainer.appendChild(img);

  return cardComponent;
  
}