import Homey from 'homey';

class Cavius extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('Cavius has been initialized');
  }

}

module.exports = Cavius;
