function Character (game, name, weapon, belongings, type) {
    this.game = game;
    this.name = name;
    this.weapon = weapon;
    this.belongings = belongings;
    this.type = type;
}

export const Characters = [
    new Character ("DnD", "Merva Ness", "Trident", "Potions, backpack", "Sea Elf"),
    new Character ("Mutant år noll", "Menja", "Cross-bow", "Regent, sömnpiller", "Zon strykare")
]



