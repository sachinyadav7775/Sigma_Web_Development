function createcard(title, channelName, views, monthsold, duration, thumbnail) {
    document.querySelector(".title").innerHTML=title;
    if (views >= 1000000) {
        views = views / 1000000 + "M";
    }else if (views >= 1000) views = views / 1000 + "K";
    document.querySelector(".view").innerHTML = channelName + " . " + views + " views . " + monthsold + " years ago";
    document.querySelector(".time").innerHTML=duration;
    document.querySelector(".img").src=thumbnail;
}

createcard(
    "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", 
    "CodeWithHarry", 
    "183000", 
    "2", 
    "30: 35", 
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q"
)