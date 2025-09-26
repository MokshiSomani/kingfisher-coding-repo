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

    Object.keys(obj).forEach((key) => {
        const value_Of = obj[key];
        const new_key = initial_val ? `${initial_val}/${key}` : key;

        if (value_Of && typeof value_Of === 'object' && !Array.isArray(value_Of)) {
            Object.assign(flattened_result, flattenObj(value_Of, new_key));
        } else {
            flattened_result[new_key] = value_Of;
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