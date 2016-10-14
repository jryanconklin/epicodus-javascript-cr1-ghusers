# Epicodus Install Commands
## JavaScript - Modern JS Apps

### Global Installs - New Setup Only:

    npm install bower -g

### Install Commands for Epicodus Projects

#### Initialize npm and Bower
    npm init
    bower init

#### Install npm Packages
    npm install browserify --save-dev
    npm install del --save-dev
    npm install jshint --save-dev
    npm install gulp --save-dev
    npm install gulp-concat --save-dev
    npm install gulp-jshint --save-dev
    npm install gulp-uglify --save-dev
    npm install gulp-util --save-dev
    npm install vinyl-source-stream --save-dev
    npm install browser-sync --save-dev
    npm install gulp-sass gulp-sourcemaps --save-dev

#### Install Bower Packages
    bower install jquery --save
    bower install bootstrap --save
    npm install bower-files --save-dev

#### API's and Optional Installs
    bower install moment --save

### Install an Old Project on New Machine
    npm install
    bower install

### Working JavaScript
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="bower_components/moment/min/moment.min.js"></script>

### Working CSS
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">

### Final Script and CSS Tags
    <link rel="stylesheet" href="build/css/vendor.css">
    <link rel="stylesheet" href="build/css/styles.css">
    <script src="build/js/vendor.min.js"></script>
    <script type="text/javascript" src="build/js/app.js"></script>

### Install Ruby and Sass

#### Homebrew
    $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#### Ruby
    $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    $ sudo gem install sass

### Code for .env File
    exports.apiKey = "YOUR-API-KEY";
