import React from 'react'
import ImageCard from './ImageCard'
import { makeStyles } from '@material-ui/core/styles'
import places from '../static/places'
import useWindowPosition from '../Hook/useWindowPosition'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    }
  }
}))

export default function PlaceToVisit() {
  const classes = useStyles(); 
  const checked = useWindowPosition('header');   
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[0]} checked={checked} />                           
      <ImageCard place={places[1]} checked={checked} />                           
    </div>
  )
}