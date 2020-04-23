import React, { Fragment } from 'react';
import { Button, Columns } from 'react-bulma-components';
import Music from './music';
import styled from 'styled-components';

const PlaySequenceButton = styled(Button)`
 margin-bottom: 30px;
`

const Musics = (props) => {
 return (
  <Fragment>
    <Columns className='is-mobile is-centered'>
      <Columns.Column desktop={{size: 2}} mobile={{size: 12}} className='has-text-centered'>
        <PlaySequenceButton
          className='is-medium'
          color='primary'
          outlined>
          Tocar aleatoriamente
        </PlaySequenceButton>
      </Columns.Column>
    </Columns>

  <Music/>
  <Music/>
  <Music/>

  </Fragment>
);
}
export default Musics;