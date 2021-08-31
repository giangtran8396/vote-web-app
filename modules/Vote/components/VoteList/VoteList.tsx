import * as React from 'react';
import { VoteItem } from '../VoteItem';
import classes from './VoteList.module.css';

export function VoteList(): React.ReactElement {
  return (
    <div className={classes.container}>
    <main className={classes.main}>
      <div className={classes.grid}>
        <VoteItem />
        <VoteItem />
        <VoteItem />
        <VoteItem />
      </div>
    </main>
  </div>
  )
}
