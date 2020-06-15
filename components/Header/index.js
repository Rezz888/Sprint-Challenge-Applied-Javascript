// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function headerComponent(){
    // Element Creating
    const header = document.createElement('div');
    const span1 = document.createElement('span');
    const h1 = document.createElement('h1');
    const span2 = document.createElement('span');

    // Styling with class
    header.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    // Add content
    span1.textContent = "MARCH 28, 2019";
    h1.textContent = "Lambda Times";
    span2.textContent = "98°";

    // Appending
    header.appendChild(span1);
    header.appendChild(h1);
    header.appendChild(span2);

    return header;

}

const headerContainer = document.querySelector('div.header-container');

headerContainer.appendChild(headerComponent());




















// const headerContainer = document.querySelector('.header-container');

// function Header() {
//     // header div
//     const headerComponent = document.createElement('div');
//     headerComponent.classList.add('header');

//     // first span
//     const dateInfo = document.createElement('span');
//     dateInfo.classList.add('date');
//     dateInfo.textContent = ('MARCH 28, 2019');

//     // h1 text
//     const headerText = document.createElement('h1');
//     headerText.textContent = ('Lambda Times');

//     // second span
//     const tempInfo = document.createElement('span');
//     tempInfo.classList.add('temp');
//     tempInfo.textContent = '98°';

//     // nested element inside div
//     headerComponent.appendChild(dateInfo);
//     headerComponent.appendChild(headerText);
//     headerComponent.appendChild(tempInfo);
    
//     return headerComponent;

// }

// headerContainer.appendChild(Header());