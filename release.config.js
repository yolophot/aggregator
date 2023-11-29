module.exports = {
    branches: ['main', { name: 'develop', prerelease: 'develop' }],
    repositoryUrl: 'https://github.com/ayles1/photo',
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                releaseRules: [
                    { type: 'bug', release: 'patch' },
                    { type: 'build', release: 'patch' },
                    { type: 'feat', release: 'minor' },
                    { type: 'refactor', release: 'patch' },
                    { type: 'major', release: 'major' },
                    { type: 'doc', release: 'patch' },
                    { type: 'ci', release: 'patch' },
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
                            type: 'bug',
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
    ],
};
