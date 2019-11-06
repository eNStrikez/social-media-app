module.exports = function (context, req) {
    if (!profiles || profiles == [])
    {
        context.bindings.profileDocument = JSON.stringify({
            id: req.body.tag,
            name: req.body.name,
            password: req.body.password,
            icon: req.body.icon,
            followers: [],
            following: [],
            email: req.body.email
        });
    
        context.res = {
            status: 201,
            body: "Successfully added profile"
        };
    }
    else
    {
        context.res = {
            status: 404,
            body: "Profile with that username already exists"
        };
    }
    context.done();
};