// let ladder = {
//     step: 0,
//     up: function () {
//         this.step ++;
//     },
//     down: function () {
//         this.step --;
//     },
//     showStep: function () {
//         console.log(this.step);
//     }
// };
//
// ladder.up();
// ladder.showStep();

let ladder = {
    step: 0,
    up: function () {
        this.step ++;
        return this;
    },
    down: function () {
        this.step --;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep();