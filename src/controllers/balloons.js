import createHttpError from 'http-errors';

import {parsePaginationParams} from '../utils/parsePaginationParams.js';
import {parsedSortParams} from '../utils/parseSortParams.js';
import {parseFilters} from '../utils/parseFilters.js'
import {getAllBalloons} from '../services/balloons.js'

export async function getBalloonsController(req, res) {
    const {page, perPage} = parsePaginationParams(req.query);
    const {sortBy, sortOrder} = parsedSortParams(req.query);
    const filter = parseFilters(req.query);

    const balloons = await getAllBalloons(page, perPage, sortBy, sortOrder, filter);
    res.status(200).json({
        status: 200,
        message: "Successfully found balloons!",
        data: balloons,
      });
};
