module.exports = function (context, req, profile) {
    if (!profile)
    {
        context.log('No profile found to edit')
        context.res = {
            status: 404,
            body: "Error finding profile"
        }
    } else {
        context.log('Editing found profile');
        context.bindings.profileToUpdate = profile[0];
        context.bindings.profileToUpdate.name = req.body.name;
        context.bindings.profileToUpdate.icon = req.body.icon;
        context.bindings.profileToUpdate.email = req.body.email;
        context.res = {
            status: 200,
            body: "Updated profile"
        };
    }
    context.log('Returning context');
    context.done();
};