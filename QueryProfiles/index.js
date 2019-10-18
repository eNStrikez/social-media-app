module.exports = function (context, req, profiles) {
    context.log('Searching for profiles...');
    if (!profiles)
    {
        context.log("No profiles found");
    }
    else
    {
        context.log(profiles);
    }

    context.done();
};