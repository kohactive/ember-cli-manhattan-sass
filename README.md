# ember-cli-manhattan-sass

Include the [Manhattan grid](https://github.com/kohactive/manhattan) in an ember-cli app.

When the addon is installed, it will add bourbon, neat, and manhattan as a bower dependencies.

## Dependencies

Your project should already be set up to handle sass/scss builds. If you're not, do so by running:

    ember install ember-cli-sass

## Usage

In your ember-cli (> 0.1.5) project, run:

    ember install ember-cli-manhattan-sass

In older versions of ember-cli, run:

    npm install ember-cli-manhattan-sass --save-dev
    ember g ember-cli-manhattan-sass

The generator will create an `app.scss` with the sole contents being:

    @import "ember-manhattan";

## Developing this Addon

* `ember server`
* Visit the dummy app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
