# Designer workflow

## Introduction

The MSR Design System provides our team with an even approach to how we build projects, aiding communication between designers, engineers and product leaders.

By following this guide, and making cohesive things with our system helps drive cohesive experiences for customers and as our design language evolves, our teams have access to up to date standards and practices

## Figma

- Library usage
- Plugins

## Tokens for Figma

The [Figma Tokens Studio plugin](https://jansix.at/resources/figma-tokens) is used to integrate tokens into your designs in Figma.

See the FAQ for more info around [Tokens](./faq/doc/faq.md)

1. Open the Figma Tokens plugin
1. You will see the welcome screen. Click on `Get started`
1. Click on `Settings` and select `Github` as the token storage.
1. Click `Add new credentials` and enter the following:

   - Name: `MSR Design System`
   - Personal Access Token: `<your token>`\*
   - Repository: `motorsportreg-design-system`
   - Default branch: `main`
   - File path: `sd-input/figma/sd-input.json`
   - baseUrl: leave blank

1. Click `Save`. You will be prompted to pull the existing tokens from the repo. Click `Yes`.

\* There may already be a token in use, ask one of the designers if they have an existing token to share with you. Otherwise, someone with a github account can create a new Personal Access Token from [their Github setttings](https://github.com/settings/tokens).

Congratulations, you have now linked your Figma project to the design tokens stored in the Design system. If you go back to the `Tokens` tab, you will be able to see the tokens.

#### How to use the tokens in your design

1. Under the `Tokens` tab, in the left sidebar, activate each set of tokens by clicking their checkbox.
1. Apply tokens to your design by...

#### How to update the tokens

If you have updated a token or added new tokens, you need to sync these changes with the design system so that they are backed up and so the developers can use them.

1. Open the Figma Tokens plugin
1. Click on `Settings` and select `Github` as the token storage. Click `Edit` on you existing credentials.
1. Set your Default Branch to: `figma-tokens`. This is an important step, as the branch name has to be correct for the sync to be successful.
1. You will be prompted to push your local changes to the repo. If they are ready to push, click `Push`. If you are not ready to push your changes, click `Cancel`.
1. In the bottom left of the Figma Tokens Plugin, you will see your branch name and two arrows. If you didn't push your changes in the previous step, but you are now ready to push, you can click the `Up Arrow`. Make sure the branch is still set to `figma-tokens` and provide a short, descriptive commit message. Click `Push`.

Congratulations, you have successfully pushed your token updates to the design system. There are a few final steps before they can be shipped to production:

1. Ask a developer to review and approve the PR that is created in the [design system repo](https://github.com/hagerty-dev/motorsportreg-design-system/pulls) .
1. Review the changes in the Backlight preview that appears on the PR.
1. If the PR is approved and the Backlight preview looks good, you or the developer may merge the PR.
1. Release a new version of the design system via Backlight. This can be done by clicking on the `Box` in the left sidebar in Backlight and clicking `Release`.

## Design specifications. WIP

- Components\*
- Tokens (Fonts, Color, Core etc)
- Icons
