module.exports = function (context, req, profile) {
    if (!profiles)
    {
        context.log('No profile found to edit')
        context.res = {
            status: 404,
            body: "Error finding profile"
        }
    } else {
        context.log('Editing found profile');
        context.bindings.profileToUpdate = JSON.stringify({
            id: profile.id,
            name: req.body.name,
            password: profile.password,
            icon: req.body.icon,
            followers: req.body.followers,
            following: req.body.following,
            email: req.body.email
        });
        context.res = {
            status: 200,
            body: "Updated profile"
        };
    }
    context.log('Returning context');
    context.done();
};