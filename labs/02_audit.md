# Audit Tools for Measurement

- [Audit Tools for Measurement](#audit-tools-for-measurement)
	- [Test the performance of a public web property](#test-the-performance-of-a-public-web-property)
		- [Bonus: Fix the performance of the chosen web property](#bonus-fix-the-performance-of-the-chosen-web-property)
	- [Test the performance of an Angular App served on your localhost](#test-the-performance-of-an-angular-app-served-on-your-localhost)
		- [Bonus: Fix the performance of the chosen Angular App](#bonus-fix-the-performance-of-the-chosen-angular-app)

## Test the performance of a public web property

1. Choose a `web property` for your first lab, it can be
   * a **website**,
   * a **webshop** or
   * a **web app**.

   Best option would be to test a project of your own work or else of your team or your company. The `web property` does not have to be an Angular App! However if your company doesn't have a publicly available `web property` you can chose any website you want.

2. Now select between using **[Google PageSpeed Insights](https://pagespeed.web.dev/)** or **[WebPageTest](https://www.webpagetest.org/)**. There are many other services out there, but your trainer would recommend using on of those two options. For both you don't need a login.

3. The next step is to prepare the `audit document`. You can either copy my **[Google Docs Template](https://docs.google.com/document/d/1AQgAwHoHvasmT43HUlSr3THifj-WHD_wwJQRhd0KG64/edit)** into your Google Drive account or - if you don't have Drive - use one of the templates in this folder.

4. Make sure you fill the _[X]_, _[Y]_ and _[Z]_ placeholders in that `audit document`.

5. Now go to your tool of choice and test the chosen `web property`.

6. Fill the fields in the `audit document` and try to find things that can be improved.

7. Prepare to share your findings with the other workshop participants.

### Bonus: Fix the performance of the chosen web property

If possible try to fix the issues of the `web property` or else write a friendly (seriously!) email to the person that you think might be responsible for fixing it.

## Test the performance of an Angular App served on your localhost

1. Choose an `Angular App` for this lab. You need the source code. Best option would be a workspace of your own work or else of your team or your company. If you currently don't have access to any Angular workspace as a last resort you can use this workspace.

2. Check the configurations in `angular.json` and then run a production build of the project, typically:
    ```
   ng build --c production
    ```
   
3. Serve your `Angular build` on your localhost. You can either
   * use something like MAMP/WAMP/XAMPP,
   * edit your hosts file manually or
   * use npm serve:

    ```
   npm install serve -g
   serve -s
    ```

4. Now open the `Angular App` in Chrome and make sure you have the `Lighthouse` extension installed.

5. The next step is to prepare another `audit document`. You can again copy my **[Google Docs Template](https://docs.google.com/document/d/1AQgAwHoHvasmT43HUlSr3THifj-WHD_wwJQRhd0KG64/edit)** into your Google Drive account or - if you don't have Drive - use one of the templates in this folder.

6. Make sure you fill the _[X]_, _[Y]_ and _[Z]_ placeholders in that `audit document`.

7. Now fire up `Lighthouse` for "**Mobile**" and "**Performance**". (Of course you can run the other tests as well.)

8. Fill the fields in the document and try to find things that can be improved.

9. Prepare to share your findings with the other workshop participants.

### Bonus: Fix the performance of the chosen Angular App

If possible try to fix the issues of the `Angular App` or at least write a friendly (no joke!) email to the person that you think might be responsible for fixing it.
