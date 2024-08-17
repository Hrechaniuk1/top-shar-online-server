import { SORT_ORDER } from "../constants/sortConstants.js";

const parseSortOrder = (sortOrder) => {
    const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder);
    if(!isKnownOrder) return SORT_ORDER.ASC;
    return sortOrder;
};

const parseSortBy = (sortBy) => {
    const keyOfBalloons = 'price';
    if(keyOfBalloons !== sortBy) return 'number';
    return sortBy;
};

export const parsedSortParams = (query) => {
    const {sortBy, sortOrder} = query;

    const parsedSortOrder = parseSortOrder(sortOrder);
    const parsedSortBy = parseSortBy(sortBy);

    return {
        sortBy: parsedSortBy,
        sortOrder: parsedSortOrder,
    };
};
