import { specialForms, evaluate, run } from "./DependencyFile/code.js";

specialForms.set = (args, env) => {
    if(args.length !=2 || args[0].type != 'word') {
        throw new Error("Bad use of set");
    }

    let varName = args[0].name;
    let value = evaluate(args[1], env);

    for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
        if(Object.prototype.hasOwnProperty.call(scope, varName)) {
            scope[varName] = value;
            return value;
        }
    }
    throw new ReferenceError(`Setting undefined variable ${varName}`);
};

run(`
do(define(x, 4),
        define(setX, fun(val, set(x, val))),
        setX(50),
        print(x))`
);

run(`set(quux, true)`);