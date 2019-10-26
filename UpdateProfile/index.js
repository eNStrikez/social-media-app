module.exports = function (context, req, profileToUpdate) {
    context.log('Searching for profiles...');
    if (!profileToUpdate)
    {
        context.res = {
            status:404,
            body: "No matching profile found, cannot update"
        };
    }
    else
    {
        context.log('Editing found profile');
        profileToUpdate = JSON.stringify({
            id: req.body.tag,
            name: req.body.name,
            password: req.body.password,
            icon: "null",
            followers: [],
            following: []
        });
        context.res = {
            status: 200,
            body: "Updated profile"
        };
    }
    context.log('Returning context');
    context.done();
};