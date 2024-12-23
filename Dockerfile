FROM cypress/base:20.10.0

WORKDIR /app


COPY . .

RUN npm ci
RUN npx cypress verify 

COPY sendReportToMail.js .
COPY sendReportToTeam.js .

RUN chmod a+x ./ci-script/cypress.sh
CMD [ "./ci-script/cypress.sh" ]
