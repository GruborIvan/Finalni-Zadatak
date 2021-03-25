import React, { useState } from 'react';
import MovieService from '../services/MovieService';

const MovieForm = ({onSubmit}) => {

    const [slikaFilma,setSlikaFilma] = useState('');
    const [naslovFilma,setNaslovFilma] = useState('');
    const [podnaslovFilma,setPodnaslovFilma] = useState('');
    const [opisFilma,setOpisFilma] = useState('');

    const onMovieFormSubmit = (e) => {
        e.preventDefault();

        // --------------------------------
        // ------- VALIDACIJA -------------
        var success = true;
        document.getElementById('ErrSlika').style.visibility = 'hidden';
        document.getElementById('ErrNaslov').style.visibility = 'hidden';
        document.getElementById('ErrPodnaslov').style.visibility = 'hidden';
        document.getElementById('ErrOpis').style.visibility = 'hidden';

        if (naslovFilma === '') {
            success = false;
            document.getElementById('ErrNaslov').style.visibility = 'visible';
        }
        if (podnaslovFilma === '') {
            success = false;
            document.getElementById('ErrPodnaslov').style.visibility = 'visible';
        }
        if (opisFilma === '') {
            success = false;
            document.getElementById('ErrOpis').style.visibility = 'visible';
        }

        // --------------------------------
        if (success) {
            const newMovie = {id: Math.round(Math.random() * 1000),title : naslovFilma, subtitle: podnaslovFilma, description: opisFilma, imageurl: slikaFilma,year: 0,imageUrl: slikaFilma,rating: 0, voteCount: 0};
            MovieService.addMovie(newMovie);
            ClearForm();
            onSubmit();
        }
    };

    const ClearForm = () => {
        setSlikaFilma('');
        setNaslovFilma('');
        setPodnaslovFilma('');
        setOpisFilma('');
    };

    const MakePath = (path) => {
        const base = '../images/';
        const addition = path.split('\\')[2];
        const fullPath = base + addition;
        console.log(fullPath);
        setSlikaFilma(fullPath);
    }

    return (<div style={{marginTop: 40,border: 'thick solid #000000'}}>

        <h2> Dodavanje novog filma! </h2> <br/>

        <form className="ui form" onSubmit={(e) => onMovieFormSubmit(e)}>
            <div className="field">
                <label> Slika filma: </label>
                <input type="file" alt="Submit" id="pic" onChange={(e) => MakePath(e.target.value)}/>
                <p id="ErrSlika" style={{color: 'red',visibility: 'hidden'}}> Niste uneli sliku! </p>
            </div>

            <div className="field">
                <label> Naslov filma: </label>
                <input className="ui" type="text" placeholder="Naslov filma.." value={naslovFilma} onChange={(e) => setNaslovFilma(e.target.value)}/>
                <p id="ErrNaslov" style={{color: 'red',visibility: 'hidden'}}> Niste uneli naslov filma! </p>
            </div>

            <div className="field">
                <label> Podnaslov filma: </label>
                <input className="ui" type="text" placeholder="Podnaslov filma.." value={podnaslovFilma} onChange={(e) => setPodnaslovFilma(e.target.value)}/>
                <p id="ErrPodnaslov" style={{color: 'red',visibility: 'hidden'}}> Niste uneli podnaslov filma! </p>
            </div>

            <div className="field">
                <label> Opis filma: </label>
                <input className="ui" type="text" placeholder="Opis filma.." value={opisFilma} onChange={(e) => setOpisFilma(e.target.value)}/>
                <p id="ErrOpis" style={{color: 'red',visibility: 'hidden'}}> Niste uneli opis filma! </p>
            </div>

            <div style={{marginLeft: 80,marginBottom: 10}}>
                <button type="input" style={{marginRight: 20}}> Add Movie </button>
                <button type="reset"> Cancel </button>
            </div>
            
        </form>
    </div>)
};

export default MovieForm;