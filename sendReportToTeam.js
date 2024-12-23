const axios = require('axios');
const fs = require('fs');

const teamsWebhook = 'https://washmetrix.webhook.office.com/webhookb2/a7bd2c2d-844a-4ed2-bb7f-8fd41d4babfb@d0aa2d50-47bd-4cbd-815d-85cbabce8f5e/IncomingWebhook/8b46dceffb424c40bb247987015fc572/52eecd68-3f58-4ac5-8dbc-81cc2fedcfa5';

const sendReportToTeams = async () => {
    try {
        const mochawesomeReport = JSON.parse(fs.readFileSync('cypress/reports/merged-report.json', 'utf-8'));

        const suites = mochawesomeReport.stats.suites;
        const totalTests = mochawesomeReport.stats.tests;
        const passes = mochawesomeReport.stats.passes;
        const testSkipped = mochawesomeReport.stats.skipped;
        const failures = mochawesomeReport.stats.failures;
        const passPercentage = mochawesomeReport.stats.passPercent.toFixed(2);
        const totalDuration = mochawesomeReport.stats.duration;

        const environment = process.env.CYPRESS_ENV || 'default'; // Adjust based on how you set the environment in Cypress
        const userName = process.env.USER_NAME
        const buildNumber = process.env.BUILD_NUMBER
        const runID = process.env.RUN_NUMBER

        const response = await axios.post(teamsWebhook, {
            "@type": "MessageCard",
            "@context": "http://schema.org/extensions",
            "themeColor": "0076D7",
            "summary": "Cypress Test Summary Report",
            "sections": [
                {
                    "activityTitle": "Cypress Test Run Summary",
                    "activitySubtitle": `Results from the latest Cypress test run in ${environment} environment with with run ID ${runID}, build number ${buildNumber} and with userID ${userName}`,
                    "facts": [
                        { "name": "Suites", "value": suites },
                        { "name": "Total Tests", "value": totalTests },
                        { "name": "Passes", "value": passes },
                        { "name": "Failures", "value": failures },
                        { "name": "Skipped","value": testSkipped },
                        { "name": "Pass Percentage", "value": `${passPercentage}%` },
                        { "name": "Total Duration", "value": `${totalDuration / 1000} seconds` }
                    ]
                }
            ]
        });

        console.log('Report sent to Microsoft Teams:', response.data);
    } catch (error) {
        console.error('Error sending report to Microsoft Teams:', error.message);
    }
};

sendReportToTeams();
