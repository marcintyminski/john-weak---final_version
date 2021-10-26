namespace SpriteKind {
    export const Collectible = SpriteKind.create()
    export const theGoal = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const x = SpriteKind.create()
    export const meteor = SpriteKind.create()
    export const Bother = SpriteKind.create()
    export const Monster = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const fire = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`boneTile`, function (sprite, location) {
    levelNumber = 2
    removeLeftovers()
    nextLevel()
})
function alienAttack () {
    aliens = sprites.create(assets.image`Alien`, SpriteKind.Enemy)
    aliens.follow(mainCharacter, 60)
}
function callEnemies () {
    for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
        x2 = sprites.create(assets.image`cross`, SpriteKind.x)
        tiles.placeOnTile(x2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mainCharacter.vy == 0 && levelNumber != 3) {
        mainCharacter.vy = -200
    }
    if (levelNumber == 3) {
        mainCharacter.vy = -50
    }
})
function criminalAttack () {
    for (let value of tiles.getTilesByType(assets.tile`brown`)) {
        criminal = sprites.create(assets.image`criminal0`, SpriteKind.Enemy)
        tiles.placeOnTile(criminal, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        criminal,
        "c -100 0 100 0 0 0",
        5000,
        true
        )
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`projectile1`, mainCharacter, 100, 0)
    if (levelNumber == 2) {
        projectile.follow(enemy2)
    } else if (levelNumber == 3) {
        projectile.follow(monster)
    } else if (levelNumber == 4) {
        projectile.follow(criminal)
    } else if (levelNumber == 5) {
        projectile.follow(neighbour)
    }
})
function fire1 () {
    for (let value of tiles.getTilesByType(assets.tile`fireTil`)) {
        fire = sprites.create(assets.image`myImage1`, SpriteKind.fire)
        tiles.placeOnTile(fire, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.meteor, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    mainCharacter.sayText("It hurts, but I will do anything for my puppy")
    pause(2000)
    mainCharacter.sayText("")
})
function macheteThrow () {
    for (let value of tiles.getTilesByType(assets.tile`macheteTile`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
function monster2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        monster = sprites.create(assets.image`monster2`, SpriteKind.Monster)
        tiles.placeOnTile(monster, value)
        monster.follow(mainCharacter, 60)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile19`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.theGoal, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    game.showLongText("Here you are. I've finally found you", DialogLayout.Bottom)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fire, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile18`, function (sprite, location) {
    game.over(false)
})
function monster1 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        monster = sprites.create(assets.image`monster1`, SpriteKind.Monster)
        tiles.placeOnTile(monster, value)
        monster.follow(mainCharacter, 60)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`collarTile`, function (sprite, location) {
    levelNumber += 1
    animation.stopAnimation(animation.AnimationTypes.All, mainCharacter)
    mainCharacter.setImage(assets.image`John Weak`)
    removeLeftovers()
    nextLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster, function (sprite, otherSprite) {
    if (sprite.y <= otherSprite.y) {
        otherSprite.destroy()
        info.changeScoreBy(1)
    } else {
        otherSprite.destroy()
        mainCharacter.sayText("Ouch!")
        pause(1000)
        mainCharacter.sayText("")
        info.changeLifeBy(-1)
        for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
            value.destroy()
        }
    }
})
function removeLeftovers () {
    for (let value of sprites.allOfKind(SpriteKind.meteor)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.x)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fire)) {
        value.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    game.over(false)
})
scene.onHitWall(SpriteKind.meteor, function (sprite, location) {
    sprite.destroy()
    sprite.startEffect(effects.disintegrate)
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow3, function (sprite, location) {
    neighbour.follow(mainCharacter, 90)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.meteor, assets.tile`tile8`, function (sprite, location) {
    sprite.destroy()
})
function nextLevel () {
    if (levelNumber == 0) {
        scene.setBackgroundImage(assets.image`city`)
        tiles.setTilemap(tilemap`level16`)
        game.setDialogFrame(img`
            ..bbbbbbbbbbbbbbbbbbbb..
            .b11bb11bb11bb11bb11bbb.
            bbb11bb11bb11bb11bb11b1b
            bb1bbbbbbbbbbbbbbbbbb11b
            b11bb11111111111111bb1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1b1111111111111111b11b
            b11b1111111111111111b1bb
            b1bb1111111111111111bbbb
            bbbb1111111111111111bb1b
            bb1bb11111111111111bb11b
            b11bbbbbbbbbbbbbbbbbb1bb
            b1b11bb11bb11bb11bb11bbb
            .bbb11bb11bb11bb11bb11b.
            ..bbbbbbbbbbbbbbbbbbbb..
            `)
        game.showLongText("Where am I... What happened?", DialogLayout.Top)
        game.showLongText("Where is my puppy?", DialogLayout.Top)
        game.showLongText("Oh no! I remember now, my neighbour stole him!", DialogLayout.Top)
        game.showLongText("I think I see some of his items... But I'm scared to go", DialogLayout.Top)
        game.showLongText("Can you help me?", DialogLayout.Top)
        placeMC()
    }
    if (levelNumber == 1) {
        game.setDialogFrame(img`
            ..bbabbaabbaabbaabbbbb..
            .bddbaddbaddbaddbabbddb.
            addddbaddbaddbaddbadddda
            addddbbaabbaabbaabbdddda
            abddbaaaaaaaaaaaaaabddba
            bbabaaaaaaaaaaaaaaaabbab
            babbaaaaaaaaaaaaaaaabadb
            abdaaaaaaaaaaaaaaaaaadda
            addaaaaaaaaaaaaaaaaaadba
            bdabaaaaaaaaaaaaaaaabbab
            babbaaaaaaaaaaaaaaaabadb
            abdaaaaaaaaaaaaaaaaaadda
            addaaaaaaaaaaaaaaaaaadba
            bdabaaaaaaaaaaaaaaaabbab
            babbaaaaaaaaaaaaaaaabadb
            abdaaaaaaaaaaaaaaaaaadda
            addaaaaaaaaaaaaaaaaaadba
            bdabaaaaaaaaaaaaaaaabbab
            babbaaaaaaaaaaaaaaaababb
            abddbaaaaaaaaaaaaaabddba
            addddbbaabbaabbaabbdddda
            addddabddabddabddabdddda
            .addbbabddabddabddabdda.
            ..aaabbaabbaabbaabbaaa..
            `)
        game.showLongText("Watch out! Meteor shower!", DialogLayout.Bottom)
        tiles.setTilemap(tilemap`Level1`)
        scene.setBackgroundImage(assets.image`city0`)
        placeMC()
        collectCoins()
    } else if (levelNumber == 2) {
        tiles.setTilemap(tilemap`Level_2`)
        scene.setBackgroundImage(assets.image`space`)
        placeMC()
        collectCoins()
        callEnemies()
        alienAttack()
        info.changeScoreBy(10)
    } else if (levelNumber == 3) {
        tiles.setTilemap(tilemap`level_3`)
        scene.setBackgroundImage(assets.image`water`)
        placeMC()
        collectCoins()
        monster1()
        monster2()
        info.changeScoreBy(20)
    } else if (levelNumber == 4) {
        tiles.setTilemap(tilemap`level_4`)
        scene.setBackgroundImage(assets.image`cityEvening`)
        placeMC()
        fire1()
        collectCoins()
        criminalAttack()
        info.changeScoreBy(30)
    } else if (levelNumber == 5) {
        tiles.setTilemap(tilemap`Level_5`)
        scene.setBackgroundImage(assets.image`room`)
        placeMC()
        placeNeighbour()
        collectCoins()
        macheteThrow()
        Dog()
        info.changeScoreBy(40)
    }
    if (levelNumber == 3) {
        mainCharacter.ay = 50
        animation.runImageAnimation(
        mainCharacter,
        assets.animation`JohnWeakSwimming`,
        200,
        true
        )
    } else {
        mainCharacter.ay = 300
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile29`, function (sprite, location) {
    levelNumber += 1
    nextLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.x, function (sprite, otherSprite) {
    otherSprite.destroy()
    enemy2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    enemy2.setPosition(mainCharacter.x + 80, mainCharacter.y + 0)
    enemy2.follow(mainCharacter, 80)
    enemy2.y = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ballTile`, function (sprite, location) {
    levelNumber += 1
    removeLeftovers()
    nextLevel()
})
function placeMC () {
    tiles.placeOnRandomTile(mainCharacter, assets.tile`blackTile`)
    for (let value2 of tiles.getTilesByType(assets.tile`blackTile`)) {
        tiles.setTileAt(value2, assets.tile`transparency16`)
    }
}
function placeNeighbour () {
    neighbour = sprites.create(assets.image`Neighbour`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(neighbour, assets.tile`neighbourTile`)
    for (let value of tiles.getTilesByType(assets.tile`neighbourTile`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Monster, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onDestroyed(SpriteKind.Monster, function (sprite) {
    monster1()
})
function Dog () {
    for (let value of tiles.getTilesByType(assets.tile`dogTile`)) {
        theDog = sprites.create(assets.image`TheDog`, SpriteKind.theGoal)
        tiles.placeOnTile(theDog, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`leashTile`, function (sprite, location) {
    levelNumber += 1
    removeLeftovers()
    nextLevel()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    sprite.destroy()
})
function collectCoins () {
    for (let value3 of tiles.getTilesByType(assets.tile`tile9`)) {
        coins = sprites.create(assets.image`coin`, SpriteKind.coin)
        tiles.placeOnTile(coins, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y <= otherSprite.y) {
        otherSprite.destroy()
        info.changeScoreBy(1)
    } else {
        otherSprite.destroy()
        info.changeLifeBy(-1)
        mainCharacter.sayText("Ouch!")
        pause(1000)
        mainCharacter.sayText("")
        for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
            value.destroy()
        }
    }
})
let meteor2: Sprite = null
let list: tiles.Location[] = []
let coins: Sprite = null
let theDog: Sprite = null
let fire: Sprite = null
let neighbour: Sprite = null
let monster: Sprite = null
let enemy2: Sprite = null
let projectile: Sprite = null
let criminal: Sprite = null
let x2: Sprite = null
let aliens: Sprite = null
let mainCharacter: Sprite = null
let levelNumber = 0
info.setScore(0)
info.setLife(5)
levelNumber = 0
mainCharacter = sprites.create(assets.image`John Weak`, SpriteKind.Player)
controller.moveSprite(mainCharacter, 100, 0)
scene.cameraFollowSprite(mainCharacter)
nextLevel()
game.onUpdateInterval(500, function () {
    if (levelNumber == 1) {
        list = tiles.getTilesByType(assets.tile`green`)
        meteor2 = sprites.create(img`
            . . . . . . . . . c c 8 . . . . 
            . . . . . . 8 c c c f 8 c c . . 
            . . . c c 8 8 f c a f f f c c . 
            . . c c c f f f c a a f f c c c 
            8 c c c f f f f c c a a c 8 c c 
            c c c b f f f 8 a c c a a a c c 
            c a a b b 8 a b c c c c c c c c 
            a f c a a b b a c c c c c f f c 
            a 8 f c a a c c a c a c f f f c 
            c a 8 a a c c c c a a f f f 8 a 
            . a c a a c f f a a b 8 f f c a 
            . . c c b a f f f a b b c c 6 c 
            . . . c b b a f f 6 6 a b 6 c . 
            . . . c c b b b 6 6 a c c c c . 
            . . . . c c a b b c c c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.meteor)
        tiles.placeOnTile(meteor2, list._pickRandom())
        meteor2.ay = 150
    }
})
