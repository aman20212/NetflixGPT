# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing
- Login Form
- SignUp Form
- Form Validations
- useRef Hook
- Firebase Setup
- Deploying our App to Production
- Create SignUp User Account
- Implement SignIn User API
- Created User Redux Store with User Slice
- Implemented SignOut
- Updated Profile
- Fetch Movies from TMDB for Browse Page

- Bug Fix of Route Authentication /browse and /login(If the user is not logged in redirect to login page and vice versa)
- If user is logged in redirect to /browse page.
- Unsubscribed to the onAuthStateChanged Callback.
- Register for TMDB API, Create New API. Get Access Token, Go to Documentation and get data from TMDB now playing list.
- Get Data from TMDB API.
- Created custom hook for Now playing movies
- Updated Store with movies Data/ Create a movie Slice
- Planning for Main and Secondary Container
- Custom Hook for Trailer Video
- Update Store with Trailer Video data
- Embedded the youtube video and make it autoplay and mute
  -Tailwind Classes to make MainContainer look awesome
- Build Secondary Component
- Build MovieList Component
- Build MovieCard Component
- Added TMDB Image CDN URL
- Included more custom hook for Popular Movies

# Features

- Browse Page (after authentication)
  - Header
  - Main Movie
    - Trailer in the background
    - Title & Description
    - Movie Suggestions
      - Movie List \* N
- Login, SignUp Page

  - Signin/Signup Form
  - redirect to browse page

- NetflixGPT
  - Search Bar
  - Movie Suggestions

# CSS

- How does position absolute and relative work together.
- What is linear gradient?

# Tailwind CSS

Wrapper for Input and Label:

    Each input field is wrapped in a div with the class relative to position the label absolutely within the div.
    The label is positioned absolutely with the classes absolute, left-4, top-1/2, and transform -translate-y-1/2.

Custom CSS Classes:

transition-all: Ensures the transition is smooth.
peer: This class is used to target the input element.
peer-placeholder-shown: A Tailwind class that targets the input when the placeholder is shown.
peer-focus: A Tailwind class that targets the input when it is focused.
Label Transition:

    The label moves up and shrinks when the input is focused (peer-focus:-top-4 and peer-focus:text-sm).
    The label returns to its original position when the placeholder is shown (peer-placeholder-shown:top-1/2).

---------------------------------------------------------------------------------------------------------------------->
Wrapper for Input and Label:

    Each input field is wrapped in a div with the class relative to position the label absolutely within the div.
    The label is positioned absolutely with the classes absolute, left-4, top-1/2, and transform -translate-y-1/2.

Label Transition:

    The label moves up and shrinks when the input is focused (peer-focus:top-2 and peer-focus:text-xs).
    The label returns to its original position when the placeholder is shown (peer-placeholder-shown:top-1/2 and peer-placeholder-shown:text-lg).
