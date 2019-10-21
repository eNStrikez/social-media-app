module.exports = function (context, req, profiles) {
    context.log('Searching for profiles...');
    if (!profiles)
    {
        context.res = {
            status:404,
            body: "No matching profile found"
        };
    }
    else
    {
        context.res = {
            body: profiles
        };
    }

    context.done();
};