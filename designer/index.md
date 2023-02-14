# Designer workflow

## Introduction

The MSR Design System provides our team with an even approach to how we build projects, aiding communication between designers, engineers and product leaders.

By following this guide, and using it to build things, our system helps drive cohesive experiences for customers and as our design language evolves, our teams have access to up to date standards and practices.

## Tokens for Figma Plugin

The <a href="https://jansix.at/resources/figma-tokens" target="_blank">Figma Tokens Studio plugin</a> is used to integrate tokens into your designs in Figma. Using the plugin tokens can agnostically be share via JSON and transformed for use on web projects.

See the FAQ for more info around [Tokens](./faq/)

### Installing the plugin

Install Tokens Studio for Figma by hitting the **Install** button <a href="https://jansix.at/resources/figma-tokens" target="_blank">on this page</a>

If you launch the plugin for the very first time, you won't have any tokens defined just yet. In this case, click on **Get started**, then follow the steps below.

### Importing the MSR Design system Token Library

1. Open the Figma Tokens plugin
2. Click on **Get started**
3. Click on **Settings** and select **Github** as the token storage.
4. Click **Add new credentials** and enter the following:

   - Name: `MSR Design System`
   - Personal Access Token: `<your token>`
   - Repository: `motorsportreg-design-system`
   - Default branch: `main`
   - File path: `sd-input/figma/sd-input.json`
   - baseUrl: leave blank

5. Click **Save**. You will now be prompted to pull the existing tokens from the repo. Click **Yes**.

Your Figma project now has the synced tokens stored locally from this MSR Design system. If you go back to the **Tokens** tab, you will be able to see the tokens shared from the `motorsportreg-design-system` repository.

#### Use tokens in your design

1. To use tokens in your Figma file, you need to activate them as required. Under the **Tokens** tab, in the left sidebar, activate each set of tokens by clicking their checkbox.
2. Apply tokens to your design by left-clicking on a token to apply it to one or more layers

#### Update tokens

If you have updated a token or added new tokens, you need to sync these changes with the MSR Design system so that they are backed up & developers can use them.

1. Open the Figma Tokens plugin
1. Click on **Settings** and select **Github** as the token storage. Click **Edit** on you existing credentials.
1. Set your Default Branch to: `figma-tokens`. This is an important step, as the branch name has to be correct for the sync to be successful.
1. You will be prompted to push your local changes to the repo. If they are ready to push, click **Push**. If you are not ready to push your changes, click **Cancel**.
1. In the bottom left of the Figma Tokens Plugin, you will see your branch name and two arrows. If you didn't push your changes in the previous step, but you are now ready to push, you can click the **Up Arrow**. Make sure the branch is still set to `figma-tokens` and provide a short, descriptive commit message so that your intentions or changes are clear and so you can review it again later if needed. Click **Push**.

Congratulations, you have successfully pushed your token updates to the MSR Design system. There are a few final steps before they can be shipped to production.

#### Token review

1. Ask a developer to review and approve the PR that is created in the <a href="https://github.com/hagerty-dev/motorsportreg-design-system/pulls)">MSR Design system repo</a>
1. Review the changes in the Backlight preview that appears on the PR.
1. If the PR is approved and the Backlight preview looks good, you or the developer may merge the PR.
1. Release a new version of the MSR Design system via Backlight. This can be done by clicking on the **Release button** in the left sidebar in Backlight and clicking **Release**.

## Design specifications. WIP

TODO: Spec WIP

<!-- TODO
#### Components

#### Tokens (Fonts, Color, Core etc)

#### Icons -->
