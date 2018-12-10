This project is algolia search link https://www.algolia.com/

For run this project 
step 1 git clone (project url)

step 2 algolia/functions/index.js file add algolia application id and apikey
const algolia = algoliasearch('applicationID', 'apiKey');

step 3 algolia/src/App.js add algolia application id and apikey
appId="applicationID"
apiKey="apiKey"

step 4 algolia/.env file add all this value

ALGOLIA_APP_ID=APPID
ALGOLIA_API_KEY=APIKEY
ALGOLIA_INDEX_NAME='contacts'
FIREBASE_DATABASE_URL=FIREBASEDATABASEURL

step 5 npm intall

step 6 npm start
