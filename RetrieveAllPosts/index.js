module.exports = function (context, req, posts) {
    context.log('Searching for posts...');
    if (!posts || posts.length == 0)
    {
        context.res = {
            status:404,
            body: "No posts found for user"
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