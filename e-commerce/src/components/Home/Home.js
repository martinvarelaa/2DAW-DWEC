import React, {useState} from 'react'
import SportsEsportsIcon from '@material-ui/icons/SportsEsportsTwoTone';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindowsTwoTone';
import MouseIcon from '@material-ui/icons/MouseTwoTone';
import ViewCarouselTwoToneIcon from '@material-ui/icons/ViewCarouselTwoTone';

import { Icon, Container, Typography, Grid, Button, Card, CardMedia, CardActions, CardContent } from '@material-ui/core';
import useStyles from './styles';
import { Redirect } from 'react-router';

const Home = () => {

  const classes = useStyles();

  const [redirect, setRedirect] = useState();

  const categories = [

    { 'Consolas': {imgPath: 'https://i.blogs.es/b767f5/switch-xbox-one-ps4.jpg.optimal/1366_2000.jpeg', desc : 'Para los del mando' , icon : <SportsEsportsIcon></SportsEsportsIcon>} }, 
    { 'Accesorios': {imgPath: 'https://www.marsgaming.eu/uploads/_thumnails/mrcp1_960x960.png', desc : 'Siempre hay que estar bien equipados', icon : <DesktopWindowsIcon></DesktopWindowsIcon>} }, 
    { 'Ordenadores': {imgPath: 'https://www.newskillgaming.com/1935-large_default/newskill-manticore-elite-pc-gaming-rtx-3080.jpg', desc : 'Pura potencia!', icon : <MouseIcon></MouseIcon>} }, 
    { 'Videojuegos': {imgPath: 'https://brainstomping.files.wordpress.com/2010/11/sin-titulo-1.jpg', desc : 'A pasar un buen rato...', icon : <ViewCarouselTwoToneIcon></ViewCarouselTwoToneIcon>} }

  ];

  const doRedirect  = () => {
    setRedirect(true);
  }

  return (
    <div className={classes.root} >
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Bienvenido!
          </Typography>
        <Typography variant="h5" align="left" color="textSecondary" paragraph >
          Si estabas buscando el 
          lugar en el que poder comprar todos tus productos favoritos relacionados con el 
          gaming a precios irrisorios, estás de suerte, ya lo has encotrado!
          </Typography>
        <div id="buttons">
          <Grid container spacing={2} justify="flex-start" className={classes.buttons}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={doRedirect}>
                Productos
                </Button>
            </Grid>
          
          </Grid>
        </div>
      </Container>
      <Container className={classes.cardGrid} >

        <Grid container spacing={3} justify="center" >

          
            {
              categories.map((category, index) => (
                <Grid item key={index} xs={12} sm={6} md={3} lg={3} >
                <Card className={classes.cards}>
                  <div className={classes.alignTitle}>
                  <Icon className={classes.icon}>{Object.values(category)[0].icon}</Icon>
                  <Typography  gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                      {Object.keys(category)}
                  </Typography>

                  </div>
                
                  <CardMedia
                    src={Object.values(category)[0].imgPath}
                    title="Category image!"
                    component="img"
                    className={classes.cardImage}
                  />
                  <CardContent>
                    
                    <Typography align="center" className={classes.cardDescription}>
                      {Object.values(category)[0].desc}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    
                  </CardActions>
                </Card>
                </Grid>
              ))
            }
          
        </Grid>
      </Container>
      {
        redirect &&(
          <Redirect to="/products"></Redirect>
        )
      }    </div>
  )
}

export default Home
