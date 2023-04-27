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
let Platforms = sprites.create(img`
    . . c c c c c c c c c c c . . 
    . c 1 1 1 1 1 1 1 1 1 1 1 c . 
    c d d d d d d d d d d d d d c 
    . c b b b b b b b b b b b c . 
    . . c c c c c c c c c c c . . 
    `, SpriteKind.Platform)
Platforms.setPosition(80, 110)
controller.moveSprite(Ball, 50, 0)
forever(function () {
    Ball.setVelocity(0, yVel)
    yVel += 5
    scene.cameraFollowSprite(Ball)
})
