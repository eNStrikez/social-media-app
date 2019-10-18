module.exports = function (context, input) {
    var documents = context.bindings.documents;
    for (var i = 0; i < documents.length; i++) {
        var document = documents[i];
        console.log(document);
        // operate on each document
    }
    context.done();
};