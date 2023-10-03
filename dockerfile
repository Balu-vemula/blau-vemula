
FROM cypress/base:18.14.1
# FROM cypress/included:12.8.1
# # chrome dependencies
# RUN apt-get update
# RUN apt-get install -y fonts-liberation libappindicator3-1 xdg-utils

# # install Chrome browser
# ENV CHROME_VERSION 88.0.4324.96
# RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb" && \
#   dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ; \
#   apt-get install -f -y && \
#   rm -f /usr/src/google-chrome-stable_current_amd64.deb

# # Install Python
# RUN apt-get update && \
#     apt-get install -y python3-pip && \
#     ln -s /usr/bin/python3 /usr/bin/python 

# RUN google-chrome --version

WORKDIR /app


COPY package.json .
RUN ls -la /app/
# cypress/support/filter.ts

RUN npm install
RUN npx cypress install
RUN npm ci
RUN npm --version
RUN npx cypress verify 
# RUN npx cypress verify
# RUN npx cypress verify
COPY . .
COPY cypress cypress
COPY cypress/support/filter.ts .
COPY tsconfig.json .
COPY ci-Scripts/cypress.sh .
RUN ls -la /app/

RUN chmod a+x ./cypress.sh
CMD [ "./cypress.sh" ]

# COPY cypress/cypress.config.js .


# # ENV key=value
# # RUN npm install cypress

# COPY . .

# CMD ["npx","cypress","run"]

# Use an official Node.js runtime as a parent image
# FROM cypress/base:18.14.1

# # Set the working directory in the container
# WORKDIR /app

# RUN mkdir -p /root/.cache/Cypress

# # Install Cypress and its dependencies
# RUN npm install cypress --save-dev

# # ENV PATH="/app/node_modules/.bin:$PATH"

# # Copy the rest of your application code to the container
# COPY . .

# # CMD will allow you to specify the Cypress command and options when running the container
# CMD ["npx", "cypress", "run"]
