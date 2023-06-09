// Дерево: v - value, c - child
const tree = [
    {
        v: 5,
        c: [
            {
                v:10,
                c: [
                    {
                        v:11,
                    }
                ]
            },
            {
                v:7,
                c: [
                    {
                        v:5,
                        c: [
                            {
                                v:1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]
function findSumRecursion(tree) {
    let sum = 0;
    tree.forEach(elem => {
        sum += elem.v;
        if (!elem.c) {
            return elem.v;
        }
        sum += findSumRecursion(elem.c);
    })
    return sum;
}

console.log(findSumRecursion(tree));

function findSumIteration(tree) {
    if (!tree.length) {
        return 0;
    }
    let sum = 0;
    let stack = []; // стек
    tree.forEach(elem => {
        stack.push(elem);
    })

    while (stack.length) {
        const elem = stack.pop();
        sum += elem.v;
        if (elem.c) {
            elem.c.forEach(child => {
                stack.push(child)
            })
        }
    }
    return sum;
}
