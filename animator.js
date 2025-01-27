class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration });

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    }

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;

        // **Ensure animation resets after full cycle**
        if (this.elapsedTime >= this.totalTime) {
            this.elapsedTime = 0; // **This ensures looping**
        }

        const frame = this.currentFrame();
        ctx.drawImage(this.spritesheet,
            this.xStart + this.width * frame, this.yStart,
            this.width, this.height,
            x, y,
            this.width, this.height);
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration) % this.frameCount; // Ensures looping
    }

    isDone() {
        return this.elapsedTime >= this.totalTime;
    }
}
