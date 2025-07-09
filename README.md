# 🌍 World Countries

![](/project-recordings/home%20desktop%20dark.png)

##
**World Countries** is an interactive and fully responsive application built with **Next.js App Router** that allows users to explore detailed information about every country in the world. It features a dynamic search, region filtering, country detail views, dark mode, and is fully mobile-compatible — all developed based on a precise design mockup.


**You can see the deployed app here:** [World Countries](https://findcountrie.netlify.app/)

## Setup

To run this project, after cloning this repository, install it locally using npm:

```
$ cd countries
$ npm install
$ npm run dev
```

## Features

- **Search Functionality:** Type to filter countries by name.
- **Region Filter:** Dropdown to filter countries by continent.
- **Detail View:** Click a country’s flag to see extended information, including:
- Population, region, subregion, native name, languages, currencies, capital, and bordering countries (by name).
- **Dark Mode:** Toggle between light and dark themes using Font Awesome icons.
- **Responsive Design:** Layout adapts perfectly to mobile, tablet, and desktop views.
- **Routing:** Uses Next.js dynamic routes ([country]) to handle detail pages.
- **Testing:** Includes tests for key components using Jest and React Testing Library.
- **API Integration:** All data fetched from [REST Countries API](https://restcountries.com/).
- **Testing:** Unit tests added throughout the project to ensure code reliability and maintainability.
- **Deployment:** Hosted on Netlify using official @netlify/plugin-nextjs.
- **Commit History:** [Detailed commit history](https://github.com/martincorredor/countries/commits/main/) documenting decisions and changes.

## Project Architecture
```
/app
│
├── components
│   ├── CountryCard/
│   │   ├── CountryCard.jsx
│   │   ├── CountryCard.module.css
│   │   └── CountryCard.test.jsx
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   └── Header.test.jsx
│   ├── SearchFilter/
│   │   ├── SearchFilter.jsx
│   │   ├── SearchFilter.module.css
│   │   └── SearchFilter.test.jsx
│   └── ThemeToggle/
│       ├── ThemeToggle.jsx
│       ├── ThemeToggle.module.css
│       └── ThemeToggle.test.jsx
│
├── [country]/page.jsx      # Dynamic route for country details
├── page.jsx                # Main page with list and filters
├── page.module.css         # Styles for the main layout
└── netlify.toml            # Netlify build configuration

```
All components are encapsulated in their own folder with:
- jsx file
- module.css styling
- test.jsx for unit tests

## Unit testing
Implemented using Jest and React Testing Library.
```
npm run test
```

## Technologies used

- **Framework:** Next.js
- **Programming Language:** JavaScript
- **Styling:** CSS
- **API request:** Axios
- **Hosting:** [Netlify](https://www.netlify.com/).
- **APIs:** [REST Countries API](https://restcountries.com/).
- **Testing:** [Jest](https://jestjs.io/docs/getting-started) for unit testing.

## Future Work

- Add loading skeletons while countries are fetched.
- Add pagination or infinite scroll for performance on large lists.
- Add accessibility attributes for screen reader support.
- Show full country detail when clicking a border country.

## App

| ![](/project-recordings/home%20desktop%20dark.png) | ![](/project-recordings/details%20desktop%20dark.png) |
| :------------------------------------------: | :--------------------------------------: |
| ![](/project-recordings/home%20desktop%20light.png) |   ![](/project-recordings/details%20desktop%20light.png)    |
| ![](/project-recordings/home%20mobile.png)  |   ![](/project-recordings/details%20modile.png)   |

## Author

**Martin Corredor** - [martincorredor](https://github.com/martincorredor)
