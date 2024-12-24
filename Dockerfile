FROM cypress/base:20.10.0

WORKDIR /app


COPY . .

RUN npm ci
RUN npx cypress verify 


RUN chmod a+x ./ci-Scripts/cypress.sh
CMD [ "./ci-Scripts/cypress.sh" ]
