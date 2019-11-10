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
        context.bindings.profileToUpdate = [];
        updatedProfile = profile[0];
        updatedProfile.name = req.body.name;
        updatedProfile.icon = req.body.icon;
        updatedProfile.email = req.body.email;
        context.bindings.profileToUpdate.push(updateProfile);
        context.res = {
            status: 200,
            body: "Updated profile"
        };
    }
    context.log('Returning context');
    context.done();
};