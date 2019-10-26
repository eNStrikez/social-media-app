module.exports = function (context, req) {
    context.log('Editing found profile');
    context.bindings.profileToUpdate = JSON.stringify({
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