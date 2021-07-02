export const dialog = {
    human: {
        0: { content: '/api', bot: 0 },
        1: { content: 'get', bot: 1 },
        2: { content: 'post', bot: 2 },
    },
    bot: {
        0: { content: 'Каким методом?', human: [1, 2] },
        1: { content: fetchResult},
        2: { content: 'no'},
    }
}