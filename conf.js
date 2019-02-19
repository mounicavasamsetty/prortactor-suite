// Require protractor-jasmine2-screenshot-reporter to generate reports.
var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
// Provide destination and filename where protractor-reports will be stored.
var reporter = new HtmlReporter({
    dest: 'protractor-reports',
    filename: 'protractor-report.html'
});
// Connecting directing to the conf file
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        //'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs'
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
    // Spec patterns are relative to the current working directory when protractor is called.
    specs: ['TestSpec.js'],
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 1700000
    },
    //Before launch function to run initial configurations before start running the test
    beforeLaunch: function() {
        return new Promise(function(resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    // on initial environment is set where reports are added.
    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
    },
    // Timeout can be adjusted according to your suitability by default it's 10 seconds.
    //allScriptsTimeout: 500
};
