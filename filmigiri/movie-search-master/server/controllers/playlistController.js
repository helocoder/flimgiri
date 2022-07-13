const asyncHandler = require('express-async-handler')
const Playlist = require('../Models/playlistModel')

module.exports = {
    createPlalist: asyncHandler(async (req, res)=>{
        const {userId} = req.body
        
    }),
    addMovie: asyncHandler(async(req, res)=>{
        const {title} = req.body
        //const movie = await Playlist.create({})
    }),
    deleteMovie: asyncHandler(async(req, res)=>{})
}