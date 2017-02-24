var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("Alright, see you next time.");
			cm.dispose();
			return;
		}
		status++;
		if (status == 0) {
cm.sendYesNo("Would you like to leave the guild home?");	
	}else if(status == 1) {
var em = cm.getEventManager("multiworld");
var eim = em.getInstance("GuildHome" + cm.getPlayer().getGuildId())
	eim.removePlayer(cm.getChar());
	cm.dispose();
		}
	}
}