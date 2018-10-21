import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Icon,
  Typography
} from "@material-ui/core";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import List from "@material-ui/icons/List";
import LocalGroceryStore from "@material-ui/icons/LocalGroceryStore";
import { withStyles } from "@material-ui/core/styles";
// demo imgs
import demo1 from "../assets/demo1.jpg";
import demo2 from "../assets/demo2.jpg";
import demo3 from "../assets/demo3.jpg";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  addCart: {
    margin: "0px auto 5px auto",
    padding: 10
  }
});

const cards = [{ img: demo1 }, { img: demo2 }, { img: demo3 }];

class Album extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <LocalGroceryStore className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              My Grocery List
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                My Grocery List
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                paragraph
              >
                We can automatically read your grocery list through optical
                character recognition using the Tesseract framework and
                automatically add them to your amazon shopping cart.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      <Icon
                        className={classNames(classes.icon, "fab fa-github")}
                      />
                      View project on Github
                    </Button>
                  </Grid>
                  {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {cards.map(card => (
                <Grid item key={card} xs={12} sm={6} md={6} lg={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.img}
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Demo {card.index}
                      </Typography>
                      <Typography>
                        View the demo img list or add the list to your amazon
                        cart!
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        className={classes.addCart}
                        variant="outlined"
                        size="medium"
                        color="primary"
                        value={card.img}
                        href={card.img}
                        target="blank"
                      >
                        <List className={classes.icon} />
                        View List
                      </Button>
                      <Button
                        className={classes.addCart}
                        variant="contained"
                        size="medium"
                        color="primary"
                      >
                        <LocalGroceryStore className={classes.icon} />
                        Add to Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Github link:
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Dubhacks 2018
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
