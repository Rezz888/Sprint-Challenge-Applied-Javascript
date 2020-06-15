// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


const topicList = document.querySelector('div.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  
   .then((response) =>{
        console.log(response.data.topics)

        response.data.topics.forEach((topic) => {
            console.log(topic)

            tabComponent(topic);
        })
   })

   .catch((err) => {

   })


   function tabComponent(e){
//   Create Element
   const tab = document.createElement('div');

//   Adding class for styling
   tab.classList.add('tab');

//   Adding content/text
   tab.textContent = e;

//    Appending
   topicList.appendChild(tab)
   
   return tab;
   }
   





























// const topicComponent = document.querySelector('.topics');


// axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
// .then( (response) => {
//     response.data.topics.forEach(topItem => {
//         tabComponent(topItem)
//     })
   

// })
// .catch((err) => {
//     console.log('Error, please try again later.')
// })



// function tabComponent(arr) {

//         const anItem = document.createElement('div');
//         anItem.classList.add('tab');
//         anItem.textContent = arr

//         topicComponent.appendChild(anItem)

//         return anItem;

// }