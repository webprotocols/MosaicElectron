1. angular.io
    git clone https://github.com/angular/quickstart.git quickstart-angular
    cd quickstart
    npm install
    npm start

2. electron.atom.io

    # Clone the Quick Start repository
    $ git clone https://github.com/electron/electron-quick-start quickstart-electron

    # Go into the repository
    $ cd electron-quick-start

    # Install the dependencies and run
    $ npm install && npm start

3. https://github.com/joeferner/node-java

    mkdir quickstart-java
    cd quickstart-java
    npm init -y
    npm install java --msvs_version=2013 --save-dev 
    npm start

4. https://github.com/oracle/node-oracledb  

    mkdir quickstart-oracledb
    cd quickstart-oracledb
    npm init -y
    npm install oracledb --msvs_version=2013 --save-dev
    npm start

5. https://github.com/mysticatea/cpx 

    mkdir quickstart-cpx
    cd quickstart-cpx
    npm init -y
    npm install cpx --save-dev
    npm start

6. app-web

    cp -rf quickstart-angular app-web
    cd app-web
    rm -rf node_module
    cp quickstart-electron/main.js app-web/electron.js
    npm install electron --save-dev
    npm install @types/electron --save-dev
    npm install electron-rebuild --save-dev
    npm install

7. app-desktop

    npm install java --msvs_version=2013 --save-dev
    npm install @types/java --save-dev
    npm install oracledb --msvs_version=2013 --save-dev
    npm install @types/oracledb --save-dev
    npm run rebuild

           