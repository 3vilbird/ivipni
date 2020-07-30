# ionic-native-sms-retriever-plugin-master
# Cordova SMS retriver Plugin

Cross-platform plugin for Cordova / PhoneGap to to easily retrive SMS for your APP without need permission of SMS_READ. Available for **Android**.

## Installing the plugin

Using the Cordova CLI run:

```
ionic cordova plugin add cordova-plugin-sms-retriever-manager
npm install @ionic-native/sms-retriever
```

It is also possible to install via repo url directly (unstable), run :

```sh
ionic cordova plugin add https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master.git
```

## Using the plugin
HTML

```html
<input type="button" onclick="app.retriveSMS()" value="Read OTP from SMS" />
```

Javascript

```js
var app = {
    retriveSMS: function() {
        window['cordova']['plugins']['smsRetriever']['startWatching'](
      // the first callback is the success callback. We got back the native code’s result here.
      (result) => { 
		console.log('Message', result);
	  },
      // the second is the error callback where we get back the errors
      (err) => {
        console.log(err);
      }
    );
    }
};
```
```js
var app = {
    getAppHash: function() {
        window['cordova']['plugins']['smsRetriever']['getAppHash'](
      (result) => { 
		// Once you get this hash code of your app. Please remove this code.
		console.log('Hash', result);
	  },
      (err) => {
        console.log(err);
      }
    );
    }
};
```
You can fine working Demo for Ionic 4 here: https://github.com/hanatharesh2712/sms-plugin-test

  Typescript (Ionic 4)
```typescript
  import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
 
 
  constructor(private smsRetriever: SmsRetriever) { }
 
  ...
 
 // This function is to get hash string of APP.
 // * @return {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
  this.smsRetriever.getAppHash()
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));


// * This function start wathching message arrive event and retrive message text.
// * @return {Promise<string>} Returns a promise that resolves when retrives SMS text or TIMEOUT after 5 min.
   this.smsRetriever.startWatching()
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
 
  ```

You can fine working Demo for Ionic 3 here: https://github.com/hanatharesh2712/sms-plugin-test-ionic-3

  Typescript (Ionic 3)
```typescript

import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
var smsRetriever = window['cordova']['plugins']['smsRetriever'];
 
  public smsTextmessage: string = '';
  public appHashString: string = '';
  constructor(private smsRetriever: SmsRetriever) { }
 
  ...
 
  getHashCode() {
    smsRetriever['getAppHash']((res) => {
      this.appHashString = res;
      console.log(res);
    }, (err) => {
      console.warn(err);
    }
    );
  }

  getSMS() {
    smsRetriever['startWatching']((res) => {
      this.smsTextmessage = res.Message;
      console.log(res);
    }, (err) => {
      console.warn(err);
    }
    );
  }
  ```

You need to send your application hash in SMS when you are sending from your backend. to generate the hash of your application read this: https://developers.google.com/identity/sms-retriever/verify

To get your application hash code:

* Without the correct hash, your app won't recieve the message callback. This only needs to be
* generated once per app and stored. Then you can remove this function from your code.




BUILD FAILED

The problem is that you need to make sure that you set the target to android-19 or later in your ./platforms/android/project.properties file like this:

    # Project target.
    target=android-19


## Donations

If your app is successful or if you are working for a company, please consider donating some beer money :beer::

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YP2LMRCJMGTNJ&source=url)

Keep in mind that I am maintaining this repository on my free time so thank you for considering a donation. :+1:


## Contributing

I believe that everything is working, feel free to put in an issue or to fork and make pull requests if you want to add a new feature.

Things you can fix:
* Allow for null number to be passed in
  Right now, it breaks when a null value is passed in for a number, but it works if it's a blank string, and allows the user to pick the number
  It should automatically convert a  null value to an empty string

Thanks for considering contributing to this project.

### Finding something to do

Ask, or pick an issue and comment on it announcing your desire to work on it. Ideally wait until we assign it to you to minimize work duplication.

### Reporting an issue

- Search existing issues before raising a new one.

- Include as much detail as possible.

### Pull requests

- Make it clear in the issue tracker what you are working on, so that someone else doesn't duplicate the work.

- Use a feature branch, not master.

- Rebase your feature branch onto origin/master before raising the PR.

- Keep up to date with changes in master so your PR is easy to merge.

- Be descriptive in your PR message: what is it for, why is it needed, etc.

- Make sure the tests pass

- Squash related commits as much as possible.

### Coding style

- Try to match the existing indent style.

- Don't mix platform-specific stuff into the main code.




## History


## License

The DEV License (DEV)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
