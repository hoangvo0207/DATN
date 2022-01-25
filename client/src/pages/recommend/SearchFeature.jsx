import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useState } from 'react';

const SearchFeature = () => {
    return (
        <TextField
            style={{ backgroundColor: 'white', margin: '20px 0 10px 56px', borderRadius: 10, width: 250 }}
            label='Search Movie'
            margin='normal'
            variant='filled'
        />
    );
};

export default SearchFeature;