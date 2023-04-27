namespace SpriteKind {
    export const Platform = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Platform, function (sprite, otherSprite) {
    if (gameStart == 1) {
        if (yVel > 0) {
            yVel = -150
            scene.cameraShake(3, 200)
            music.play(music.createSoundEffect(WaveShape.Triangle, 1, 1809, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            sprites.destroy(otherSprite, effects.disintegrate, 2000)
            Platforms = sprites.create(img`
                . . c c c c c c c c c c c . . 
                . c 1 1 1 1 1 1 1 1 1 1 1 c . 
                c d d d d d d d d d d d d d c 
                . c b b b b b b b b b b b c . 
                . . c c c c c c c c c c c . . 
                `, SpriteKind.Platform)
            platformY += -50
            currentPos = platformY
            platformX = randint(10, 40)
            Platforms.setPosition(lastX, platformY)
            if (randint(1, 2) == 1) {
                lastX = lastX + platformX
            } else {
                lastX = lastX - platformX
            }
        }
    }
})
let Ball: Sprite = null
let lastX = 0
let platformX = 0
let currentPos = 0
let platformY = 0
let Platforms: Sprite = null
let yVel = 0
let gameStart = 0
gameStart = 0
let title = sprites.create(img`
    ..1111111111111111111111................
    .1cccc111ccc11c11111c111................
    .1c111c1c111c1c11111c1111...............
    .1c111c1c111c1c11111c1111...............
    .1cccc11ccccc1c11111c1111...............
    .1c111c1c111c1c11111c1111...............
    .1c111c1c111c1c11111c1111...............
    .1cccc11c111c1cccc11cccc1...............
    .111111111111111111111111111111111111...
    .1cccc111ccc11c111c1c111c11cccc1ccccc1..
    .1c111c1c111c1c111c1cc11c1c11111c11111..
    .1c111c1c111c1c111c1c1c1c1c11111c11111..
    .1cccc11c111c1c111c1c11cc1c11111ccccc1..
    .1c111c1c111c1c111c1c111c1c11111c11111..
    .1c111c1c111c1c111c1c111c1c11111c11111..
    .1cccc111ccc111ccc11c111c11cccc1ccccc1..
    ..11111111111111111111111111111111111...
    `, SpriteKind.Player)
title.setPosition(80, 60)
title.setScale(2, ScaleAnchor.Middle)
scene.setBackgroundColor(12)
effects.starField.startScreenEffect()
forever(function () {
    if (gameStart == 1) {
        Ball.setVelocity(0, yVel)
        yVel += 5
        if (Ball.y > currentPos + 500) {
            game.gameOver(false)
        }
    }
})
forever(function () {
    if (gameStart == 1) {
    	
    }
})
forever(function () {
    if (gameStart == 1) {
        if (Ball.y > currentPos + 40) {
            music.play(music.createSoundEffect(WaveShape.Sine, 5000, 847, 150, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        }
    }
})
forever(function () {
    if (gameStart == 1) {
        scene.cameraFollowSprite(Ball)
    }
})
forever(function () {
    if (gameStart == 1) {
        gameStart = 0
        Ball = sprites.create(img`
            . . c c c . . 
            . c d d 1 c . 
            c b d d d 1 c 
            c b d d d d c 
            c b b d d d c 
            . c b b b c . 
            . . c c c . . 
            `, SpriteKind.Player)
        controller.moveSprite(Ball, 55, 0)
        currentPos = 110
        platformY = 110
        platformX = 0
        Platforms = sprites.create(img`
            . . c c c c c c c c c c c . . 
            . c 1 1 1 1 1 1 1 1 1 1 1 c . 
            c d d d d d d d d d d d d d c 
            . c b b b b b b b b b b b c . 
            . . c c c c c c c c c c c . . 
            `, SpriteKind.Platform)
        Platforms.setPosition(80, platformY)
        lastX = Platforms.x
    } else if (controller.A.isPressed()) {
        gameStart = 1
    }
})
