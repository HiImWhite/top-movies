FROM node

WORKDIR /app

COPY package.json .

RUN npm install

RUN apt-get update && apt-get install dnsutils -y

COPY . .

COPY movies.csv ./

EXPOSE 8000

CMD ["node", "index.js"]