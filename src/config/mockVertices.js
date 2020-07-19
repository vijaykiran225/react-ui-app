const User1 = {
    x: 55,
    y: 15
};
const User2 = {
    x: 10,
    y: 125
};
const User3 = {
    x: 110,
    y: 115
};

const User6 = {
    x: 50,
    y: 55
};

const User5 = {
    x: 10,
    y: 55
};

const User4 = {
    x: 75,
    y: 120
};

const User2ToUser1 = {
    from: User2,
    to: User1,
    direction: false
};
const User6ToUser2 = {
    from: User6,
    to: User2,
    direction: false
};
const User5ToUser1 = {
    from: User5,
    to: User1,
    direction: false
};
const User3Receive = {
    from: User1,
    to: User3,
    direction: true
};

const User2ToUser4 = {
    from: User2,
    to: User4,
    direction: false
};


const vertices = {
    User1, User2, User6, User3, User5, User4
}

const edges = [User2ToUser1, User6ToUser2, User5ToUser1, User3Receive, User2ToUser4];

const movements = [
    [User6ToUser2, User2ToUser1, User3Receive],
    [User2ToUser1, User3Receive],
    [User5ToUser1, User3Receive],
    [User2ToUser4]
];

export default {
    vertices,
    edges,
    movements
}