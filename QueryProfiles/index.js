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
        context.log('Responding with found profiles...');
        context.res = {
            status: 200,
            body: "Found profiles",
            profiles: profiles
        };
        context.log(context.res);
    }
    context.log('Returning context');
    context.done();
};