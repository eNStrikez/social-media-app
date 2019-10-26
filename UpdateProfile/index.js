module.exports = function (context, req, profileToUpdate, updatedProfile) {
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
        profileToUpdate = updatedProfile;
        context.res = {
            status: 200,
            body: "Updated profile"
        };
    }
    context.log('Returning context');
    context.done();
};