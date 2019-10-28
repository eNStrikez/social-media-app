module.exports = function (context, req, posts) {
    context.log('Searching for profiles...');
    context.log(req.body.following);
    if (!posts)
    {
        context.res = {
            status:404,
            body: "No posts found, try following some users"
        };
    }
    else
    {
        context.log('Responding with found posts...');
        context.res = {
            status: 200,
            body: posts
        };
    }
    context.log('Returning context');
    context.done();
};