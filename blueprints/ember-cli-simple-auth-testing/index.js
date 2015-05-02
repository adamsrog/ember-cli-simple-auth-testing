var EOL = require('os').EOL;

module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    this.insertIntoFile('tests/.jshintrc',
      '    "authenticateSession",' + EOL +
      '    "invalidateSession",' + EOL +
      '    "currentSession",',
      { after: '  "predef": [' + EOL }
    );

    this.insertIntoFile('tests/helpers/start-app.js',
      "import initializeTestHelpers from 'simple-auth-testing/test-helpers';" + EOL +
      "initializeTestHelpers();" + EOL,
      { after: "import config from '../../config/environment';" + EOL }
    );

    return this.addBowerPackageToProject('ember-simple-auth', '0.8.0-beta.2');
  }
};
