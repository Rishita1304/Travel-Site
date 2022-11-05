import Hotel from '../models/Hotel.js';

export const createHotel = async (req, res, next) => {
    
    try{
        const newHotel = new Hotel({...req.body});
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch(error) {

        next(error);

    }
};

export const getHotel = async (req, res, next) => {
    try{

        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);

    } catch(error) {

        next(error);

    }
};

export const getAllHotels = async (req, res, next) => {

    const {min, max, ...others} = req.query;
    try{

        const hotels = await Hotel.find({...others, price: {$gt:min || 1, $lt:max || 80}}).limit(req.query.limit);
        res.status(200).json(hotels);

    } catch(error) {

        next(error);

    }
};

export const bycity = async (req, res, next) => {
    const cities = req.query.cities && req.query.cities.split(',') 
    try{

        const list = await Promise.all(cities.map(city => {
            return Hotel.find({city:city});
        }));
        res.status(200).json(list);

    } catch(error) {

        next(error);

    }
};

export const bycitycount = async (req, res, next) => {
    const cities = req.query.cities && req.query.cities.split(',')
    try{

        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city});
        }));
        res.status(200).json(list);

    } catch(error) {

        next(error);

    }
};

export const bytype = async (req, res, next) => {
    try{

        const allHotel = await Hotel.countDocuments({type: "Hotel"});
        const allApartment = await Hotel.countDocuments({type: "Apartment"});
        const allResort = await Hotel.countDocuments({type: "Resort"});
        const allCabin = await Hotel.countDocuments({type: "Cabin"});

        res.status(200).json([
            {type:'Hotel', count: allHotel},
            {type:'Apartment', count: allApartment},
            {type:'Resort', count: allResort},
            {type:'Cabin', count: allCabin},
        ]);

    } catch(error) {

        next(error);

    }
};