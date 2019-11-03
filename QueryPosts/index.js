module.exports = function (context, posts) {
    context.log('Searching for posts...');
    if (!posts)
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