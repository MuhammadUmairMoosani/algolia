const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const algoliasearch = require('algoliasearch');
const algolia = algoliasearch('applicationID', 'apiKey');

// const ALGOLIA_APP_ID = "7JV73FWNEH";
// const ALGOLIA_ADMIN_KEY ="bbbb6a9cae64aa184f552d0e8b5bb490";
// const ALGOLIA_INDEX_NAME ="users"; 


exports.updateIndex = functions.database.ref('/books/{bookId}').onWrite(event => {
    const index = algolia.initIndex('books');
    const bookId = event.params.bookId
    const data = event.data.val()
    if (!data) {
        return index.deleteObject(bookId, (err) => {
            if (err) throw err
            console.log('Book Removed from Algolia Index',bookId)
        })
    }

    data['objectID'] = bookId
    return index.saveObject(data, (err, content) => {
        if (err) throw err
        console.log('Book updated in Algolia Index', data.objectID)
    })
})
