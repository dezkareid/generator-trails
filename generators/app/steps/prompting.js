/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt())
 */

var chalk = require('chalk'),
    extend = require('../util/extend'),
    APPLICATION_QUESTIONS = require('../questions/application.js'),
    DATABASE_QUESTIONS = require('../questions/database.js'),
    MISCELLANEOUS_QUESTIONS = require('../questions/miscellaneous'),
    SERVICES_QUESTIONS = require('../questions/services.js');

module.exports = {
    /**
     * Ask database questions
     */
    askDatabaseQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow("\nDatabase questions:"));

        this.prompt(DATABASE_QUESTIONS, function (answers) {
            this.answers = extend(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask application questions
     */
    askApplicationQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow("\nApplication questions:"));

        this.prompt(APPLICATION_QUESTIONS, function (answers) {
            this.answers = extend(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask services questions
     */
    askServiceQuestions: function () {
        var done = this.async();

        this.log(chalk.yellow("\nService questions:"));

        this.prompt(SERVICES_QUESTIONS, function (answers) {
            this.answers = extend(this.answers, answers);
            done();
        }.bind(this));
    },

    /**
     * Ask miscellaneous questions
     */
    askMiscellaneousSections: function () {
        var done = this.async();

        this.log(chalk.yellow("\nMiscellaneous questions:"));

        this.prompt(MISCELLANEOUS_QUESTIONS, function (answers) {
            this.answers = extend(this.answers, answers);
            done();
        }.bind(this));
    }
};
