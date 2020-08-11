FROM node:12

# Create app directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Move to our working directory
WORKDIR /home/node/app

# Copy package.json and package.lock
COPY package*.json ./

# Change root user to node user
USER node

# Execute command
RUN npm install

# Copy al the aplication code
COPY --chown=node:node . .

# Expose ports
EXPOSE 8080

# Run the application
CMD [ "node", "app.js" ]
