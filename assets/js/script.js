var dropdown = document.querySelectorAll('.tutorial__category');
dropdown.forEach(function(el){
    el.addEventListener('click',function(e){
        e.target.nextElementSibling.classList.toggle('show');
    });
});

document.onclick = function(e){
    var _target = document.querySelectorAll('.tutorial__sidebar--list.show');
    _target.forEach(function(el){
        if(el != e.target.nextElementSibling){
            el.classList.toggle('show');
        }

    })
}



