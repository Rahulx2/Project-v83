


var status = 0;
var dispose = false;
function start(){
    status == 0;
    action(1, 0, 0);
}

function action(mode, type, selection){
    if(mode <= 0){
        if(!cm.getPlayer().getMap().getAllmonsters().size() == 2){
        cm.sendOk("Alrighty. We have high hopes for you so make us mercenaries proud!");
        cm.dispose();
        } else {
        cm.getPlayer().getMap().killAllMonsters();
        Packages.server.Events.BalrogPQ.partyLeader = "undefined";
        Packages.server.Events.BalrogPQ.balrogSpawned = false;
        Packages.server.Events.BalrogPQ.close();
            cm.warp(105100100);
            cm.dispose();
        }
    } else if(status == 0){
        if(cm.getPlayer().getMap().getCharacters().size() > 1){
            cm.sendYesNo("Are you really going to leave this battle and leave your fellow travelers to die?");
            dispose = false;
            status++;
        } else if(cm.getPlayer().getMap().getCharacters().size() <= 1 && cm.getPlayer().getMap().getAllmonsters().size() != 2){
            cm.sendYesNo("If you're a coward, you will leave.");
            dispose = true;
            status++;
        } else if(cm.getPlayer().getMap().getAllmonsters().size() == 0){
            cm.sendOk("Wow! You defeated the balrog.");
            dispose = true;
            cm.getPlayer().getClient().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0, Packages.server.Events.BalrogPQ.partyLeader + "'s party has successfully defeated the Balrog! Praise to them, they finished with " + cm.getPlayer().getMap().getCharacters().size() + " players."));
            status++;
        } else {
            cm.sendYesNo("So you are really going to leave?");
            status++;
        }
    } else if(status == 1){
        if(dispose){
        cm.getPlayer().getMap().killAllMonsters();
        Packages.server.Events.BalrogPQ.partyLeader = "undefined";
        Packages.server.Events.BalrogPQ.balrogSpawned = false;
        Packages.server.Events.BalrogPQ.close();
        }
        cm.warp(105100100);
        cm.dispose();
    }
}  