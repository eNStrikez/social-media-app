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
        for(let i = 0; i < profiles.length; i++) {
            let profile = profiles[i];
            let updatedProfile = {
                "name": profile.name,
                "password": profile.password,
                "id": profile.id,
                "icon": profile.icon,
                "email": profile.email,
                "following": profile.following,
                "followers": profile.followers
            };
            if (profile.id == req.body.follower) {
                if (req.body.add){
                    context.log("Added followed");
                    updatedProfile.following.push(req.body.followed);
                } else {
                    context.log("Removed followed");
                    updatedProfile.following = updatedProfile.following.splice(updatedProfile.following.indexOf(req.body.followed), 1)
                }    
            } else if (profile.id == req.body.followed) {
                if (req.body.add){
                    context.log("Added follower");
                    updatedProfile.followers.push(req.body.follower);
                } else {
                    context.log("Removed follower");
                    updatedProfile.followers = updatedProfile.followers.splice(updatedProfile.followers.indexOf(req.body.follower), 1)
                }
            } 
            context.log("Pushing updated followed");
            profilesToUpdate.push(JSON.stringify(updatedProfile));
        }

        context.res = {
            status: 200,
            body: "Successfully updated"
        }
    }
    context.log('Returning context');
    context.done();
};