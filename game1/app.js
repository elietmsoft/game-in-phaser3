const config = {
    width:500,
    height:300,
    type:Phaser.AUTO,
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{y: 450}
        }

    },
    scene:{
        preload:preload,
        create:create,
        update:update
    }
}

var game = new Phaser.Game(config);
let logo;
let cursors;

function preload() {
    this.load.image('logo','/images/logo.PNG');
}
function create() {
   logo= this.physics.add.image(100,100,'logo');
   logo.body.collideWorldBounds = true;
   cursors = this.input.keyboard.createCursorKeys();    
}

/*this.add.text(20,20,"Playing Game",{
    font:"25px Arial",
    fill:"#007ACC"
})*/

function update() { 
    //permet de ne plus faire déplacer notre image(logo)
    logo.setVelocityX(0);
    if(cursors.up.isDown)
    {
        //si qlq1 à appuyer sur une touche d'en haut
        logo.setVelocity(0,-300);
    }
    if(cursors.right.isDown)
    {
        //si qlq1 à appuyer sur une touche à droite
        logo.setVelocity(300,0);
    }
    if(cursors.left.isDown)
    {
        //si qlq1 à appuyer sur une touche à gauche
        logo.setVelocity(-300,0);
    }
}