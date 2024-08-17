const parseCategory = (category) => {
    const isString = typeof category === 'string';
    if(!isString) return;
    const isValidType = ['man', 'girl', 'children', 'babyborn', 'number'].includes(category);
    if(isValidType) return category;

};

export function parseFilters(query) {
    const {category} = query;
    const parsedCategory = parseCategory(category);
    return {category: parsedCategory};
};

