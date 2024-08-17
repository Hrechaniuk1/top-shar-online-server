import { SORT_ORDER } from "../constants/sortConstants.js";
import {balloonsCollection} from '../db/models/balloons.js'
import {calculatePaginationData} from '../utils/calculatePaginationData.js'
import createHttpError from "http-errors";


export const getAllBalloons = async (page = 1, perPage = 7, sortBy = 'number', sortOrder = SORT_ORDER.ASC, filter = {}) => {
    const limit = perPage;
    const skip = (page - 1) * perPage;

    const balloonsQuery = balloonsCollection.find();

    if(filter.category) {
        balloonsQuery.where("category").equals(filter.category)
    };

    const [balloonsCount, balloons] = await Promise.all([
        balloonsCollection.find().merge(balloonsQuery).countDocuments(),
        balloonsQuery.skip(skip).limit(limit).sort({[sortBy]: sortOrder}).exec(),
    ])

    if (balloons.length === 0) {
        throw createHttpError(404, 'Not Found');
    }

    const pagination = calculatePaginationData(balloonsCount, page, perPage);

    return {
        data: balloons,
        ...pagination
    }
};
