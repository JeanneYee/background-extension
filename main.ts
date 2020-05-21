namespace SpriteKind {
    export const background = SpriteKind.create()
}
function create_clouds () {
    scene.setBackgroundColor(1)
    cloud_list = [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . 
. . . . f . . . f . . . . . . . 
. . f f 9 . . . . f f f . . . . 
. f 9 . . 9 . . . . . 9 f . . . 
. f 9 9 9 . 9 . . . . 9 f . . . 
. . f 9 9 9 9 9 9 9 9 f . . . . 
. . . f f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f . . . . . . . . . . 
. . f . . . f f f . . . . . . . 
. f . . . . . . 9 f f f f f . . 
f . . . . . . 9 . . . . . . f . 
f 9 . . . . 9 . . . . . . . 9 f 
. f 9 9 9 9 9 . . . . . . 9 9 f 
. . f f f 9 9 9 9 9 9 9 9 9 f . 
. . . . . f f f f f f f f f . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . f f f . . . f f f . . . 
. . . f . . . f f . . . . f . . 
. . f . . . . . f f . . . . f . 
. f . . . . . . . . . . . . f . 
f 9 . . . . . . . . 9 . . . 9 f 
f 9 9 . . . . . . . . 9 . . 9 f 
f 9 9 9 . . . . . . . 9 . 9 9 f 
. f 9 9 . . . . . . 9 . 9 9 f . 
. . f 9 9 9 9 9 . 9 . 9 9 9 f . 
. . . f f f 9 9 9 9 9 9 9 f . . 
. . . . . . f f f f f f f . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
}
let cloud: Sprite = null
let cloud_list: Image[] = []
let background_type = 0
if (background_type == 1) {
    create_clouds()
}
game.onUpdateInterval(Math.randomRange(1000, 3000), function () {
    cloud = sprites.create(cloud_list[Math.randomRange(0, cloud_list.length - 1)], SpriteKind.background)
    cloud.setFlag(SpriteFlag.Ghost, true)
    cloud.z = -50
    cloud.setPosition(scene.cameraLeft() + 160, Math.randomRange(10, 80))
    cloud.vx = -10
})
