import Image from 'next/image';
import * as React from 'react';
import HeartUnCheck from '../../../../shared/assets/images/heart-icon-uncheck.jpg'
import classes from './VoteItem.module.css'

export function VoteItem(): React.ReactElement {
  return (
    <div className={classes.card}>
      <div className={classes.title}>
        <p>my Title</p>
        <Image src={HeartUnCheck} width="36" height="36"/>
      </div>
      <p>Find in-depth information about Next.js features and API.</p>
    </div>
  )
}
