# Reloadly SDK for Node.JS

[![CircleCI][circle-ci-badge]][circle-ci-url]
[![MIT][mit-badge]][mit-url]
[![npm-airtime-badge]][npm-airtime-url]
[![npm-authentication-badge]][npm-authentication-url]
[![npm-core-badge]][npm-core-url]
[![codecov](https://codecov.io/gh/Reloadly/reloadly-sdk-nodejs/branch/main/graph/badge.svg?token=M6750A3FJX)](https://codecov.io/gh/Reloadly/reloadly-sdk-nodejs)

The **Reloadly SDK for Node.JS** enables developers to easily work with [Reloadly Services][reloadly-main-site]
and build scalable solutions. You can get started in minutes using npm.

* [SDK Homepage][sdk-website] (Coming soon)
* [Sample Code][sample-code]
* [API Docs][docs-api]
* [Issues][sdk-issues]
* [Giving Feedback](#giving-feedback)
* [Getting Help](#getting-help)

## Getting Started

#### Sign up for Reloadly

Before you begin, you need a Reloadly account. Please see the [Sign Up for Reloadly][reloadly-signup-help] section of
the knowledge-base for information about how to create a Reloadly account and retrieve
your [Reloadly APIs credentials][api-credentials-help].

#### Minimum Requirements

To run the SDK you will need **Node.js v14** or higher.

## Using the SDK Modules

The SDK is made up of several modules such as **Authentication, Airtime, etc...**, you can alternatively add
dependencies for the specific services you use only. For example : Authentication & Airtime
***(currently all modules have the same version, but this may not always be the case)***

Add specific dependencies to your project's build file:

```
npm install @reloadly/reloadly.airtime
npm install @reloadly/reloadly.authentication
```

## Getting Help

GitHub [issues][sdk-issues] is the preferred channel to interact with our team. Also check these community resources for
getting help:

* Checkout & search our [knowledge-base][reloadly-knowledge-base]
* Talk to us live on our chat tool on our [website][reloadly-main-site] (bottom right)
* Ask a question on [StackOverflow][stack-overflow] and tag it with `reloadly-nodejs-sdk`
* Articulate your feature request or upvote existing ones on our [Issues][features] page
* Take a look at our [youtube series][youtube-series] for plenty of helpful walkthroughs and tips
* Open a case via with the [Reloadly Support Center][support-center]
* If it turns out that you may have found a bug, please open an [issue][sdk-issues]

## Documentation

Please see:

- The [Usage and Sample Code](SAMPLE-CODE) page for code reference including how to set up, customize and use the SDK.
- The [API docs][api-docs] for the most up-to-date API documentation.
- The [example web application](reloadly-example/README) for a reference implementation.

## Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by
submitting issues, participating in discussion forums and submitting pull requests through the following channels:

* Submit [issues][sdk-issues] - this is the preferred channel to interact with our team
* Come join the Reloadly Node.js community chat on [Gitter][gitter]
* Articulate your feature request or upvote existing ones on our [Issues][features] page
* Send feedback directly to the team at oss@reloadly.com

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

[reloadly-main-site]: https://www.reloadly.com/

[sdk-website]: https://sdk.reloadly.com/nodejs

[reloadly-signup-help]: https://faq.reloadly.com/en/articles/2307724-how-do-i-register-for-my-free-account

[api-credentials-help]: https://faq.reloadly.com/en/articles/3519543-locating-your-api-credentials

[sdk-issues]: https://github.com/Reloadly/reloadly-sdk-nodejs/issues

[sdk-license]: http://www.reloadly.com/software/apache2.0/

[gitter]: https://gitter.im/reloadly/reloadly-sdk-nodejs

[sample-code]: https://github.com/Reloadly/reloadly-sdk-nodejs/blob/main/SAMPLE-CODE.md

[docs-api]: https://developers.reloadly.com

[features]: https://github.com/reloadly/reloadly-sdk-nodejs/issues?q=is%3Aopen+is%3Aissue+label%3A%22feature-request%22

[api-docs]: https://developers.reloadly.com

[mit-badge]: http://img.shields.io/:license-mit-blue.svg?style=flat

[mit-url]: https://github.com/reloadly/reloadly-sdk-nodejs/raw/main/LICENSE

[maven-badge]: https://img.shields.io/maven-central/v/software.reloadly/reloadly-nodejs/reloadly.svg

[maven-url]: https://search.maven.org/search?q=g:software.reloadly

[circle-ci-badge]: https://circleci.com/gh/Reloadly/reloadly-sdk-nodejs.svg?style=svg&circle-token=81a592b81bb93acd643b61fc75e94bbf15bb1447

[circle-ci-url]: https://circleci.com/gh/Reloadly/reloadly-sdk-nodejs/tree/main

[codecov-badge]: https://codecov.io/gh/reloadly/reloadly-sdk-nodejs/branch/main/graph/badge.svg?token=8U89VKQ2BF

[codecov-url]: https://app.codecov.io/gh/reloadly/reloadly-sdk-nodejs

[youtube-series]: https://www.youtube.com/watch?v=TbXC4Ic8x30&t=141s&ab_channel=Reloadly

[reloadly-knowledge-base]: https://faq.reloadly.com

[stack-overflow]: http://stackoverflow.com/questions/tagged/reloadly-reloadly-sdk

[support-center]: https://faq.reloadly.com/en/articles/3423196-contacting-support

[npm-airtime-badge]: https://img.shields.io/npm/v/@reloadly/reloadly.airtime?label=%40reloadly%2Freloadly.airtime

[npm-airtime-url]: https://www.npmjs.com/package/@reloadly/reloadly.airtime

[npm-authentication-badge]: https://img.shields.io/npm/v/@reloadly/reloadly.authentication?label=%40reloadly%2Freloadly.authentication

[npm-authentication-url]: https://www.npmjs.com/package/@reloadly/reloadly.authentication

[npm-core-badge]: https://img.shields.io/npm/v/@reloadly/reloadly.core?label=%40reloadly%2Freloadly.core

[npm-core-url]: https://www.npmjs.com/package/@reloadly/reloadly.core
