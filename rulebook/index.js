import rulebookController from './rulebookController.js';

const controller = new rulebookController();
const path = window.location.pathname;
console.log(window.location.href)
if(path === '/rulebook/ruleView.html')
{
    controller.rulebookView.renderTitle();
    controller.setRuleLinks();
}
else if(path === '/rulebook/rulebook.html')
{
    controller.setRulebookLinks();
}