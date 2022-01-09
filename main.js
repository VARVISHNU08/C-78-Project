var images = ["family.jpg", "ajoba.jpeg", "aaji.jpeg", "baba.jpg", "aai.jpg", "me.jpg"];
var names = [" ", "Vasudeo Burse(my grandfather)","Vaishali Burse(my grandmother)", "Vivek Burse(my dad)", "Vedita Burse(my mom)", "Vardhan Burse(me)"];
var i = 0;
function update()
{   
        i = i + 1;
        document.getElementById("family_member_image").src = images[i];
        document.getElementById("family_member_name").innerHTML = names[i];

        if(i == 6){
                i = 0;
                document.getElementById("family_member_image").src = images[i];
                document.getElementById("family_member_name").innerHTML = names[i];
        }
}
