FROM node:20-alpine
WORKDIR /app
COPY index.js .
COPY package.json .
RUN npm install
EXPOSE 5000
CMD ["node", "index.js"]
