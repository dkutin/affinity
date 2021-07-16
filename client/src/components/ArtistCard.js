import React from 'react';
import Grid from '@material-ui/core/Grid';

function ArtistCard(props) {

    const info = props.info;
    const border = props.border;

    return (
        <Grid item xs={6} lg={4} xl={4} style={{ marginTop: 12, borderBottom: `${border ? '1px solid grey' : 'none'}` }}>
            <Grid container className="affinity__artist--feature">
                <Grid item xs={12} lg={5}>
                    <img className="affinity__artist__img" alt={info.name} src={info.image} />
                </Grid>
                <Grid item xs={12} lg={7} style={{ paddingLeft: 6 }}>
                    <h4>{info.name}</h4>
                    <h5>{info.genre}</h5>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 16 }}>
                    <p> Top Songs </p>
                    <ol>
                        {info.songs.map((e) => {
                            return (<li>{e}</li>);
                        })}
                    </ol>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ArtistCard;