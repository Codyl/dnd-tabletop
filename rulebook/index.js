import rulebookController from './rulebookController.js';

const controller = new rulebookController();
const path = window.location.pathname;
if(path === '/rulebook/ruleView.html')
{
    controller.rulebookView.renderTitle();
    controller.setRuleLinks();
}
else if(path === '/rulebook/rulebook.html')
{
    controller.setRulebookLinks();
}