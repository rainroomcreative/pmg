FROM node:12.18.3
    # make the starting directory the current one
     WORKDIR /
    # COPY Package.json 
	COPY package*.json / 
     # install the dependencines within the app
      RUN npm install
     
     # Copy Source Code 
  		COPY . .
      RUN npm run build

    # Have docker container use port 3000, that is the port that the node app is set to
     EXPOSE 8080
   # Start the node app 
   CMD ["node", "server.js"]
