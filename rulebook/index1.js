import rulebookController from './rulebookController.js';

const rulebook = new rulebookController();
// console.log(window.location.pathname);
let path = window.location.pathname;
if(path === '/rulebook/ruleView.html')
{
    rulebook.rulebookView.renderTitle();
    rulebook.setRuleLinks();
    document.getElementById('search').addEventListener('input',function() {
        // console.log(document.getElementById('search').value);
        let content = document.getElementsByClassName('subCategory');
        for (let i = 0; i < content.length; i++) {
            if(!String(content[i].innerText).toLowerCase().startsWith(String(document.getElementById('search').value)))
            {content[i].classList.add('hide');
        }
        else {
            content[i].classList.remove('hide');
        }
    }
    if(document.getElementById('search').value == '') 
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('hide');
        content[i].nextElementSibling.classList.add('hide');
    }
});
}
else if(path === '/rulebook/rulebook.html')
{
    rulebook.setRulebookLinks();
}