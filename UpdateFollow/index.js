module.exports = function (context, req, profiles, profilesToUpdate) {
    if (!profiles || profiles == [])
    {
        context.log('No profile found to edit')
        context.res = {
            status: 404,
            body: "Error finding profile"
        }
    } else {
        for(profile in profiles){
            if (profile.id == req.body.follower) {
                if (req.body.add){
                    profile.following.push(req.body.followed);
                } else {
                    profile.following.splice(profile.following.indexOf(req.body.followed), 1)
                }
                profilesToUpdate.push(profile);
            } else if (profile.id == req.body.followed) {
                if (req.body.add){
                    profile.followed.push(req.body.follower);
                } else {
                    profile.followed.splice(profile.followed.indexOf(req.body.follower), 1)
                }
                profilesToUpdate.push(profile);
            } 
        }
    }
    context.log('Returning context');
    context.done();
};