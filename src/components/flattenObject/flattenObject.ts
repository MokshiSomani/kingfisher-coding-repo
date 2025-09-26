type data = {
    name: string,
    hobbies: {
        anime: string;
        country: string;
    },
    skills: {
        frontend: {
            primary: string,
            secondary: string,
        },
        backend: string
    }
}

type Flattened = {
    [key: string]: string;
}


export const flattenObj = (obj: any, initial_val = ''): Flattened => {
    let flattened_result: Flattened = {};

    Object.keys(obj).forEach((prop) => {
        const value_Of = obj[prop];
        const new_prop = initial_val ? `${initial_val}.${prop}` : prop;

        if (value_Of && typeof value_Of === 'object' && !Array.isArray(value_Of)) {
            Object.assign(flattened_result, flattenObj(value_Of, new_prop));
        } else {
            flattened_result[new_prop] = value_Of;
        }
    });

    return flattened_result;
};

const data = {
    name: "Tejas",
    hobbies: {
        anime: "Naruto",
        country: "Japan"
    },
    skills: {
        frontend: {
            primary: "React",
            secondary: "Angular"
        },
        backend: "Node Js"
    }
};

const flatData = flattenObj(data);
console.log(flatData);