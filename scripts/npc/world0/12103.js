var em;
function start() { 
 status = -1; 
 action(1, 0, 0); 
} 
function action(mode, type, selection) { 
 if (mode == -1) { 
  cm.dispose(); 
 } else { 
  if (status >= 0 && mode == 0) { 
   cm.sendOk("Ok, feel free to hang around!"); 
   cm.dispose(); 
   return; 
  } 
  if (mode == 1) 
   status++; 
  else 
   status--; 
  if (status == 0) { 
    cm.sendNext("Dear lord, help me! I've been enslaved here and they made me warp people to their guild home!"); 
	}else if(status == 1){
		cm.sendNext("Oh well... I guess I'll do just that. Let's see if you have a guild home...");
		}else if(status == 2){
if(cm.getPlayer().getGuildId() > 0){
					cm.sendYesNo("It looks like you have one! Would you like to go there?");
}else{
cm.sendOk("You have to be in a guild to go there! Sorry!");
cm.dispose();
}
				}else if(status == 3){
					em = cm.getEventManager("multiworld");
					if(em == null){
					cm.sendOk("Something went wrong...");
					cm.dispose();
					}else{
					em.getIv().invokeFunction("setup", null);
					var eim = em.getInstance("GuildHome");
						if(eim == null){
						cm.sendOk("Something went wrong!");
						cm.dispose()
						}else{
						eim.registerPlayer(cm.getChar());
						cm.dispose();
						}
				}
				}
 } 
 }