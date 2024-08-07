FROM node:18-alpine
WORKDIR /battle-of-pokemon/
COPY public/ /battle-of-pokemon/public
COPY src/ /battle-of-pokemon/src
COPY package.json /battle-of-pokemon/
RUN npm install
CMD ["npm", "start"]