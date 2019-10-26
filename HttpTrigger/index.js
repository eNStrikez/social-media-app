module.exports = async function (context) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(context.req.body);
    if (context.req.query.name || (context.req.body && context.req.body.name)) {
        context.res = {
            status: 200, /* Defaults to 200 */
            body: "Hello " + context.req.query.name || context.req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};