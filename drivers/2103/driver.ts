import Homey from 'homey';

class cavius2103 extends Homey.Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('cavius2103 has been initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    this.log('on pair list devivec');

    return [
      {
        name: 'foo-device',
        data: {
          id: 'abdcdaa',
        }
      }
    ];
  }

}

module.exports = cavius2103;
