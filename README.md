# Bryan Stark Portfolio

## URL: https://heartfelt-kheer-509772.netlify.app/

### Wireframe Layout
Used [Figma](Figma.com) to create a simple wireframe layout for each page, both desktop and mobile. This allowed me to create something to reference back to while laying out my HTML/CSS.

#### Mobile Layouts
![Figma Mobile Layouts](https://imgur.com/a/MJ6R3A3)

#### Desktop Layouts
![Figma Desktop Layouts](https://imgur.com/a/uhVXxH6)

### Color Scheme
Generated color schemes on [Coolors.co](https://coolors.co/07020d-5db7de-f1e9db-a39b8b-716a5c). Decided on a palette of:
- Black = #07020D
- Aero = #5DB7DE
- Alabaster = #F1E9DB
- Khaki = #A39B8B
- Dim Grey = #716A5C

![Initial Color Scheme](https://imgur.com/a/wJ1oCf8)

### Choosing fonts
After some research I found a font, Open Sans, that was recommended for both body and header use. It's the same font Apple happens to use across their sites, which provides for a very simple and clean look.
[Google Fonts](https://fonts.google.com/specimen/Open+Sans#styles)
[Best Folios](https://bestfolios.medium.com/10-great-fonts-for-portfolio-design-2debfe2f1bb9)

### Mobile/Hamburger Menu
Grabbed SVG from W3, tweaked the size. Had some trouble when triggering the menu to open - it pushed all elements above it in the DOM upwards. Solved this issue by moving the entire container element for the menu items outside of the header element that contains the title and menu button.


### Color Scheme Revisited
At the beginning of Day 2, I realized I didn't love the color scheme so I found another and applied it to the elements I had already layed out.
[Coolors.co](https://coolors.co/2f6690-3a7ca5-d9dcd6-16425b-81c3d7)
- Lapis Lazuli = #2F6690
- Cerulean = #3A7CA5
- Platinum = #D9DCD6
- Indigo Dye = #16425B
- Sky Blue = #81C3D7
![Final Color Scheme](https://imgur.com/a/QfLzNRB)

### Carousel
I utilized the walkthrough from the class repo to create a carousel that matched my portfolio's theme - changing colors, shadows, and hover effects. I also included the changing of the text below the carousel 

### Header Shrinking Issue
Encountered an issue with the header after introducing the carousel to the Projects page - header shrunk in width. Applied min-width and max-width properties (201px each) to the header in order to rectify.

### Embedding PDF Viewer
Used [Geeks for Geeks](https://www.geeksforgeeks.org/how-to-embed-pdf-file-using-html/) to figure out how to embed a PDF directly into the HTML - Using an <iframe> element.
#### Issue
- Encountered an issue when refreshing page with <iframe> element after resizing the screen to mobile,element appears empty
- Issue stems from responsive previews in Dev Tools. Issue does not occur when manually resizing the browser window

### Placeholder Images
Used [PlaceHolderImage.dev](https://placeholderimage.dev/) to create placeholder images for the project carousel. I changed the colors and inner text of the images to better exemplify the carousels effect.
