/**
* Clan NPC
* @author Sharky
*/

clan = [[100,200,300,400,500,600],["Eagle","Serpent","Lion","Salamander","Roadrunner","Shark"],["Focus","Sharp Eyes","Iron Body","Concentrate","Haste","Rage"]];

function start(){
	var talk = "Hello! Which Clan would you like to join? Each clan comes with it's own unique skill. \r\n";
	for(var i = 0; i < clan[1].length; i++)
		talk += "\r\n#L"+i+"#"+clan[1][i]+", with the skill "+clan[2][i]+".#l";
	cm.sendSimple(talk);
	}

	function action(m,t,s){
		if(m > 0){
	cm.setMapleClan(clan[0][s]);
	cm.sendOk("You are now a part of the #b"+ cm.getMapleClanName() +" clan#k, and your skill is #b"+ cm.getMapleClanSB() +".");
	cm.dispose();
	}
}  