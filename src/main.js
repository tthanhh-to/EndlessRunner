/*
 Thanh To
 game title
 approximate hours spent on project
 creative tilt justification
assets
https://jesse-m.itch.io/jungle-pack
https://arks.itch.io/dino-characters
 */
// keep me honest
'use strict';
// console.log("hello world!");
// // define and configure main Phaser game object
let config = {
//     parent: 'myGame',
    type: Phaser.AUTO,
    height: 640,
    width: 960,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
//     physics: {
//         default: 'arcade',
//         arcade: {
//             //debug: true,
//             gravity: {
//                 x: 0,
//                 y: 0
//             }
//         }
//     },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug:true,
        }
    },
    scene: [Load, Title, Play ]
          //, Play, GameOver]
}

// define game
let game = new Phaser.Game(config);
 let keySPACE;