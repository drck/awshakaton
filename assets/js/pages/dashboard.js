$(document).ready(function () {
    loadFriends();
});

function

function createFriendTag(user) {

    var html = "";
    html += "<div class=\"col-lg-3 col-md-6 col-sm-6\">\n";
    html += "   <div class=\"card card-stats\">\n";
    html += "       <div class=\"card-header card-header-warning card-header-icon\">\n";
    html += "           <div class=\"card-icon\">\n";
    html += "               <img src='"+user.userPhoto+"' />\n";
    html += "           </div>\n";
    html += "           <p class=\"card-category\">"+user.profilePhoto+"</p>\n";
    html += "           <h3 class=\"card-title\">\n";
    html += "               <small>GB</small>\n";
    html += "           </h3>\n";
    html += "       </div>\n";
    html += "       <div class=\"card-footer\">\n";
    html += "           <div class=\"stats\">\n";
    html += "               <i class=\"material-icons text-danger\">warning</i>\n";
    html += "               <a href=\"#pablo\">Get More Space...</a>\n";
    html += "           </div>\n";
    html += "       </div>\n";
    html += "   </div>\n";
    html += "</div>"

}