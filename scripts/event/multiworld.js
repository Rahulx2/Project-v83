/* 
 * This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Guild Homes
-- By ---------------------------------------------------------------------------------------------
	Lios of Storybox
-- Version Info -----------------------------------------------------------------------------------
	1.0 - First Version by Lios
---------------------------------------------------------------------------------------------------
**/
var exitMap;
var minPlayers = 1;

function init() {
	instanceId = 1;
}

function setup() {
	exitMap = em.getChannelServer().getMapFactory().getMap(910000000); // <exit> to FM
	var eim = em.newInstance("GuildHome");
	return eim;
}

function playerEntry(eim, player) {
if(em.getInstance("GuildHome" + player.getGuildId()) == null){
	var ghm = em.newInstance("GuildHome" + player.getGuildId());
	}else{
	var ghm = em.getInstance("GuildHome" + player.getGuildId());
	}
	var map = ghm.getMapInstance(809050015);  //You may change this to any map you would like.
	player.changeMap(map, map.getPortal(0));
}

function playerDisconnected(eim, player) {
			playerExit(eim, player);
}

function playerExit(eim, player) {
	eim.unregisterPlayer(player);
	player.changeMap(exitMap, exitMap.getPortal(0));
}

// For offline players
function removePlayer(eim, player) {
	eim.unregisterPlayer(player);
	player.getMap().removePlayer(player);
	player.setMap(exitMap);
}