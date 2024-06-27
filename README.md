# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Login Form
- SignUp Form

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
