class charwalk {

    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./charwalk.png"), 0, 0, 32, 33, 3, 0.18);

        this.x = 1024;
        this.y = 0;
        this.speed = 25;
    };

    update() {
        this.x -= this.speed * this.game.clockTick;
        if(this.x < 0) {
            this.x = 1024
        }
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}