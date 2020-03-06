# Responsive_Portfolio
Responsive Portfolio


My main goal, at this point, was to stick as closely to the homework photo's as I could and to worry about personalisation once I had a better grasp on the bigger picture.

The below covers some of the major styling used during creation.

## Theme
- The main theme was taken from Bootstrap for simplicity using the "info" theme (bg-info, text-info, etc)

## Bootstrap navigation bar
- flex-sm-row was used to make sure that the navigation showed as a row until the screen was small.
- flex-row was used in the navigation list to stop it from becoming a "hamburger button".
- A "Brand" was added containing my name and styled in line with the theme.

## Bootstrap Grid
- A 9/3 column split has been used for medium screens + and a full column centred used on smaller screens.
- sub rows within these columns were used to break up different types of entry or to create better styling.

## Portfolio Links
- responsive images using "img-fluid" 
- 2 images disappear on smaller screens and the list becomes centred.

## Contact
- relevant inputs were added to forms with some sample text.
- Button was chnage dto suit theme.

## Sticky Footer
- "fixed-bottom" was used to create a sticky footer and a bottom margin was added to the main content to ensure the foter doesn't cover it.
- footer was styled in line with the theme.

## Media Queris
- Media queries were used to solve minor formatting issues that weren't already dealt with through responsive bootstrap classes

## Issues
- It's really not as smooth as I'd like.
- 768px and above is md in Bootstrap so, while I have attempted to use bootstraps sm/md choices they don't excatly fit with the photo's. The col-md means that the columns don't change until 767px. So 767px will show what the photo's want for 768px. Make sense?