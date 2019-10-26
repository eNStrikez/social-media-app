module.exports = function (context, req, profileToUpdate) {
    context.log('Editing found profile');
    profileToUpdate = JSON.stringify({
        id: req.body.tag,
        name: req.body.name,
        password: req.body.password,
        icon: req.body.icon,
        followers: req.body.followers,
        following: req.body.following
    });
    context.res = {
        status: 200,
        body: "Updated profile"
    };
    context.log('Returning context');
    context.done();
};