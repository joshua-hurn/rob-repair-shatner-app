import * as express from "express";
import dbMovies from "../db/moviesQuery"

const router = express.Router();

router.get("/", async (req, res ) => {
    try {
        let data =  await dbMovies.all();
        console.log(data);
        res.json(data);
        console.log("does this work?")
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
        
    }
})

router.get("/:id", async (req, res ) => {
    let id = req.params.id;
    try {
        let film =  await dbMovies.get(id);
        res.json(film)
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

router.post("/", async (req, res) => {
    const makeFilm = req.body
    console.log("does this work?")
    try{
        const dataMovie = await dbMovies.post(dbMovies.name, dbMovies.date, dbMovies.role);
        res.json(dataMovie)
    } catch (e) {
        res.status(500).json(e)
        console.log(e)
    }
})

router.put("/:id", async (req, res) => {
    try{
        let data = await dbMovies.put(req.params.id, req.body.name)
        console.log(data)
        res.json(data)
    } catch (e) {
        console.log(e)
    }
})

router.delete("/:id", async (req, res) => {
    try{
        let id = Number (req.params.id);
        await dbMovies.deleteMovie(id);
        res.json({msg: `Movie ${id} deleted`})
    } catch (e) {
        console.log(e)
    }
})

export default router;