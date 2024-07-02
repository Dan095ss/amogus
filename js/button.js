var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://sneg.top/uploads/posts/2023-06/1687456985_sneg-top-p-avi-s-trollfeisom-vkontakte-30.jpg";
        document.getElementById("demo").appendChild(img);
    }
}