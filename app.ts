import Homey from 'homey';

class Cavius extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Cavius has been initialized');
    const mySignal = this.homey.rf.getSignal433("cavius");

    await mySignal.enableRX();

    // on a payload event
    mySignal.on("payload", function (payload, first) {
      console.log(`received data: ${payload} isRepetition ${!first}`);
    });

    // on a command event
    mySignal.on("cmd", function (cmdId, first) {
      console.log(`received command: ${cmdId} isRepetition: ${!first}`);
    });

  }

}

module.exports = Cavius;
