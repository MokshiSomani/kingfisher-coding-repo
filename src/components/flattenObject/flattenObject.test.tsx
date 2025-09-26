import { flattenObj } from "./flattenObject";

describe('flattenObj', () => {
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

    test('should flatten a nested object', () => {
        const result = flattenObj(data);
        expect(result).toEqual({
            name: "Tejas",
            "hobbies.anime": "Naruto",
            "hobbies.country": "Japan",
            "skills.frontend.primary": "React",
            "skills.frontend.secondary": "Angular",
            "skills.backend": "Node Js"
        });
    });

    test('should handle empty objects', () => {
        expect(flattenObj({})).toEqual({});
    });

    test('should handle non-nested objects', () => {
        expect(flattenObj({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
    });

});