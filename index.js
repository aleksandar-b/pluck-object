function isObject(obj) {
    return obj != null && obj.constructor.name === "Object"
}

function handleArray(fields, obj) {
    const output = {};

    fields.forEach(field => {
        output[field] = obj[field];
    });

    return output;
}

function handleObject(fields, obj) {
    const keys = Object.entries(fields);

    return keys.reduce((memo, [key, value]) => {
        if(isObject(value)) {
            const plucked = pluck(obj[key], fields[key]);
            return { ...memo, [key]: plucked };
        }

        return {...memo, [key]: obj[key]};
    }, {});
}

function handleString(fields, obj) {
    const output = {};
    output[fields] = obj[fields];
    return output;
}

function isArray(fields) {
    return Array.isArray(fields);
}

function isString(fields) {
    return typeof fields === 'string';
}

function pluck (obj, ...args) {
    if (args.length > 1) {
        let output = {};

        args.forEach((arg) => {
            if (isString(arg)) {
                output = {...output, ...handleString(arg, obj)};
            }

            if (isObject(arg)) {
                const plucked = handleObject(arg, obj);
            
                output = {...output, ...plucked};
            }
        });

        return output;
    }
    ;

    const fields = args[0];

    if (isString(fields)) {
        return handleString(fields, obj);
    }

    if (isArray(fields)) {
        return handleArray(fields, obj);
    }

    if (isObject(fields)) {
        return handleObject(fields, obj);
    }
};

module.exports = pluck;
