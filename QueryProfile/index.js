module.exports = function (context, profile) {
    context.log('Searching for profile...');
    if (!profile || profile == [])
    {
        context.res = {
            status:404,
            body: "No matching profile found"
        };
    }
    else
    {
        context.log('Responding with found profile...');
        context.res = {
            status: 200,
            body: profile
        };
    }
    context.log('Returning context');
    context.done();
};