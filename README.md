# Battle of Pokemon
Simple app in which user selects a pokemon from 5 possible choices and challenges another random pokemon to 💀.

<p align="center">
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXF5Y3Uxc2hiMzR6dzhmeGRsYnNueDM1MmN4YWhzNjY4YmN0MTF5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w5FSoU86sXRFm/giphy.gif"/>
</p>

## Dev Notes
Some things disrupts from the original challenge expectation, is important to read about the insights of the developer to understand why these tradeoffs:

1. **No "battle" endpoint**: from architectural point of view, its expensive to have a battle endpoint because both front and back has to perform a request and a subsequent query to the database every each time a pokemon does a move, so, instead of this, the developer implemented a lightweight, session based system in which all the required data is stored in browser's session storage so the user dont loose data over reloads, only persisting records after each battle reach an end. 
2. **"Start over" button**: to clean the session, and start over a battle with a new pokemon and opponent.
3. **"Attack" button**: to provide a more interactive experience in which the user can actually perform the attack to the opponent pokemon.
4. **"Records" button**: after each battle a record will be persisted, initially, there was no intention on visually check this data so the developer thought of the idea to do so.

# Instructions
1. Wait for the pokemons data to be loaded
2. Select a pokemon (you can only pick one per session)
3. Wait for your opponent
4. If you like your opponent, press 'start battle' otherwise refresh the page to keep your pokemon or press 'start over' to select a new one.
5. If your pokemon is fast enough, you'll start, press attack to deal damage and wait for your turn.
6. If theres a winner, you can start over and see your battle record in the record section.

## To build it
The recommended way to build and run the app is to create a Docker's image from it, to do so, follow this:
1. From the '__dirname': ```docker build -t bop-frontend .```
2. Create a container exposing the port and naming the resulting container: ```docker run -d --restart=always -p 3000:3000 bop-frontend```

If your want build and run the frontend and the backend as a whole app in one single command:

0. First download and update the submodule (the backend): ```git submodule update --init --recursive```
1.  ```docker compose up```

If you don't have docker installed, you can use the following:

For the backend: 
1. ```git submodule update --init --recursive```
2. navigate to ./bop-service/
3. run ```npm run entrypoint``` and the app will start on port **8080**.

For the frontend:
1. run ```npm install```
2. run ```npm start``` and the app will run on port 3000.

**NOTE**: both apps are set to run in their default ports, this cannot be changed.

## Must see functionallity ✔️
Developer highly recommend:
- To see the responsivenes of the app
- To to check the placehoolders and skeletons
- To check the session features, refresh the app when you select a pokemon or when the pokemons load (no 'loading' time)
- Check the messages in the battle messages bar
- See the interaction of the buttons
- See the records after each battle (you must refresh)

# Things the developer wanted to implement but couldn't due lack of (personal) time
1. Unit tests
2. "Types" and "User" features
3. Live reload records
4. 1 vs 5 pokemons
5. Animations and sounds.

Thanks for the opportunity, it was a journey 🫶.
