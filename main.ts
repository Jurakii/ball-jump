namespace SpriteKind {
    export const Platform = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Platform, function (sprite, otherSprite) {
    if (yVel > 0) {
        yVel = -150
        scene.cameraShake(3, 200)
    }
})
let yVel = 0
scene.setBackgroundColor(12)
effects.starField.startScreenEffect()
let Ball = sprites.create(img`
    . . c c c . . 
    . c d d 1 c . 
    c b d d d 1 c 
    c b d d d d c 
    c b b d d d c 
    . c b b b c . 
    . . c c c . . 
    `, SpriteKind.Player)
controller.moveSprite(Ball, 50, 0)
let platformY = 110
let platformX = 0
let Platforms = sprites.create(img`
    . . c c c c c c c c c c c . . 
    . c 1 1 1 1 1 1 1 1 1 1 1 c . 
    c d d d d d d d d d d d d d c 
    . c b b b b b b b b b b b c . 
    . . c c c c c c c c c c c . . 
    `, SpriteKind.Platform)
Platforms.setPosition(80, platformY)
for (let index = 0; index < 2; index++) {
    Platforms = sprites.create(img`
        . . c c c c c c c c c c c . . 
        . c 1 1 1 1 1 1 1 1 1 1 1 c . 
        c d d d d d d d d d d d d d c 
        . c b b b b b b b b b b b c . 
        . . c c c c c c c c c c c . . 
        `, SpriteKind.Platform)
    platformY += -50
    platformX = randint(10, 20)
    if (randint(1, 2) == 1) {
        Platforms.setPosition(Platforms.x + platformX, platformY)
    } else {
        Platforms.setPosition(Platforms.x - platformX, platformY)
    }
}
forever(function () {
    Ball.setVelocity(0, yVel)
    yVel += 5
})
forever(function () {
    scene.cameraFollowSprite(Ball)
})
