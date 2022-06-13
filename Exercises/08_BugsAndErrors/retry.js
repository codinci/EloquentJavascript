class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math. floor((Math. random() * 10) + 1) < 2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Sorry multiplication failed");
    }
}

function alwaysMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure))
            throw e;
        }
    }
}

console.log(alwaysMultiply(8, 8));