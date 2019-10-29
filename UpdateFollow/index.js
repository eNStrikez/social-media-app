module.exports = function (context, req, profiles, profilesToUpdate) {
    if (!profiles || profiles == [])
    {
        context.log('No profile found to edit')
        context.res = {
            status: 404,
            body: "Error finding profile"
        }
    } else {
        profilesToUpdate = [];
        for(var i = 0; i < profiles.length; i++) {
            var profile = profiles[i];
            if (profile.id == req.body.follower) {
                if (req.body.add){
                    context.log("Added followed");
                    profile.following.push(req.body.followed);
                } else {
                    context.log("Removed followed");
                    profile.following = profile.following.splice(profile.following.indexOf(req.body.followed), 1)
                }    
            } else if (profile.id == req.body.followed) {
                if (req.body.add){
                    context.log("Added follower");
                    profile.followers.push(req.body.follower);
                } else {
                    context.log("Removed follower");
                    profile.followers = profile.followers.splice(profile.followers.indexOf(req.body.follower), 1)
                }
            } 
            context.log("Pushing updated followed");
            profilesToUpdate.push(JSON.stringify(profile));
        }

        context.res = {
            status: 200,
            body: "Successfully updated"
        }
    }
    context.log('Returning context');
    context.done();
};