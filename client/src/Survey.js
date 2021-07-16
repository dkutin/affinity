import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';
import Select from 'react-select';

import ArtistCard from './components/ArtistCard';

function Survey() {
    const ARTISTS = [
        'Still Woozy',
        'Peach Pit',
        'Delta Spirit',
        'The Drums',
        'Tyler the Creator',
        'Dominic Fike',
        'Wavves',
        'Culture Abuse'
    ];

    const EXPLOREARTISTS = [
        {
            name: 'Still Woozy',
            image: 'https://i.scdn.co/image/ab6761610000e5eb213487aac43637b03baf9db8',
            genre: 'Indie',
            songs: [
                'Foolsong',
                'Goodie Bag',
                'Cooks'
            ],
            artists: [
                'Peach Pit'
            ]
        },
        {
            name: 'Peach Pit',
            image: 'https://i.scdn.co/image/ab6761610000e5ebb95318e678c40fc2f02c0722',
            genre: 'Indie',
            songs: [
                'Techno Show',
                'Tommy\'s Party',
                'Alrighty Aphrodite'
            ],
            artists: [
                'Still Woozy'
            ]
        },
        {
            name: 'Culture Abuse',
            image: 'https://i.scdn.co/image/ab67616d0000b2730e46c4155e5e065415112a13',
            genre: 'Rock',
            songs: [
                'Bee kind to the Bugs',
                'California',
                'Jealous'
            ],
            artists: [
                'Peach Pit'
            ]
        }
    ]

    const [selectedOptions, setSelect] = useState({ options: ARTISTS, selections: [""] });
    const [CustomError, setCustomError] = useState({ isError: false, message: "" });

    const handleInputChange = (e) => {
        const newSelectionsList = selectedOptions.selections.filter(item => item !== "");
        const newOptionsList = selectedOptions.options.filter(item => item !== e.label);

        newSelectionsList.push(e.label)

        setSelect({ options: newOptionsList, selections: newSelectionsList });
    };

    const handleRemoveClick = index => {
        const list = [...selectedOptions.selections];
        const removed = list[index];
        const updateSelectionsList = list.filter(item => item !== removed);

        if (removed !== "")
            setSelect({ options: [...selectedOptions.options, removed], selections: updateSelectionsList });
    };

    const handleAddClick = () => {
        if (selectedOptions.selections.indexOf("") !== (-1)) {
            setCustomError({ isError: true, message: 'Please select an artist before adding another.' });
            return;
        }

        setSelect({ options: [...selectedOptions.options], selections: [...selectedOptions.selections, ""] });
    };

    const handleStepTwoReveal = () => {
        const stepTwo = document.getElementById('step2');
        if (stepTwo.classList.contains('hidden') && selectedOptions.selections[0] !== "")
            stepTwo.classList.remove('hidden');
        else if (selectedOptions.selections[0] === "")
            setCustomError({ isError: true, message: 'Please enter atleast one artist!' });
    }

    const handleRestart = () => {
        document.getElementById('step2').classList.add('hidden');

        setSelect({ options: ARTISTS, selections: [""] });
    }

    const handleAlertClose = (e, r) => {
        if (r === 'clickaway') {
            return;
        }
        setCustomError({ isError: false, message: "" });
    };

    return (
        <Grid container>
            <Grid item xs className="" />
            <Grid item xs={10} lg={8} xl={6}>
                <div className="affinity__home--intro">
                    <Grid container>
                        <Grid item xs={12} lg={2}>
                            <h5 className="affinity__survey--indicator">1 Artists</h5>
                        </Grid>
                        <Grid item xs={12} lg={10}>
                            <h3 className="affinity__home--subtitle">Enter a list of your favourite artists.</h3>
                            {selectedOptions.selections.map((x, i) => {
                                return (
                                    <div key={i}>
                                        <div className="affinity__survey--form-entry">
                                            <span className="affinity__survey--form-artist">{i + 1}.</span>
                                            <Select
                                                className="affinity__survey--form-select"
                                                placeholder="Select an artist"
                                                label="Choose an artist"
                                                onChange={e => handleInputChange(e, i)}
                                                options={selectedOptions.options.map((e) => {
                                                    return ({ label: e, value: e });
                                                })}
                                                value={x.value}
                                            />
                                            {selectedOptions.selections.length !== 1 && <button
                                                className="affinity__survey--form-button affinity__survey--form-remove"
                                                onClick={() => handleRemoveClick(i)}> - </button>}
                                        </div>
                                        <div className="btn-box">
                                            {selectedOptions.selections.length - 1 === i && selectedOptions.selections.length < 5 && <button className="affinity__survey--form-button" onClick={handleAddClick}>+ Add one more.</button>}
                                        </div>
                                    </div>
                                )
                            })}
                        </Grid>
                    </Grid>
                    <div className="affinity__home--cta">
                        <button className="link--large" onClick={handleStepTwoReveal}>
                            <span>
                                View recommendations
                            </span>
                            <ArrowForward className="colorPrimary fontSizeSmall" />
                        </button>
                    </div>
                </div>
                <div className="affinity__home--intro hidden" id="step2">
                    <Grid container>
                        <Grid item xs={12} lg={2}>
                            <h5 className="affinity__survey--indicator">2 Explore</h5>
                        </Grid>
                        <Grid item xs={12} lg={10}>
                            <Grid container>
                                {EXPLOREARTISTS.map((e) => {
                                    return <ArtistCard info={e} key={e.name} />
                                })}
                            </Grid>
                            <div className="divider" />
                            <button className="link" onClick={handleRestart}>
                                <span className="affinity__nav--text">Restart</span>
                            </button>
                        </Grid>
                    </Grid>
                </div>
                <Snackbar open={CustomError.isError} anchorOrigin={{ vertical: 'bottom', horizontal: 'middle' }} onClose={handleAlertClose} autoHideDuration={2000}>
                    <Alert severity="error">{CustomError.message}</Alert>
                </Snackbar>
            </Grid>
            <Grid item xs className="" />
        </Grid>
    );
}

export default Survey;