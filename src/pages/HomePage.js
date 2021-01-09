import React from 'react'
import { Parallax } from 'react-parallax'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import InsideCard from '../components/HomePage/InsideCard'
import InsideCardMobile from '../components/HomePage/InsideCardMobile'
import WelcomeCard from '../components/HomePage/WelcomeCard'
import WelcomeCardMobile from '../components/HomePage/WelcomeCardMobile'
import FooterPage from '../components/HomePage/FooterPage'
import InformationPage from '../components/HomePage/InformationPage'
import MoreInformation from '../components/HomePage/MoreInformation'
import MoreInformationMobile from '../components/HomePage/MoreInformationMobile'
import InformationPageMobile from '../components/HomePage/InformationPageMobile'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 'auto',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
}))

const HomePage = () => {
  const classes = useStyles()
  const isDesktop = window.innerWidth < 1000
  const image1 = 'https://i.imgur.com/kRCcCIe.png'

  if (!isDesktop) {
    return (
      <Parallax strength={1000} bgImage={image1}>
        <div className={classes.root}>
          <Container fixed>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <WelcomeCard />
                <br />
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
              </Grid>
              <Grid item xs={12}>
                <MoreInformation />
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <br />
            <InsideCard />
            <br />
            <br />
            <br />
            <br />
            <InformationPage />
            <hr />
            <br />
            <FooterPage />
          </Container>
        </div>
      </Parallax>
    )
  } else {
    return (
      <Parallax strength={1000} bgImage={image1}>
        <div className={classes.root}>
          <Container fixed>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <br />
                <WelcomeCardMobile />
              </Grid>
              <Grid item xs>
                <InsideCardMobile />
              </Grid>
              <Grid item xs>
                <MoreInformationMobile />
              </Grid>
              <Grid item xs>
                <InformationPageMobile />
              </Grid>
            </Grid>
            <br />
            <hr />
            <br />
            <FooterPage />
          </Container>
        </div>
      </Parallax>
    )
  }
}

export default HomePage
