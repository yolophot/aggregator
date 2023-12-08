module.exports = {
    branches: ['main', { name: 'develop', prerelease: 'develop' }],
    repositoryUrl: 'https://github.com/ayles1/aggregator',
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                releaseRules: [
                    { type: 'build', release: 'major' },
                    { type: 'feat', release: 'minor' },
                    { type: 'chore', release: 'patch' },
                    { type: 'ci', release: 'patch' },
                    { type: 'perf', release: 'patch' },
                    { type: 'revert', release: 'patch' },
                    { type: 'style', release: 'patch' },
                    { type: 'test', release: 'patch' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'major', release: 'major' },
                    { type: 'doc', release: 'patch' },
                    { type: 'ci', release: 'patch' },
                    { type: 'fix', release: 'patch' },
                    { type: 'docs', release: 'patch' },
                ],
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                linkReferences: true,
                presetConfig: {
                    types: [
                        {
                            type: 'fix',
                            section: '🐞 Bugs',
                            hidden: false,
                        },
                        {
                            type: 'feat',
                            section: '✨ Features',
                            hidden: false,
                        },
                        {
                            type: 'build',
                            section: '📦 Build',
                            hidden: false,
                        },
                        {
                            type: 'doc',
                            section: '📄 Docs',
                            hidden: false,
                        },
                        {
                            type: 'ci',
                            section: '🔨 CI',
                            hidden: false,
                        },
                    ],
                },
            },
        ],
        [
            '@semantic-release/changelog',
            {
                changelogFile: 'CHANGELOG.md',
            },
        ],
        ['@semantic-release/github'],
        [
            '@semantic-release/exec',
            {
                prepareCmd:
                    "echo 'NEXT_VERSION=${nextRelease.version}' >> $GITHUB_ENV; echo 'CURRENT_VERSION=${lastRelease.version}' >> $GITHUB_ENV",
            },
        ],
    ],
};
