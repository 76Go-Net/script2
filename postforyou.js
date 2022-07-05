function postforyou() {
    let DailyPost = document.getElementById("DailyPost");
    let postid1 = document.querySelector("#postid1");
    let stg1 = localStorage.getItem("stg1");

    if (stg1 != null) {
        DailyPost.style.display = "none";
        postid1.style.display = "block";
    } else {
        postid1.style.display = "none";
    }
}