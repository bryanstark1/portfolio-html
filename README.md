# portfolio

1. Used https://coolors.co/07020d-5db7de-f1e9db-a39b8b-716a5c to help generate a color scheme for the website. Decided on a palette of:
Black = #07020D
Aero = #5DB7DE
Alabaster = #F1E9DB
Khaki = #A39B8B
Dim Grey = #716A5C

2. Choosing fonts: After some research I found a font, Open Sans, that was recommended for both body and header use. It's the same font Apple happens to use across their sites, which provides a very simple and clean look.
https://fonts.google.com/specimen/Open+Sans#styles
https://bestfolios.medium.com/10-great-fonts-for-portfolio-design-2debfe2f1bb9

3. Mobile/hamburger menu: Grabbed SVG from W3, tweaked the size. Had some trouble when triggering the menu to open - it pushed all elements above it in the DOM upwards. Solved this issue by moving the entire container element for the menu items outside of the header element that contains the title and menu button.
