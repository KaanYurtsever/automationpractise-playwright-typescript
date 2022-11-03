FROM mcr.microsoft.com/playwright:v1.26.1-focal

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

RUN npx playwright install

COPY . .

#Adding a non root User named "kaan"
RUN useradd -m kaan

#Giving Read/Write Access to non-root user to main project folder  "/app"
RUN chown -R kaan /app

#Switching from root user to non-root user(kaan)
USER kaan

CMD ["npx","cross-env","ENV=qa","npm","run","test:serial"]