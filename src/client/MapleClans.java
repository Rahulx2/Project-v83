package client;

/**
*
* @author Sharky
*/

public enum MapleClans {
None(0, "None", 0, "null"),
Eagle(100, "Eagle", 3001003, "Focus"),
Serpent(200, "Serpent", 3121002, "Sharp Eyes"),
Lion(300, "Lion", 1001003, "Iron Body"), 
Salamander(400, "Salamander", 3121008, "Concentrate"),
Roadrunner(500, "Roadrunner", 4201003, "Haste"),
Shark(600, "Shark", 1101006, "Rage");
final int clanid;
final String clanname;
final int skillBuff;
final String skillName;

private MapleClans(int id, String name, int skillB, String skillN){
        clanid = id;
        clanname = name;
        skillBuff = skillB;
        skillName = skillN;
    }

    public static MapleClans getById(int id) {
            for (MapleClans mc : MapleClans.values()) {
                if (mc.getId() == id) {
            return mc;
        }
    }
        return null;
    }

    public int getId(){
            return clanid;
    }

    public String getName(){
            return clanname;
    }

    public int getSkillBuff(){
            return skillBuff;
    }

    public String getSkillName(){
            return skillName;
    }
}  