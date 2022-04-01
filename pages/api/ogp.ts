import { NextApiRequest, NextApiResponse } from "next";

const createOgp = async(
    req: NextApiRequest,
    res:NextApiResponse
): Promise<void> => {
    const { id } = req.query;
    const WIDTH = 1200 
}