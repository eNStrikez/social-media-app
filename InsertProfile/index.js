module.exports = function (context, req) {
    context.log('Inserting documents...');
    context.bindings.documentsToStore = [];
    for(let i = 0, len=req.body.length; i<len;i++){
        const doc = req.body[i];
        context.bindings.documentsToStore.push(doc);
    }

    context.done(null, {
        status: 201, body: 'Processed ' + req.body.length + ' documents'
    });
};