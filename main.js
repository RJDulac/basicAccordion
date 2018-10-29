var aTitle = document.querySelectorAll(".acc");
var content = document.querySelectorAll(".content");

for(var i=0;i<aTitle.length;i++) {
    aTitle[i].onclick = function() {
        closeContent(this.nextElementSibling);
        this.nextElementSibling.classList.toggle('active');
        
    }
}

function closeContent(t) {
    for(var i = 0;i<content.length;i++) {
        if(t!==content[i]) {
            content[i].classList.remove('active');
        }
        
    }

}