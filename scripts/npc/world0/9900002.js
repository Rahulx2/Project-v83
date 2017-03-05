/*
  GM Custom Equipment Creator
  Author: ElternalFire
*/

if (cm.getBossLog('PANDORA') < 1) {
  cm.gainItem(cm.getPandoraItem(Math.floor(Math.random() * cm.getMaxItems()) + 1)); // Gains a random item.
cm.setPandoraLog('PANDORA');
cm.dispose();
} else {
  cm.sendNext("You've used all your uses. Please come back tommrow!);
cm.dispose();