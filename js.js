const items = document.querySelectorAll('li')

items.forEach(item => {
    item.addEventListener('click', e => {
        console.log(e.target);
        // console.log(item);
        e.target.remove();
    })
});