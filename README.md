# storyAR

## View our Live Demo on Youtube
[![storyAR 2021 Pitch/Demo](https://i.imgur.com/qukoYFl.jpg)](https://youtu.be/2Y-ytikZLAs)

## Try for yourself
- Web app link: [https://story-ar.web.app/](https://story-ar.web.app/)
- Mobile app link: [https://storyar-server.herokuapp.com/](https://storyar-server.herokuapp.com/)
- Devpost link: [https://devpost.com/software/storyar](https://devpost.com/software/storyar)

## Inspiration
COVID-19 has forced the world into a new normal. 1.2 billion children in 186 countries are affected by school closures due to the pandemic. Children enrolled in online learning aren’t able to experience the in-person fun and games with their friends as well as engage with their teachers like before in a normal setting. My personal favorite memory as a kid was always storytime and volunteering to hold the puppets. That isn’t really possible with the online learning environment though. How can we provide young children with that engaging in-class experience again? 

![Online Learning](https://assets.weforum.org/editor/responsive_large_webp_mluTbkBfO0wNUHBPXthV9r_MCTQmtBbK7Xj4xrPFZiQ.webp)

## What it does
storyAR provides an interactive learning experience because studies would become a form of storytelling and students can interact with AR models on the topic being taught by simply clicking a link. It is a web app that allows a presenter to control 3D models for their audience in real-time. Teachers are prompted to create a new room to invite students. Every time the "create room" button is clicked, the server will generate a new login code to make a new room. Using codes and a link instead of downloading an app will help save time from troubleshooting, reduce privacy concerns, and be more accessible to many students. Now the presenter can paste the code into their virtual classroom with the children and ask them to navigate to use that code with the link. The presenter can then use these buttons to navigate through the images they want to show. The AR images will then appear for students and be controlled by the instructor. We also used OpenAI to allow teachers to input higher-level learning materials (text format) into our text box and provide them with lower-level phrases that can be easily understood by 2nd graders. That feature will allow teachers to expand on the different topics they may want to discuss as it may be harder for a person to "lower" the level of language down to suit a particular audience.

## How we built it
Our frontend is built with React, next.js, and uses Chakra UI for accessibility. Our backend uses Firebase and Heroku to host, socket.io to create different rooms, and AR.js to create the AR app. We get our 3D models from Sketchfab.

![TechStack](https://i.postimg.cc/mk0kV1Mn/story-ar-diagram2.png)

## Challenges we ran into
- Learning how to use AR because no one had previous experience
- Implementing the carousel component because of dependency issues
- Implementing sockets to create different rooms 

## Accomplishments that we're proud of
- Having a fully functional project!! (integration of backend and frontend was so difficult)
- Learning how to use augmented reality WOW
- Making new friends :))

## What we learned
AR.js is amazing for React AR projects! We had so much fun building the AR app and learned a lot about 3D models and how to use sockets for creating our different rooms.

## What's next for storyAR
In the future, we would like to integrate the app with a 3d model library so teachers can choose from more options for what to display. We would also like to use more animated models and add in sound effects to make the story-telling experience even more exciting! This product could also be expanded to be more focused on science topics so medical students can utilize it to visualize human anatomy and inspect various samples.

## Ethics
Our team believes it is extremely important for our future generation to have a solid foundation for learning at a young age. It is unfair to children living through this pandemic to be deprived of an actual learning experience. With around 1.3 billion students being affected, the lack of education could really mean a very different future for our younger generation. A greater lack of education can be seen with lower-income households as their access to specific technologies are extremely limited.

Many members of our team have younger siblings still in high-school and know of children in elementary school who are no longer engaged with classes. We have witnessed just how NOT engaging classes can be ourselves firsthand as college students. How can we expect an 8 year-old to sit for an hour, focused in front of a computer when we can barely do that ourselves?

Our main goal of this product is to reduce digital inequality by providing all children and teachers with a super accessible web app platform to increase engagement for any class lesson. storyAR will really allow students and teachers of all income brackets to have the same learning and engagement experience.

Teachers will always be the ones in charge of opening these rooms, however students can also leverage this platform and play around with it with their peers as well. We understand that most teachers already have a learning platform and would not be able to convert to a different platform just for this specific functionality so we introduced storyAR as a webapp with different room codes.

The web app will help to decrease the digital inequality because it works on all types of devices. As long as a user has a device which connects to the browser, they are good to go. No need for any fancy technology or external party downloads. Our team has created this product as a passion project so it would be no cost to users, however even if we were to charge for usage, it would be extremely low cost and still accessible by anyone because high costs are cut by not hosting our own video platform and leverage already existing technologies like Microsoft Teams and Zoom for the classroom. The web app also allows for complete anonymity of students and does not store any data of users apart from what the teachers want their lesson plan to be for the day.

During the design process of our app, we paid extra attention to accessibility features by using Chakra UI which strictly follows WAI-ARIA standards for all components. We also paid attention to choose fonts where the mirrored words would not look exactly the same to decrease changes of our audience being confused between similar words. At first we wanted our fonts to be more special to be memorable but decided against it to increase accessibility by all parties. 

We recognize that there are still shortcomings to our product for decreasing digital inequality.
- Our app does require an internet connection and for students to have access to a device with a web browser and camera.
- Additionally, openAI is still a beta product and what it condenses learning materials to may not be completely representative or inclusive of all minority groups or events.
- The 3D models currently available are also not completely representative or inclusive of all minority groups or events.

We hope that storyAR will be used to teach our future generation all the things they should be learning (while being as inclusive as possible) and help increase access for them to having a fun time throughout the learning process!
