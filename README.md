# Project Moda

# Tech Stack 
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&amp;logoColor=black&amp;style=for-the-badge)

# Overview
**_Moda_** is a front-end focused, fully functional e-commerce application. Our project was constructed by a team of 4 engineers following the guidelines and specifications of a strict Business Requirement Document (BRD) for each component. 

# Table of Contents
* [Team](#team)
* [Requirements](#requirements)
* [Usage](#usage)
* [Product Components](#product-components)
  * [Product Detail Page](#product-detail-page)
  * [Related Products Section](#related-products-section)
  * [Questions And Answers](#questions-and-answers)
  * [Ratings And Reviews](#ratings-and-reviews)

# Team
| Name | Component | Github Handle |
|---|---|---|
| Seguy | Product Detail | [seguyy](https://github.com/seguyy) |
| Ben | Related Items | [beanjermin](https://github.com/beanjermin) |
| Jin | Questions and Answers | [yoko-8](https://github.com/yoko-8) |
| David | Ratings and Reviews | [davidguy3237](https://github.com/davidguy3237) |
<a href="https://github.com/Coffea-Exotica-Enticers/FEC/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Coffea-Exotica-Enticers/FEC" />
</a>

# Requirements
* Install [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

# Usage
* run `npm install` in terminal
  * Create a .env file with:
    * PORT directory
    * API url
    * Github API token

![Screenshot 2023-05-20 at 3 29 17 PM](https://github.com/Coffea-Exotica-Enticers/FEC/assets/114632224/75c9688a-9bad-4535-9df8-64513da450a3)
* run `npm run build` to build webpack
* run `npm run dev` to start up the server


# Product Components


## Product Detail Page
Product detail section allows users to scroll through images, select a specific style, size and quantity of a product to add to their cart. This module consists of four main components: 
* Image Gallery
* Product Information
* Style Selector
* Add to Cart 

![ProductDetail1](https://github.com/Coffea-Exotica-Enticers/FEC/assets/33603288/4391fb90-4004-4e0c-825a-42cbe3e4f316)
**Functionalities:**
* Image gallery with interactive thumbnails and an expanded view
* The gallery updates based on each new style and thumbnail selection
* Users can change to the next or previous image in the gallery
* Clicking on a main image opens up an expanded view
* Detailed zoom in with mouse movements and zoom out of an image
* Users can toggle between different styles
* Dynamic rendering of prices and styles
* Ability to select a quantity of a style and size to add to cart
* Sharing the product through social media accounts

![ProductDetail2](https://github.com/Coffea-Exotica-Enticers/FEC/assets/33603288/b361f857-42bd-4ebd-b310-c08d53916da8) ![ProductDetail3](https://github.com/Coffea-Exotica-Enticers/FEC/assets/33603288/d70939d3-a20b-4ed5-bb04-b3696373b8c8)

# Related Products Section
## The Related Products Section is composed of two main components:
 1. The Related Products List
 2. Your Outfit List

![Related Products Section](https://github.com/Coffea-Exotica-Enticers/FEC/assets/114632224/410f3553-4cc4-4e4d-a2ca-bb1a075d8ce9)

### The Related Products List:
 * Contains a list of product cards that is dynamically rendered
 * Utilizes a Carousel slider
  * The left and right buttons on the carousel are displayed conditionally
 * Each product card contains a 'comparison modal' button on the top right corner
  * Upon click, a pop-up modal is displayed comparing the features and values of the main product and the related product
 * If available, each product card displays a list of small thumbnail images (4 max) upon hover
  * The left and right arrow buttons are displayed conditionally 
 * Upon clicking the title of the product card, the main page is updated to the target product, and a new list of related products is rendered
### Your Outfit List:
 * Contains a list of products cards that is unique to each user
 * Also utilizes a Carousel slider
 * Clicking the 'Add an Oufit' button utilizes local storage to store and render user-specific product cards
  * Product cards that are added to this list persist upon page navigation, refresh, and exit.
 * Users can remove a product card by clicking the 'X' button on the top right corner

# Questions And Answers
Questions:
* Utilized React’s to create a real-time responsive Search Bar as text is typed into field
* More Questions functionality built with overflow to provide good UX with more control over visible page content
* Displays metadata of each question

Answers:
* Implemented conditional rendering to limit user’s reported/helpful response to each Q&A 
* More Answers functionality built to conditionally render additional customer responses to provide user control of page content
* Displays metadata of each answer

Modals & Posting Questions/Answers:
* Modal Forms to Add Your Answer or Ask Your Question to API
* Modal Forms dynamically respond to user input to reinforce valid vs. invalid actions

# Ratings And Reviews
![review](https://github.com/Coffea-Exotica-Enticers/FEC/assets/112038666/e7dc278a-fbac-48ca-a720-5d5c0a60c1cb)
- Display all of the reviews for a product
  - Sort reviews by relevance, newest, helpful
  - Search for specific reviews
  - Mark reviews as helpful
  - Report reviews to stop them from being displayed
  - Click 'More Reviews' to display additional reviews
- Display a breakdown of ratings by number of stars
  - Filter reviews by star ratings
- Display a breakdown of each characteristic for a product

![write-review](https://github.com/Coffea-Exotica-Enticers/FEC/assets/112038666/64f25d20-e0a7-4fec-838d-a07e4074121b)
- Click 'Add A Review' to display a modal to submit a review
  - Upload photos along with your review
