# Furnify!

#### Description:

Introducing a game-changing 3D furniture experience website. Our platform redefines online shopping, offering immersive visualization and interactive features for unparalleled user engagement and satisfaction.

##### Track - Web Development

##### Contributors - Chaitya Shah, Bhavya Jain, Krish Patel

## Problem Statement

Developing an Interactive 3D Furniture Visualization Platform to Address the Limitations of Traditional Online Shopping Experiences.

## Goal

To create a user-friendly website that revolutionizes the online furniture shopping experience by offering immersive 3D visualization, enabling users to virtually explore furniture items from different angles, sizes, and configurations, ultimately enhancing user engagement and satisfaction.

## Features

- Interactive 3D Models: Allow users to rotate, zoom, and interact with
  3D models of furniture items to examine details from all angles.
- Design Your Room: The most standout feature of the website that allows users to place and edit furniture enabling customization of their room.
- Customization Options: Enable users to customize furniture colors to match their preferences.
- Category Bar and Search Functionality to explore all products.
- Cross-Platform Compatibility: Ensure compatibility across various devices and browsers, including desktops, laptops, tablets, and smartphones.
- Realtime Review System to enable users to share their experiences with the furniture.
- Fully Functioning Cart System allowing users to add/remove products and increment/decrement their quantities
- User Accounts and Profiles: Provide users with the option to create accounts, access cart functionality and our hero feature "Design Your Room"
- Seamless Checkout Process: Streamline the purchasing journey with a user-friendly checkout process that integrates secure payment options and order tracking.
- Interative Home page with animations, carousel and a bestseller - interactive grid
- A dedicated about us page highlighting journey of the brand.

## Tech Stack

The tech stack used is Next.Js 14 with Sanity as the content management system, Clerk for authentication and Stripe for payment integration.

## How To Run?

- Clone the repository
- Change directory to the folder
- Run `npm install`
- For the project to run, you will need to configure sanity and stripe and use the following environment variables in a .env file:
  ` NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
 CLERK_SECRET_KEY=
 NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_USER_ADDER_TOKEN=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
STRIPE_SECRET=`
- Then run the development server: `npm run dev`
- open `http://localhost:3000/`

## Deployment

https://furnify-drab.vercel.app/

## Applications of our idea

- E-commerce Integration: Partnering with furniture retailers to integrate your 3D platform into their websites, enhancing their online shopping experience.
- Interior Design Services: Offering your platform as a tool for interior designers to visualize furniture placements and designs for their clients.
- Real Estate Staging: Providing real estate agencies with the ability
  to virtually stage properties with furniture, helping potential
  buyers visualize living spaces.
- Education and Training: Developing educational resources or training
  programs for furniture design students or professionals to learn
  about 3D visualization techniques and user experience design.

## Further Improvements

- Extending the existing 3D ecosystem to an AR/VR environment
- Implementing a Product Rating system
- Use of animations
- Adding acknowlegement of user's selected colors while checking out

## Demo Video

https://youtu.be/KjJ8qSv-ucE

#### Note:

Please sign-in and explore the website to ensure seamless experience of the website.

Pages sometimes may take time to load. Please be patient 🙏
(try opening link in another tab)

To simulate checkout system, please use the following credentials:
Card No. : 4000003560000008
CVV: 123
Card Expiry: 12/34

and use any email and name.

#### by team Hehe boi ✌
