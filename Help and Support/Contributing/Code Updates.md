---
aliases: [Code Updates]
description: "Want to know how you can contribute to Javalent by helping with Code Updates? Check this out."
permalink: support/contributing/code-updates
publish: true
tags: [Support/Documentation]
---

# Code updates

## Development

Looking to help out on a specific repository? We're currently working on getting things set up for willing helpers to easily hit the ground running, but for now, feel free to create an issue on the repository of choice or message Javalent on the [Obsidian Discord](https://discord.com/channels/686053708261228577/932707309195493416).

### Recommended links

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - This is a bible on submitting well-written commits to Javalent. Doing so allows automated tools to pick up the accepted commit, and generate a release. See also [Automate a Release](Help%20and%20Support/Contributing/Code%20Updates.md#Automate%20a%20Release).

## Submitting a pr

### Automate a release

Javalent repositories currently use the Release Please action. To read more about Release Please, check out their [Github Repository](https://github.com/googleapis/release-please "Github").

Adding the following to the body of the PR will make your PR trigger a release when it is passed through by a reviewer.

```md
BEGIN_COMMIT_OVERRIDE
fix: Equivalent of a patch
feat: Equivalent of minor update
feat!: Equivalent of Major update
END_COMMIT_OVERRIDE
```

Prefacing your commit message with `fix`, `feat`, and/or `feat!` will auto-update the versioning of the next release, similar to SEMVER's `patch`, `minor`, and `major`.


