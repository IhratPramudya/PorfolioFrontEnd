/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ContentItem from '../HeadRight/ContentItem';

function SongsListDetail({ songs }) {
    if (songs === undefined) {
        return (
            <div className="row gy-5">
                <h1>Music Tidak Ditemukan</h1>
            </div>
        );
    }

    return (
        <div className="row gy-5">

            {songs.map((song) => (
                <div className="col-4">
                    <ContentItem key={song.id} id={song.id} {...song} />
                </div>
            ))}
        </div>
    );
}

export default SongsListDetail;
