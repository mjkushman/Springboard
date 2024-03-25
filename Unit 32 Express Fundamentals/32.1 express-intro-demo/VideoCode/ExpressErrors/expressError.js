// class ExpressError extends Error {
//   constructor(msg, status) {
//     super();
//     this.msg = msg;
//     this.status = status;
//     console.error(this.stack)
//   }
// }

class ExpressError extends Error {
  constructor(msg, status=500){
    super();
    this.mesage = msg;
    this.status = status;
    console.error(this.stack)
  }
}


module.exports = ExpressError;